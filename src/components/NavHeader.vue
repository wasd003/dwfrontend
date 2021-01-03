<template>
    <div class="root">
        <div class="menu-wrapper">
            <el-menu class="top-menu"
                     mode="horizontal"
                     background-color="#545c64"
                     @select="handleSelect"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-menu-item index="neo4j">Neo4j</el-menu-item>
                <el-submenu index="rdbms">
                    <template slot="title">RDBMS</template>
                    <el-menu-item index="nondim">范式化建模</el-menu-item>
                    <el-menu-item index="dim">维度建模</el-menu-item>
                </el-submenu>
                <el-menu-item index="hive">Hive</el-menu-item>
            </el-menu>
        </div>
        <div class="search_bar">
            <span>页码：</span>
            <el-input v-model="pageId" placeholder=""
            class="page"></el-input>
            <el-cascader
                    class="select_query"
                    v-model="value"
                    :options="options"
                    placeholder="查询选择"
                    @change="handleChange">
            </el-cascader>
            <el-button type="primary" class="btn" @click="query"
                       icon="el-icon-search">点我查询</el-button>
            <el-button type="primary" class="btn" @click="cmpQuery"
            icon="el-icon-s-promotion">性能比较</el-button>
        </div>

    </div>
</template>

<script>
    import apiUtil from '../utils/apiUtil';
    import {mapState} from 'vuex';
    export default {
        name: "NavHeader",
        methods: {
            /**
             * 头部tab选中触发切换数据库
             * @param key: el-menu-item的index
             */
            handleSelect(key) {
                this.$store.commit('setCurDb', key);
            },

            /**
             * 根据选择的查询条件切换路由，改变数据输入组件
             * */
            handleChange(path) {
                let find = false;
                this.$store.commit('setQueryPath', path);
                for (let key in this.queryToInput) {
                    if (find) break;
                    for (let i = 0; i < this.queryToInput[key].length; i++) {
                        if (this.equal(this.queryToInput[key][i], path)) {
                            // 禁止进入同一路由
                            if (this.$route.path === '/' + key) {
                                return;
                            }
                            this.$router.push(key);
                            find = true;
                            break;
                        }
                    }
                }
            },
            equal(arr1, arr2) {
                if (arr1.length !== arr2.length) {
                    return false;
                }
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) return false;
                }
                return true;
            },
            /**
             * 查询按钮事件触发
             * */
            query() {
                this.$store.commit('setIsChart', false);
                // 1. 确定已选择了一种数据库
                if (this.curDb == null) {
                    this.$message({
                        message: '请选择一种数据库',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                // 2. 确定已选择了页码且格式正确
                let val = parseInt(this.pageId)
                if (!val || val < 1) {
                    this.$message({
                        message: '请选择正确的页码',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                // 3. 确定已经选择了查询问题
                let httpAttrs = this.getHttpAttrs();
                if (httpAttrs == null) {
                    this.$message({
                        message: '请选择一种查询',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                this.$store.commit('setLoading', true);
                apiUtil({
                    url: this.getUrl(httpAttrs, this.curDb),
                    method: 'get',
                    params: httpAttrs.params
                }).then(e => {
                    this.$store.commit('setLoading', false);
                    for (let i = 0; i < httpAttrs.methods.length; i ++ ) {
                        this.$store.commit(httpAttrs.methods[i].func, e.data[httpAttrs.methods[i].arg]);
                    }
                });
            },

            /**
             * 性能比较按钮事件触发
             * */
            cmpQuery() {
                this.$store.commit('setIsChart', true);
                // 1. 确定已选择了页码且格式正确
                let val = parseInt(this.pageId)
                if (!val || val < 1) {
                    this.$message({
                        message: '请选择正确的页码',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                // 2. 确定已经选择了查询问题
                let httpAttrs = this.getHttpAttrs();
                if (httpAttrs == null) {
                    this.$message({
                        message: '请选择一种查询',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }

                // 3. 发起查询
                let dbs = ['dim', 'neo4j', 'hive'];
                // 先把上一次请求的状态清空
                for (let i = 0; i < dbs.length; i ++ ) {
                    this.$store.commit('set' + dbs[i] + 'Duration', 0);
                }
                for (let i = 0; i < dbs.length; i ++ ) {
                    apiUtil({
                        url: this.getUrl(httpAttrs, dbs[i]),
                        method: 'get',
                        params: httpAttrs.params
                    }).then(e => {
                        this.$store.commit('set' + dbs[i] + 'Duration', e.data.duration);
                    });
                }

            },
            getUrl(httpAttrs, db) {
                if (this.equal(this.queryPath, ['relation', 'actorCoActor']) ||
                this.equal(this.queryPath, ['relation', 'actorCoDirector'])) {
                    if (db === 'hive') {
                        return '/dim' + httpAttrs.url;
                    }
                }
                return '/' + db + httpAttrs.url;
            },
            getHttpAttrs() {
                let s = '';
                for (let i = 0; i < this.queryPath.length; i ++ ) {
                    s += this.queryPath[i] + '_';
                }
                if (!(s in this.queryToHttpAttrs)) {
                    return null;
                }
                return this.queryToHttpAttrs[s];
            }
        },
        computed: {
            ...mapState(['year', 'month', 'day', 'name', 'weekday', 'rating', 'curDb', 'queryPath']),
            /**
             * 放在computed中，params中的值及时更新
             * */
            queryToHttpAttrs(){
                return {
                    'timeDim_year_': {
                        url: '/time/year',
                        params: {
                            year: this.year,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'timeDim_monthDay_': {
                        url: '/time/month_day',
                        params: {
                            month: this.month,
                            day: this.day,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'timeDim_weekday_': {
                        url: '/time/weekday',
                        params: {
                            weekday: this.weekday,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'director_directorTot_': {
                        url: '/director/movie_count',
                        params: {
                            name: this.name,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'actor_starringTot_': {
                        url: '/actor/movie_count',
                        params: {
                            name: this.name,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'actor_supportingTot_': {
                        url: '/actor/movie_count',
                        params: {
                            name: this.name,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'relation_actorCoActor_': {
                        url: '/actor/cooperation',
                        params: {
                            pageId: this.pageId
                        },
                        methods: [{func: 'setAAList', arg: 'reslist'},
                            {func: 'setDuration', arg: 'duration'}]
                    },
                    'relation_actorCoDirector_': {
                        url: '/actor/director',
                        params: {
                            pageId: this.pageId
                        },
                        methods: [{func: 'setADList', arg: 'reslist'},
                            {func: 'setDuration', arg: 'duration'}]
                    },
                    'movieType_': {
                        url: '/movie/type',
                        params: {
                            type: this.name,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'review_xScore_': {
                        url: '/movie/rating',
                        params: {
                            rating: this.rating,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'review_positive_': {
                        url: '/movie/positive',
                        params: {
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'combination_scoreType_': {
                        url: '/movie/rating/type',
                        params: {
                            pageId: this.pageId,
                            type: this.name,
                            rating: this.rating
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'combination_scoreDirector_': {
                        url: '/movie/director/rating',
                        params: {
                            pageId: this.pageId,
                            director: this.name,
                            rating: this.rating
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'movieName_versions_': {
                        url: '/movie/version',
                        params: {
                            movie: this.name,
                            pageId: this.pageId
                        },
                        methods: [{func: 'setMovieList', arg: 'reslist'},
                            {func: 'setCount', arg: 'count'}, {func: 'setDuration', arg: 'duration'}]
                    },
                    'alter_percentage_': {
                        url: '/movie/percentage',
                        methods: [{func: 'setPercentageList', arg: 'reslist'},
                            {func: 'setDuration', arg: 'duration'}]
                    },
                    'alter_actorCareer_': {
                        url: '/actor/career',
                        params: {
                            actor: this.name
                        },
                        methods: [{func: 'setCareerList', arg: 'reslist'},
                            {func: 'setDuration', arg: 'duration'}]
                    },
                    'handWriting_': {
                        url: '/sql',
                        params: {
                            sql: this.name
                        },
                        methods: [{func: 'setJson', arg: 'reslist'},
                            {func: 'setDuration', arg: 'duration'}]
                    }
                }
            }
        },
        data() {
            return {
                value: [],
                pageId: 1,
                options:
                    [
                        {
                            value: 'timeDim',
                            label: '时间维度查询',
                            children:
                                [
                                    {
                                        value: 'year',
                                        label: 'xx年有多少电影'
                                    },
                                    {
                                        value: 'monthDay',
                                        label: 'xx月xx日有多少电影'
                                    },
                                    {
                                        value: 'weekday',
                                        label: '周x新增电影'
                                    }
                                ]
                        },
                        {
                            value: 'movieName',
                            label: '电影名称维度查询',
                            children:
                                [
                                    {
                                        value: 'versions',
                                        label: 'xx电影共有多少版本'
                                    }
                                ]
                        },
                        {
                            value: 'director',
                            label: '导演维度查询',
                            children:
                                [
                                    {
                                        value: 'directorTot',
                                        label: 'xx导演共有多少电影'
                                    }
                                ]
                        },
                        {
                            value: 'actor',
                            label: '演员维度',
                            children:
                                [
                                    {
                                        value: 'starringTot',
                                        label: 'xx演员主演有多少电影'
                                    },
                                    {
                                        value: 'supportingTot',
                                        label: 'xx演员参演多少电影'
                                    }
                                ]
                        },
                        {
                            value: 'relation',
                            label: '关系查询',
                            children:
                                [
                                    {
                                        value: 'actorCoActor',
                                        label: '经常合作的演员有哪些'
                                    },
                                    {
                                        value: 'actorCoDirector',
                                        label: '经常合作的导演和演员有哪些'
                                    }
                                ]
                        },
                        {
                            value: 'movieType',
                            label: '按照电影类别查询'
                        },
                        {
                            value: 'review',
                            label: '评论维度查询',
                            children: [
                                {
                                    value: 'xScore',
                                    label: 'xx评分以上有哪些'
                                },
                                {
                                    value: 'positive',
                                    label: '包含正面评价的电影有哪些'
                                }
                            ]
                        },
                        {
                            value: 'handWriting',
                            label: '手写SQL'
                        },
                        {
                            value: 'combination',
                            label: '组合查询',
                            children: [
                                {
                                    value: 'scoreType',
                                    label: 'xx分以上的xx类型电影'
                                },
                                {
                                    value: 'scoreDirector',
                                    label: 'xx分以上的xx执导的电影'
                                }
                            ]
                        },
                        {
                            value: 'alter',
                            label: '额外查询',
                            children: [
                                {
                                    value: 'percentage',
                                    label: '1~5星电影数量'
                                },
                                {
                                    value: 'actorCareer',
                                    label: 'xx演员的职业生涯'
                                }
                            ]
                        }
                    ],
                /**
                 * 根据查询问题选择数据输入输出组件
                 */
                queryToInput: {
                    'yearMovie': [
                        ['timeDim', 'year'],
                    ],
                    'monthDayMovie': [
                        ['timeDim', 'monthDay']
                    ],
                    'textMovie': [
                        ['movieName', 'versions'],
                        ['director', 'directorTot'],
                        ['actor', 'starringTot'],
                        ['actor', 'supportingTot'],
                        ['movieType']
                    ],
                    'noneAA': [
                        ['relation', 'actorCoActor'],
                    ],
                    'noneAD': [
                        ['relation', 'actorCoDirector'],
                    ],
                    'noneMovie': [
                        ['review', 'positive']
                    ],
                    'weekdayMovie': [
                        ['timeDim', 'weekday']
                    ],
                    'slidingBlockMovie':[
                        ['review', 'xScore'],
                    ],
                    'slidingTextMovie': [
                        ['combination', 'scoreType'],
                        ['combination', 'scoreDirector']
                    ],
                    'noneMovieCountPie': [
                        ['alter', 'percentage']
                    ],
                    'textCareer': [
                        ['alter', 'actorCareer']
                    ],
                    'textJson': [
                        ['handWriting']
                    ]
                },


            }
        }
    }
</script>

<style lang="scss">
    .root {
        width: 1120px;
        margin: 0 auto;
        .menu-wrapper {
            display: flex;
            justify-content: center;
            .top-menu {
                width: 100%;
                display: flex;
                justify-content: space-between;
                border-radius: 30px;
            }
        }
        .search_bar {
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .select_query {
            width: 660px;
        }
        .page {
            width: 120px;
        }
        .btn {
            width: 120px;
        }
    }





</style>
