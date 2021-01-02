<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <MonthDay></MonthDay>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieList v-if="!isChart"></MovieList>
    </div>
</template>

<script>
    import MonthDay from "@/components/input/MonthDay";
    import Charts from "@/components/output/Charts";
    import MovieList from "@/components/output/MovieList";
    import {mapState} from 'vuex';
    export default {
        name: "MonthDayMovie",
        components: {MonthDay, Charts, MovieList},
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style scoped>

</style>
