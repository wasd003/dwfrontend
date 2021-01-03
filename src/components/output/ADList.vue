<template>
    <div>
        <div class="statistics">
            <span>查询用时: {{duration}}</span>
        </div>

        <el-table
                v-loading="loading"
                stripe
                :data="adList"
                style="width: 100%">
            <el-table-column v-if="curDb"
                    :prop="option[curDb][0]"
                    label="导演名称"
                    sortable
            >
            </el-table-column>
            <el-table-column v-if="curDb === 'neo4j'"
                    :prop="option[curDb][1]"
                    label="执导电影数量"
                    sortable
            >
            </el-table-column>
            <el-table-column v-if="curDb"
                    :prop="option[curDb][2]"
                    label="演员名称"
                    sortable
            >
            </el-table-column>
            <el-table-column v-if="curDb === 'neo4j'"
                    :prop="option[curDb][3]"
                    label="拍摄电影数量"
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
    import {mapState} from "vuex";

    export default {
        name: "ADList",
        computed: {
            ...mapState(['adList', 'curDb', 'queryPath', 'duration', 'loading'])
        },
        data() {
            return {
                option: {
                    'neo4j': ['director.directorName', 'director.directorMoviesCount',
                            'actor.actorName', 'actor.actorMoviesCount'],
                    'dim': ['actor', null, 'director', null, 'count'],
                    'hive': ['actor', null, 'director', null, 'count'],
                }

            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/stat";
</style>
