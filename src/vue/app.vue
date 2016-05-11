<template lang="jade">
	body
		.table
		.container
			.coffee-cat-container
				coffee-cat(shadow=true)
		app-footer

</template>

<style lang="less">
	@import "~reset.less";
	@import '~colors.less';

	@table-size: 40%;
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
		background-color: @color-blue;
	}

	.table {
		background-color: @color-wood;
		height: 40%;
		width: 100%;
		position: absolute;
		bottom: 0;
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
	import CoffeeCat from 'coffee_cat.vue'
	import AppFooter from 'app_footer.vue'

	export default {
		components: {
			CoffeeCat,
			AppFooter
		}
	}
</script>
