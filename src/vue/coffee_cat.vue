<template lang="jade">
	.coffee-cat
		.head
			.opening
				.ears
					.ear
					.ear
			.eyes
				.eye
				.eye
			.nose
		.cheeks
			.cheek
			.cheek
		.handle
			.horizontal-handle
				.flat-horizontal-handle
				.corner-horizontal-handle
			.vertical-handle
			.horizontal-handle
				.flat-horizontal-handle
				.corner-horizontal-handle
</template>

<style lang="less">
	@import '~triangles.less';
	@import '~colors.less';

	.coffee-cat {
		@border-color: @color-orange;
		@skin-color: @color-yellow;
		@eye-color: @color-red;
		@opening-color: @color-yellow-dark;
		@coffee-color: @color-brown;

		@border-radius: 6rem;
		@border-width: 0.6rem;
		@head-padding: 3rem;
		@cheek-height: 5rem;
		@nose-width: 5rem;
		@nose-position-fix: -0.75rem;
		@eye-width: 3rem;
		@eye-padding: 10rem;
		@eye-position: 6rem;
		@ear-width: 4rem;
		@ear-height: @ear-width * @triangle-multiplier;
		@ear-padding: 3rem;
		@handle-position: 4rem;
		@handle-width: 15%;
		@handle-height: 60%;
		@handle-part-width: 3rem;
		@coffee-portion: 80%;
		@opening-portion: 20%;
		@opening-height: 8rem;

		@border: none; //@border-width solid @border-color; bring this back if you want borders.

		width: 100%;
		height: 100%;
		position: relative;

		.head {
			position: relative;
			height: ~'calc(100% - @{cheek-height})';
			box-sizing: border-box;
			border-top: @border;
			border-left: @border;
			border-right: @border;
			background-color: @skin-color;
			padding: @head-padding;

			.opening {
				width: 100%;
				height: @opening-height;
				background: linear-gradient(to bottom, @opening-color 0%, @opening-color @opening-portion, @coffee-color @opening-portion, @coffee-color 100%);
				margin: 0 auto;
				position: relative;
			}

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
			height: @ear-height;
			bottom: 0;

			.ear {
				display: inline-block;
				.triangle-open-border(@ear-width, @border-width, @skin-color, @border-color);
				border-bottom: none; // removes borders.

				&:first-child {
					float: left;
					margin-left: @ear-padding;
				}

				&:last-child {
					float: right;
					margin-right: @ear-padding;
				}
			}
		}

	  .cheeks {
			height: @cheek-height;

			.cheek {
				width: 50%;
				height: 100%;
				display: inline-block;
				box-sizing: border-box;
				border-bottom-left-radius: @border-radius;
				border-bottom-right-radius: @border-radius;
				border-bottom: @border;
				border-left: @border;
				border-right: @border;
				background-color: @skin-color;
			}
		}

		.handle {
			position: absolute;
			height: ~'calc(100% - @{handle-position} - @{opening-height} - @{head-padding})';
			width: @handle-width;
			bottom: @handle-position;
			right: ~'calc(-@{handle-width} + @{border-width})';

			.vertical-handle {
				box-sizing: border-box;
				background-color: @skin-color;
				height: ~'calc(100% - 2 * @{handle-part-width})';
				position: absolute;
				border-left: @border;
				border-right: @border;
				right: 0;
				width: @handle-part-width;
			}

			.horizontal-handle {
				box-sizing: border-box;
				width: 100%;
				height: @handle-part-width;

				.flat-horizontal-handle {
					box-sizing: border-box;
					height: 100%;
					width: ~'calc(100% - @{handle-part-width})';
					background-color: @skin-color;
					float: left;
					border-top: @border;
					border-bottom: @border;
				}

				.corner-horizontal-handle {
					box-sizing: border-box;
					height: @handle-part-width;
					width: @handle-part-width;
					background-color: @skin-color;
					position: relative;
					float: right;

					&:after {
						content: '';
						position: absolute;
						left: 0;
						width: @border-width;
						height: @border-width;
						background-color: none; //@border-color; bring this back if you want borders.
					}
				}

				&:first-child {
					.corner-horizontal-handle {
						border-top-right-radius: @border-radius;
						border-right: @border;
						border-top: @border;

						&:after {
							bottom: 0;
						}
					}
				}

				&:last-child {
					position: absolute;
					bottom: 0;

					.corner-horizontal-handle {
						border-bottom-right-radius: @border-radius;
						border-right: @border;
						border-bottom: @border;

						&:after {
							top: 0;
						}
					}
				}
			}
		}
	}
</style>

<script>
	export default {

	}
</script>
