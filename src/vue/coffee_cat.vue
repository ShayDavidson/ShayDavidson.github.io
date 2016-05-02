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
		.handle
</template>

<style lang="less">
	@import '~triangles.less';

	.coffee-cat {
		@border-color: #F19C79;
		@skin-color: #F6F4D2;
		@eye-color: #A44A3F;
		@border-radius: 6rem;
		@border-width: 0.6rem;
		@cheek-height: 5rem;
		@nose-width: 5rem;
		@nose-position-fix: -0.75rem;
		@eye-width: 3rem;
		@eye-padding: 10rem;
		@eye-position: 6rem;
		@ear-width: 4rem;
		@ear-height: @ear-width * @triangle-multiplier;
		@ear-padding: 6rem;
		@inner-ear-width: 2rem;

		width: 100%;
		height: 100%;
		position: relative;

		.head {
			position: relative;
			width: 100%;
			height: ~'calc(100% - @{cheek-height})';
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
				bottom: @nose-position-fix;
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
			position: absolute;
			width: 100%;
			z-index: 1;
			height: @ear-height;
			top: -@ear-height + @border-width;

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
			height: 50%;
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
