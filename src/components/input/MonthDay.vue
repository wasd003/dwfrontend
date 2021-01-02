<template>
    <div class="monthdayRoot">
        <div>
            <span>输入月份:  </span>
            <el-input class="input" v-model="month" placeholder="请输入月份" @change="onMonthChange"></el-input>
        </div>
        <div>
            <span>输入日期:  </span>
            <el-input class="input" v-model="day" placeholder="请输入日期" @change="onDayChange"></el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MonthDay",
        data() {
            return {
                month: 1,
                day: 1
            }
        },
        methods: {
            onMonthChange() {
                let t = parseInt(this.month);
                if (!t || t < 1 || t > 12) {
                    this.$message({
                        message: '请输入合法的月份',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                this.$store.commit('setMonth', t);
            },
            onDayChange() {
                let t = parseInt(this.day);
                if (!t || t < 1 || t > 31) {
                    this.$message({
                        message: '请输入合法的日期',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                this.$store.commit('setDay', this.day);
            }
        }
    }
</script>

<style lang="scss">
    .monthdayRoot {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .input {
            width: 350px;
        }
    }
</style>
