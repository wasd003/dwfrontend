<template>
    <json-view :data="json" :deep="deep"
               class="test"
               icon-style="circle"/>
</template>

<script>
    import jsonView from 'vue-json-views'
    import {mapState} from 'vuex';
    export default {
        name: "Json",
        components: {
            jsonView
        },
        data() {
            return {
                deep: 3
            }
        },
        computed: {
            ...mapState(['json'])
        }
    }
</script>

<style lang="scss">
    .test{
        border-radius: 15px;
        background-color: #2c3e50;
    }
</style>
