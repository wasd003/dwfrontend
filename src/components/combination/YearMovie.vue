<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <Year></Year>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieList v-if="!isChart"></MovieList>
    </div>
</template>

<script>
    import Charts from "@/components/output/Charts";
    import MovieList from "@/components/output/MovieList";
    import {mapState} from 'vuex';
    import Year from "@/components/input/Year";
    export default {
        name: "YearMovie",
        components: {Year, Charts, MovieList},
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style scoped>

</style>
