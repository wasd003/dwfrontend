<template>
    <div>
        <div class="tip">数据输入</div>
        <hr/>
        <TextComponent></TextComponent>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <Json v-if="!isChart && json"></Json>
    </div>
</template>

<script>
    import TextComponent from "@/components/input/TextComponent";
    import Charts from "@/components/output/Charts";
    import Json from "@/components/output/Json";
    import {mapState} from 'vuex';
    export default {
        name: "TextJson",
        components: {
            TextComponent, Charts, Json
        },
        computed: {
            ...mapState(['isChart', 'json'])
        }
    }
</script>

<style scoped>

</style>
