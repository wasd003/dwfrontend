<template>
    <div>
        <el-steps direction="vertical" :active="careerList.length">
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
            ...mapState(['careerList'])
        }
    }
</script>

<style lang="scss">
</style>
