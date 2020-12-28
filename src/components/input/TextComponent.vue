<template>
    <div>
        <el-input v-model="inputParams" placeholder="请输入电影/导演/演员名称" @blur="loseFocus"></el-input>
    </div>
</template>

<script>
    export default {
        name: "TextComponent",
        data() {
            return {
                inputParams: ''
            }
        },
        methods: {
            /**
             * 输入框失去焦点时将用户输入的参数通过vuex传递给NavHeader
             */
            loseFocus() {
                this.$store.commit('setStr', this.inputParams);
            }
        }
    }
</script>

<style scoped>

</style>
