<template>
    <div>
        <div class="statistics">
            <span>查询用时: {{duration}}</span>
        </div>
        <el-steps direction="vertical" :active="careerList.length"
        v-loading="loading">
            <el-step :title="item.year" :description="item.movies"
                     v-for="(item, idx) in careerList" :key="idx">
            </el-step>
        </el-steps>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "CareerLine",
        computed: {
            ...mapState(['careerList', 'duration', 'loading'])
        }
    }
</script>

<style lang="scss">
    @import "../../styles/stat";
</style>
