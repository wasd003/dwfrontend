<template>
    <div class="root">
        <NavHeader class="header"></NavHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavHeader from "@/components/NavHeader";

    export default {
        name: 'Home',
        components: {
            NavHeader
        }
    }
</script>

<style lang="scss">
    .root {
        width: 1120px;
    }
    .header {
        margin-bottom: 30px;
    }
</style>
