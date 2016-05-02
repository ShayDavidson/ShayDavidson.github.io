<template lang="jade">
	.coffee-cat
		.ears
			.ear
				.inner-ear
			.ear
				.inner-ear
		.head
			.nose
			.eyes
				.eye
				.eye
		.cheeks
			.cheek
			.cheek
		//- .handle
</template>

<style lang="less">
	@import '~triangles.less';

	.coffee-cat {
		@base-rem: 60rem;
		@border-radius: @base-rem / 10;
		@border-width: @base-rem / 100;
		@border-color: #F19C79;
		@skin-color: #F6F4D2;
		@eye-color: #3C3C3C;
		@cheek-height: @base-rem / 12;
		@head-base-height: 80%;
		@nose-width: @base-rem / 12;
		@nose-position: @base-rem / -80;
		@eye-width: @base-rem / 20;
		@eye-padding: @base-rem / 6;
		@eye-position: @base-rem / 10;
		@ear-width: @base-rem / 15;
		@hear-height: @ear-width * @triangle-multiplier;
		@ear-padding: @base-rem / 10;
		@inner-ear-width: @base-rem / 30;

		width: 100%;
		height: 100%;
		min-height: @base-rem / 3;
		position: relative;

		.head {
			margin-top: -@border-width;
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
				bottom: @nose-position;
				.triangle-flipped(@nose-width, @border-color);
			}

			.eyes {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				position: absolute;
				width: 100%;
				bottom: @eye-position;

				.eye {
					display: inline-block;
					.triangle-open-border(@eye-width, @border-width, @skin-color, @eye-color);

					&:first-child {
						float: left;
						margin-left: @eye-padding;
					}

					&:last-child {
						float: right;
						margin-right: @eye-padding;
					}
				}
			}
		}

		.ears {
			width: 100%;
			z-index: 1;
			position: relative;
			height: @hear-height;

			.ear {
				display: inline-block;
				.triangle-open-border(@ear-width, @border-width, @skin-color, @border-color);

				&:first-child {
					float: left;
					margin-left: @ear-padding;
				}

				&:last-child {
					float: right;
					margin-right: @ear-padding;
				}

				.inner-ear {
					position: absolute;
					transform: translateX(-50%);
					top: ~'calc(@{ear-width} - @{inner-ear-width} + @{border-width})';
					.triangle-open-border(@inner-ear-width, @border-width, @skin-color, @border-color);
				}
			}
		}

	  .cheeks {
			width: 100%;
			height: @cheek-height;

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

		.handle {
			position: absolute;
			height: 5ck 0%;
			width: 20%;
			box-sizing: border-box;
			background-color: @skin-color;
			border-radius: @border-radius;
			border: @border-width solid @border-color;
		}
	}
</style>

<script>
	export default {

	}
</script>
