<template>
    <div>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <AAList v-if="!isChart"></AAList>
    </div>
</template>

<script>
    import AAList from "@/components/output/AAList";
    import Charts from "@/components/output/Charts";
    import {mapState} from 'vuex';
    export default {
        name: "NoneAA",
        components: {
            AAList,
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
