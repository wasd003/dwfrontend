<template>
    <div>
        <el-input v-model="inputName" placeholder="请输入" @blur="onBlur"></el-input>
    </div>
</template>

<script>
    export default {
        name: "TextComponent",
        data() {
            return {
                inputName: ''
            }
        },
        methods: {
            /**
             * 输入框失去焦点时将用户输入的参数通过vuex传递给NavHeader
             */
            onBlur() {
                this.$store.commit('setName', this.inputName);
            }
        }
    }
</script>

<style scoped>

</style>
