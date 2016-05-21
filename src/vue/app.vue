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
		app-footer(:top='top')

</template>

<style lang="less">
	@import "~reset.less";
	@import '~colors.less';
	@import '~animations.less';

	// gave up fully fluidic-layout due to the cat looking weird on some layouts :)
	@content-container-height: 250.5px;
	@content-container-width: 250.5px; // sub pixels help solve some weird artifacts on Chrome

	html, body {
		width: 100%;
		height: 100%;
		font-size: 5px;
		overflow: hidden;
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
		position: relative;
	}

	.table-stand {
		transform: rotate(45deg);
	}

	.coffee-cat {
		transform: rotate(90deg);
	}

	.table-pillar {
		width: @content-container-width / 2;
		height: 50%;
		transform: translateY(50%);
	}
</style>

<script>
	import MainContent from 'main_content.vue'
	import CoffeeCat from 'coffee_cat.vue'
	import AppFooter from 'app_footer.vue'
	import TableStand from 'table_stand.vue'
	import TablePillar from 'table_pillar.vue'

	export default {
		components: {
			MainContent,
			CoffeeCat,
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
