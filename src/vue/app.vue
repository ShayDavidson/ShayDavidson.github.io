<template lang="jade">
	body
		.table
		.container
			.content-container
				main-content
			.content-container
				coffee-cat(shadow=true)
		app-footer

</template>

<style lang="less">
	@import "~reset.less";
	@import '~colors.less';

	@table-size: 40%;
	@content-container-height: 50vh;
	@content-container-width: 40vw;
	@content-container-min-height: 30rem;
	@content-container-min-width: 34rem;
	@content-container-margin: 3rem;

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

	.content-container {
		height: @content-container-height;
		width: @content-container-width;
		min-height: @content-container-min-height;
		min-width: @content-container-min-width;
		position: relative;
		box-sizing: border-box;

		&:first-child {
			margin-right: @content-container-margin;
		}
	}
</style>

<script>
	import MainContent from 'main_content.vue'
	import CoffeeCat from 'coffee_cat.vue'
	import AppFooter from 'app_footer.vue'
	import Instafeed from 'instafeed.vue'

	export default {
		components: {
			MainContent,
			CoffeeCat,
			Instafeed,
			AppFooter
		}
	}
</script>
