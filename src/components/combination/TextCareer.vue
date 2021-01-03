<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <TextComponent></TextComponent>
        <div class="tip">数据输出</div>
        <hr/>
        <CareerLine v-if="!isChart"></CareerLine>
        <Charts v-if="isChart"></Charts>
    </div>
</template>

<script>
    import TextComponent from "@/components/input/TextComponent";
    import CareerLine from "@/components/output/CareerLine";
    import Charts from "@/components/output/Charts";
    import {mapState} from 'vuex';
    export default {
        name: "TextCareer",
        components: {Charts, CareerLine, TextComponent},
        computed: {
            ...mapState(['isChart'])
        }
    }
</script>

<style scoped>

</style>
