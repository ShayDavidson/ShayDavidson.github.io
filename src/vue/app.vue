<template lang="jade">
	body
		.container
			.coffee-cat-container
				coffee-cat(shadow=true)
				//- code-vapor(code='export function isLoggedIn(req) { return !!req.user } ')

</template>

<style lang="less">
	@import "~reset.less";
	@import '~colors.less';

	@sky-portion: 60%;
	@coffee-cat-height: 50vh;
	@coffee-cat-width: 40vw;
	@coffee-cat-min-height: 30rem;
	@coffee-cat-min-width: 34rem;

	html, body {
		width: 100%;
		height: 100%;
		font-size: 1vw;
	}

	body {
		background: linear-gradient(to bottom, @color-blue 0%, @color-blue @sky-portion, @color-wood @sky-portion, @color-wood 100%);
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.coffee-cat-container {
		height: @coffee-cat-height;
		width: @coffee-cat-width;
		min-height: @coffee-cat-min-height;
		min-width: @coffee-cat-min-width;
		position: relative;
	}
</style>

<script>
	import CoffeeCat from "coffee_cat.vue"
	import CodeVapor from "code_vapor.vue"

	export default {
		components: {
			CoffeeCat,
			CodeVapor
		}
	}
</script>
