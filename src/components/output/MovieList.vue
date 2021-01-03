<template>
    <div>
        <div class="statistics">
            <span>电影总数: {{count}}</span>
            <span>查询用时: {{duration}}</span>
        </div>

        <el-table
                v-loading="loading"
                stripe
                :data="movieList"
                style="width: 100%">
            <el-table-column
                    v-if="curDb"
                    :prop="option[curDb][0]"
                    label="电影名称"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    v-if="curDb"
                    :prop="option[curDb][1]"
                    label="电影评分"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    v-if="curDb == 'dim' || curDb == 'neo4j'"
                    :prop="option[curDb][2]"
                    label="差评数量"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    v-if="curDb == 'dim' || curDb == 'neo4j'"
                    :prop="option[curDb][3]"
                    label="好评数量"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    v-if="curDb"
                    :prop="option[curDb][4]"
                    label="是否包含好评"
                    >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Movie",
        computed: {
            ...mapState(['movieList', 'count', 'duration', 'loading', 'curDb'])
        },
        data() {
            return {
                option: {
                    'neo4j': ['movieName', 'movieRating',
                        'movieNegCount', 'moviePosCount', 'movieIsPositive'],
                    'dim': ['movieName', 'movieRating',
                        'movieNegCount', 'moviePosCount', 'movieIsPositive'],
                    'hive': ['movieName', 'rating', null, null, 'hasPositive'],
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/stat";
</style>
