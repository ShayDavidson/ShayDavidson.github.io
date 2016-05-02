<template lang="jade">
	body
		.container
			.coffee-cat-container
				coffee-cat
</template>

<style lang="less">
	@import "~reset.less";
	@import '~colors.less';

	html, body {
		width: 100%;
		height: 100%;
		font-size: 1vw;
	}

	body {
		background-color: @color-blue;
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.coffee-cat-container {
		height: 50vh;
		width: 40vw;
		min-height: 30rem;
		min-width: 34rem;
	}
</style>

<script>
	import CoffeeCat from "coffee_cat.vue"

	export default {
		components: {
			CoffeeCat
		}
	}
</script>
