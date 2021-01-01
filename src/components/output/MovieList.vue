<template>
    <div>
        <div class="statistics">
            <span>电影总数: {{count}}</span>
            <span>查询用时: {{duration}}</span>
        </div>

        <el-table
                stripe
                :data="movieList"
                style="width: 100%">
            <el-table-column
                    prop="movie_name"
                    label="电影名称"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    prop="movie_rating"
                    label="电影评分"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    prop="movie_neg_count"
                    label="差评数量"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    prop="movie_pos_count"
                    label="好评数量"
                    sortable
                    >
            </el-table-column>
            <el-table-column
                    prop="movie_is_positive"
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
            ...mapState(['movieList', 'count', 'duration'])
        }
    }
</script>

<style lang="scss">
    @import "../../styles/stat";
</style>
