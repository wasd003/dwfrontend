<template>
    <div class="weekday-root">
        <el-select v-model="curWeekday" placeholder="请选择周几，默认周一" @change="onChange">
            <el-option
                    v-for="item in weekdays"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select >
    </div>
</template>

<script>
    export default {
        name: "Weekday",
        data() {
            return {
                weekdays: [{
                    value: "1",
                    label: '周一'
                }, {
                    value: 2,
                    label: '周二'
                }, {
                    value: 3,
                    label: '周三'
                }, {
                    value: 4,
                    label: '周四'
                }, {
                    value: 5,
                    label: '周五'
                },{
                    value: 6,
                    label: '周六'
                },{
                    value: 7,
                    label: '周日'
                }],
                curWeekday: ''
            }
        },
        methods: {
            onChange() {
                this.$store.commit('setWeekday', this.curWeekday);
            }
        }
    }
</script>

<style scoped>

</style>
