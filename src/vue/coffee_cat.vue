<template lang="jade">
	.coffee-cat
		.head
			.nose
		.cheeks
			.cheek
			.cheek
		.ears
			.ear
			.ear
</template>

<style lang="less">
	@import '~triangles.less';

	.coffee-cat {
		@base-rem: 60rem;
		@border-radius: @base-rem / 10;
		@border-width: @base-rem / 100;
		@border-color: #F19C79;
		@skin-color: #F6F4D2;
		@head-base-height: 80%;
		@nose-width: @base-rem / 12;

		width: @base-rem;
		height: @base-rem / 3;

		.head {
			position: relative;
			width: 100%;
			height: @head-base-height;
			box-sizing: border-box;
			border-top-left-radius: @border-radius;
			border-top-right-radius: @border-radius;
			border-top: @border-width solid @border-color;
			border-left: @border-width solid @border-color;
			border-right: @border-width solid @border-color;
			background-color: @skin-color;

			.nose {
				left: 50%;
				transform: translateX(-50%);
				position: absolute;
				bottom: @base-rem / -60;
				.triangle(@nose-width, @border-color);
			}
		}

	  .cheeks {
			width: 100%;
			height: 100% - @head-base-height;

			.cheek {
				width: 50%;
				height: 100%;
				display: inline-block;
				box-sizing: border-box;
				border-bottom-left-radius: @border-radius;
				border-bottom-right-radius: @border-radius;
				border-bottom: @border-width solid @border-color;
				border-left: @border-width solid @border-color;
				border-right: @border-width solid @border-color;
				background-color: @skin-color;
			}
		}
	}
</style>

<script>
	export default {

	}
</script>
