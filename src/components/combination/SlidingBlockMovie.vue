<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <SlidingBlock></SlidingBlock>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieList v-if="!isChart"></MovieList>
    </div>
</template>

<script>
    import SlidingBlock from "@/components/input/SlidingBlock";
    import Charts from "@/components/output/Charts";
    import MovieList from "@/components/output/MovieList";
    import {mapState} from 'vuex';
    export default {
        name: "SlidingBlockMovie",
        components: {SlidingBlock, Charts, MovieList},
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style lang="scss">
    @import "../../styles/tip";
</style>
