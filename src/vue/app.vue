<template lang="jade">
    body
        .center-container
            coffee-cat
</template>

<style lang="less">
    @import "~reset.less";

    html {
        font-size: 1vw;
    }

    .center-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>
    import CoffeeCat from "coffee_cat.vue";

    export default {
        components: {
            CoffeeCat,
        }
    }
</script>
