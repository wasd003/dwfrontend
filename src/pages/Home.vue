<template>
  <div>
    <ul>
      <li v-for="(item, idx) in productList" :key="idx">{{item}}</li>
    </ul>
  </div>
</template>

<script>
    import api from "../utils/api";
    export default {
        name: "Home",
        methods: {
            getProductList() {
                return api({
                    url: '/product',
                    method: 'get',
                    data: {
                    },
                    params: {
                    },
                    responseType: 'json'
                });
            }
        },
        mounted() {
            this.getProductList().then(e => this.productList = e);
        },
        data() {
            return {
                productList: []
            }
        }
    }
</script>

<style scoped>
</style>
