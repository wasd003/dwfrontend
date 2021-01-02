<template>
    <div>
        <div class="time">
            <span v-if="dimDuration != 0">rdbms耗时: {{dimDuration}}</span>
            <span v-if="hiveDuration != 0">hive耗时: {{hiveDuration}}</span>
            <span v-if="neo4jDuration != 0">neo4j耗时: {{neo4jDuration}}</span>
        </div>
        <div id="diagram">
        </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Charts",
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['rdbms', 'hive', 'neo4j']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '查询耗时',
                        data: [ {value: 0, name: 'rdbms'},
                            {value: 0, name: 'hive'},
                            {value: 0, name: 'neo4j'}],
                        type: 'bar'
                    }]
                }
            }
        },
        computed: {
            ...mapState(['dimDuration', 'hiveDuration', 'neo4jDuration']),
            echart() {
                return this.$echarts.init(document.getElementById('diagram'));
            }
        },
        watch: {
            dimDuration(newVal) {
                this.option.series[0].data[0].value = newVal;
                this.echart.setOption(this.option);
            },
            hiveDuration(newVal) {
                this.option.series[0].data[1].value = newVal;
                this.echart.setOption(this.option);
            },
            neo4jDuration(newVal) {
                this.option.series[0].data[2].value = newVal;
                this.echart.setOption(this.option);
            }
        }
    }
</script>

<style lang="scss">
    .time {
        font-size: 24px;
        font-family: Consolas;
        display: flex;
        flex-direction: column;

    }
</style>
