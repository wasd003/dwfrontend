<template>
    <div class="selection-root">
        <el-date-picker
                class="d"
                v-model="date"
                type="dates"
                value-format="yyyy-MM-dd"
                placeholder="请选择日期"
                @change="onChange"
                >
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: "Selection",
        data() {
            return {
                date: []
            }
        },
        computed: {
            year: function() {
                if (this.date.length === 0) return 0;
                return parseInt(this.date[0].substr(0, 4));
            },
            month: function() {
                if (this.date.length === 0) return 0;
                return parseInt(this.date[0].substr(5, 2));
            },
            day: function() {
                if (this.date.length === 0) return 0;
                return parseInt(this.date[0].substr(8, 2));
            }
        },
        methods: {
            onChange() {
                this.$store.commit('setYear', this.year);
                this.$store.commit('setMonth', this.month);
                this.$store.commit('setDay', this.day);
            }
        }
    }
</script>

<style lang="scss">

</style>
