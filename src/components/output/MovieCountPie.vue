<template>
    <div class="pieRoot">
        <div class="statistics">
            <span>查询用时: {{duration}}</span>
        </div>
        <div id="diagram"></div>
    </div>

</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "MovieCountPie",
        computed: {
            ...mapState(['duration', 'percentageList']),
            echart() {
                return this.$echarts.init(document.getElementById('diagram'));
            }
        },
        watch: {
            percentageList(newVal) {
                let option = {
                    /**
                     * 浮动显示详情
                     * */
                    tooltip: {
                        trigger: 'item',
                            formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    /**
                     * 图例
                     */
                    legend: {
                        orient: 'vertical',
                            left: 10,
                            data: ['1星', '2星', '3星', '4星', '5星']
                    },
                    series: [
                        {
                            name: '电影数量',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: newVal
                        }
                    ]
                }
                this.echart.setOption(option);
            }
        }
    }
</script>

<style lang="scss">
    #diagram {
        width: 800px;
        height: 700px;
        margin: 0 auto;
    }
</style>
