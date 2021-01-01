<template>
    <div>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieCountPie v-if="!isChart"></MovieCountPie>
    </div>
</template>

<script>
    import MovieCountPie from "@/components/output/MovieCountPie";
    import Charts from "@/components/output/Charts";
    import {mapState} from 'vuex';
    export default {
        name: "NoneMovieCountPie",
        components: {MovieCountPie, Charts},
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style scoped>

</style>
