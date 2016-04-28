<template lang="jade">
	body
		.center-container(style="width: 50%")
		coffee-cat
</template>

<style lang="less">
	@import "~reset.less";

	html {
		font-size: 1vw;
	}

	.center-container {
		margin: 0 auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<script>
	import CoffeeCat from "coffee_cat.vue"

	export default {
		components: {
			CoffeeCat,
		}
	}
</script>
