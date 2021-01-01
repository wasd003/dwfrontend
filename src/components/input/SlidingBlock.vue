<template>
    <div class="slidingBlockRoot">
        <span class="demonstration">选择你想要的评分</span>
        <el-slider v-model="rating"
                   :min="1" :max="5"
        @change="onChange" class="slider"></el-slider>
    </div>
</template>

<script>
    export default {
        name: "SlidingBlock",
        data() {
            return {
                rating: 1.0
            }
        },
        methods: {
            onChange() {
                this.$store.commit('setRating', this.rating);
            }
        }
    }
</script>

<style lang="scss">
    .slidingBlockRoot {
        width: 50%;
        margin: 0 auto;
        .slider {
            margin-top: 45px;
        }
    }
</style>
