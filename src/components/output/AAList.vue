<template>
    <div>
        <div class="statistics">
            <span>查询用时: {{duration}}</span>
        </div>

        <el-table
                v-loading="loading"
                stripe
                :data="aaList"
                style="width: 100%">
            <el-table-column
                    :prop="option[curDb][0]"
                    label="演员1名称"
                    sortable
            >
            </el-table-column>
            <el-table-column v-if="curDb === 'neo4j'"
                    :prop="option[curDb][1]"
                    label="演员1电影总数"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    :prop="option[curDb][2]"
                    label="演员2名称"
                    sortable
            >
            </el-table-column>
            <el-table-column v-if="curDb === 'neo4j'"
                    :prop="option[curDb][3]"
                    label="演员2电影总数"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="count"
                    label="合作次数"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "AAList",
        computed: {
            ...mapState(['aaList', 'curDb', 'queryPath', 'duration', 'loading'])
        },
        data() {
            return {
                option: {
                    'dim': ['name1', null, 'name2', null, 'count'],
                    'neo4j': ['startActor.actorName', 'startActor.actorMoviesCount',
                        'endActor.actorName', 'endActor.actorMoviesCount'],
                    'hive': ['name1', null, 'name2', null, 'count'],
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/stat";
</style>
