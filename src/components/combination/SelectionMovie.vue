<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <Selection></Selection>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieList v-if="!isChart"></MovieList>
    </div>
</template>

<script>
    import Selection from "@/components/input/Selection";
    import MovieList from "@/components/output/MovieList";
    import Charts from "@/components/output/Charts";
    import {mapState} from 'vuex';
    export default {
        components: {
            Selection,
            MovieList,
            Charts
        },
        name: "SelectionMovie",
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style lang="scss">
    @import "../../styles/tip";
</style>
