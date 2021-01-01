<template>
    <div>
        <div class="tip">数据输出</div>
        <hr/>
        <Charts v-if="isChart"></Charts>
        <ADList v-if="!isChart"></ADList>
    </div>
</template>

<script>
    import ADList from "@/components/output/ADList";
    import Charts from "@/components/output/Charts";
    import {mapState} from 'vuex';
    export default {
        name: "NoneAD",
        components: {
            ADList,
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
