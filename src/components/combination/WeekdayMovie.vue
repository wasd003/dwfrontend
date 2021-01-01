<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <Weekday></Weekday>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieList v-if="!isChart"></MovieList>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Weekday from "@/components/input/Weekday";
    import Charts from "@/components/output/Charts";
    import MovieList from "@/components/output/MovieList";
    export default {
        name: "WeekdayMovie",
        components: {Charts, Weekday, MovieList},
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style lang="scss">
    @import "../../styles/tip";
</style>
