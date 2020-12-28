<template>
    <div class="root">
        <div class="menu-wrapper">
            <el-menu class="top-menu"
                     mode="horizontal"
                     background-color="#545c64"
                     @select="handleSelect"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-menu-item index="neo4j">neo4j</el-menu-item>
                <el-submenu index="rdbms">
                    <template slot="title">RDBMS</template>
                    <el-menu-item index="nondim">范式化建模</el-menu-item>
                    <el-menu-item index="dim">维度建模</el-menu-item>
                </el-submenu>
                <el-menu-item index="hadoop">hadoop</el-menu-item>
            </el-menu>
        </div>
        <el-cascader
                class="select_query"
                v-model="value"
                :options="options"
                placeholder="查询选择"
                @change="handleChange">
        </el-cascader>
        <div class="input_tip">数据输入</div>
        <hr/>
        <div>测试Vuex: {{this.str}}</div>
    </div>
</template>

<script>
    import { mapState} from 'vuex'
    export default {
        name: "NavHeader",
        methods: {
            /**
             * 头部tab选中触发切换数据库
             * @param key: el-menu-item的index
             */
            handleSelect(key) {
                this.curDb = key;
            },

            /**
             * 根据选择的查询条件切换路由，改变数据输入组件
             * */
            handleChange(path) {
                let find = false;
                for (let key in this.queryToInput) {
                    if (find) break;
                    for (let i = 0; i < this.queryToInput[key].length; i++) {
                        if (this.equal(this.queryToInput[key][i], path)) {
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
            }
        },
        mounted() {

        },
        computed: {
          ...mapState(['str'])
        },
        data() {
            return {
                value: [],
                options:
                    [
                        {
                            value: 'timedim',
                            label: '时间维度查询',
                            children:
                                [
                                    {
                                        value: 'year',
                                        label: 'xx年有多少电影'
                                    },
                                    {
                                        value: 'month',
                                        label: 'xx年xx月有多少电影'
                                    },
                                    {
                                        value: 'season',
                                        label: 'xx年xx季度有多少电影'
                                    },
                                    {
                                        value: 'day',
                                        label: '某年某月某日新增多少电影'
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
                                        value: 'inTot',
                                        label: 'xx演员参演多少电影'
                                    }
                                ]
                        },
                        {
                            value: 'actor_director',
                            label: '演员与导演间的关系',
                            children:
                                [
                                    {
                                        value: 'actor_co_actor',
                                        label: '经常合作的演员有哪些'
                                    },
                                    {
                                        value: 'actor_co_director',
                                        label: '经常合作的导演和演员有哪些'
                                    }
                                ]
                        },
                        {
                            value: 'movieType',
                            label: '按照电影类别查询',
                            children: [
                                {
                                    value: 'actionTot',
                                    label: 'Action电影共有哪些'
                                },
                                {
                                    value: 'adventureTot',
                                    label: 'Adventure电影共有哪些'
                                }
                            ]
                        },
                        {
                            value: 'review',
                            label: '评论维度查询',
                            children: [
                                {
                                    value: '3score',
                                    label: '3星以上有哪些'
                                }
                            ]
                        },
                        {
                            value: 'handWriting',
                            label: '手写SQL'
                        }
                    ],
                /**
                 * 当前选择的数据库类型
                 * */
                curDb: null,
                /**
                 * 根据查询条件选择数据输入组件
                 */
                queryToInput: {
                    'selection': [
                        ['timedim', 'year'],
                        ['timedim', 'month'],
                        ['timedim', 'season'],
                        ['timedim', 'day']
                    ],
                    'text': [
                        ['movieName', 'versions'],
                        ['director', 'directorTot'],
                        ['actor', 'starringTot'],
                        ['actor', 'inTot'],
                        ['movieType', 'actionTot'],
                        ['movieType', 'adventureTot']
                    ],
                    'none': [
                        ['actor_director', 'actor_co_actor'],
                        ['actor_director', 'actor_co_director'],
                        ['handWriting'],
                        ['review', '3score']
                    ]

                }
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
        .select_query {
            margin-top: 35px;
            width: 620px;
        }
        .input_tip {
            font-size: 24px;
            text-align: left;
            margin-left: 35px;
            margin-top: 35px;
            font-weight: bold;
            font-family: ZCOOL KuaiLe,cursive;
        }
    }





</style>
