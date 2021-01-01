<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <TextComponent></TextComponent>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <MovieList v-if="!isChart"></MovieList>
    </div>
</template>

<script>
    import TextComponent from "@/components/input/TextComponent";
    import MovieList from "@/components/output/MovieList";
    import Charts from "@/components/output/Charts";
    import {mapState} from 'vuex';
    export default {
        name: "TextMovie",
        components: {
            TextComponent,
            MovieList,
            Charts
        },
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style lang="scss">
    @import "../../styles/tip";
</style>
