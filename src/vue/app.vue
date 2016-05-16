<template lang="jade">
	body
		.container
			table-pillar(:top='top')
		.container
			.content-container
				table-stand(:top='top')
		.container
			//- .content-container
			//- 	main-content
			.content-container
				coffee-cat(:top='top', shadow=true, handle-in=false)
		app-footer

</template>

<style lang="less">
	@import "~reset.less";
	@import '~colors.less';
	@import '~animations.less';

	@content-container-height: 40vw;
	@content-container-width: 40vw;
	@content-container-min-height: 40rem;
	@content-container-min-width: 40rem;
	@content-container-margin: 3rem;

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
		position: absolute;
	}

	.content-container {
		height: @content-container-height;
		width: @content-container-width;
		min-height: @content-container-min-height;
		min-width: @content-container-min-width;
		position: relative;
	}

	.table-pillar {
		width: @content-container-width / 2;
		height: 100%;
		transform: translateY(50%);
	}
</style>

<script>
	import MainContent from 'main_content.vue'
	import CoffeeCat from 'coffee_cat.vue'
	import AppFooter from 'app_footer.vue'
	import Instafeed from 'instafeed.vue'
	import TableStand from 'table_stand.vue'
	import TablePillar from 'table_pillar.vue'

	export default {
		components: {
			MainContent,
			CoffeeCat,
			Instafeed,
			TableStand,
			TablePillar,
			AppFooter
		},

		data() {
			return {
				top: true
			}
		},

		created() {
			window.toggle = () => {
				this.top = !this.top
			}
		}
	}
</script>
