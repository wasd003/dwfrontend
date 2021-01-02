<template>
    <div>
        <el-date-picker
                v-model="year"
                type="year"
                value-format="yyyy"
                placeholder="选择年"
                @change="onChange"
                >
        </el-date-picker>
    </div>

</template>

<script>
    export default {
        name: "Year",
        data() {
            return {
                year: ''
            }
        },
        methods: {
            onChange() {
                this.$store.commit('setYear', this.year);
            }
        }
    }
</script>

<style scoped>

</style>
