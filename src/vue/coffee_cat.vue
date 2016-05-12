<template lang='jade'>
	.coffee-cat
		.main
			.shadow(v-if='shadow')
			.head
				.opening
					vapor(height='20vh')
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

<style lang='less'>
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
		@eye-padding: 6rem;
		@eye-position: 7rem;
		@ear-width: 4rem;
		@ear-height: @ear-width * @triangle-multiplier;
		@ear-padding: 2rem;
		@handle-position: 4rem;
		@handle-width: 17%;
		@handle-height: 60%;
		@handle-part-width: 3rem;
		@coffee-portion: 80%;
		@opening-portion: 20%;
		@opening-height: 8rem;
		@shadow-extension: 1.5rem;
		@shadow-opacity: 0.3;
		@vapor-width: 60%;
		@main-width: 100% - @handle-width;

		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
  	flex-wrap: wrap;

		.shadow {
			position: absolute;
			width: 100%;
			height: @shadow-extension;
			background-color: black;
			opacity: @shadow-opacity;
			transform: translateX(-50%);
			bottom: -@shadow-extension / 2;
			left: 50%;
			padding: 0 @shadow-extension / 2;
		}

		.main {
			display: inline-block;
			width: @main-width;
			height: 100%;
			position: relative;
		}

		.head {
			position: relative;
			z-index: 2;
			height: ~'calc(100% - @{cheek-height})';
			box-sizing: border-box;
			background-color: @skin-color;
			padding: @head-padding;
			width: 100%;

			.opening {
				width: 100%;
				height: @opening-height;
				background: linear-gradient(to bottom, @opening-color 0%, @opening-color @opening-portion, @coffee-color @opening-portion, @coffee-color 100%);
				margin: 0 auto;
				position: relative;

				.vapor {
					width: @vapor-width;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: @opening-height / 3;
					opacity: 0.5;
				}
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
			bottom: -1px; // fixes some glitches when resizing.

			.ear {
				display: inline-block;
				.triangle(@ear-width, @skin-color);

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
			position: relative;
			z-index: 1; // to be on top of shadow.

			.cheek {
				width: 50%;
				height: 100%;
				display: inline-block;
				box-sizing: border-box;
				background-color: @skin-color;

				&:first-child {
					border-bottom-right-radius: @border-radius;
				}

				&:last-child {
					border-bottom-left-radius: @border-radius;
				}
			}
		}

		.handle {
			display: inline-block;
			position: relative;
			height: ~'calc(100% - @{handle-position} - @{opening-height} - (2 * @{head-padding}))';
			bottom: @handle-position;
			flex-grow: 1;
			align-self: flex-end;

			.vertical-handle {
				box-sizing: border-box;
				background-color: @skin-color;
				height: ~'calc(100% - 2 * @{handle-part-width} + 1px)'; // fixes 1px gap in webkit in mobile
				position: absolute;
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
					width: ~'calc(100% - @{handle-part-width} + 1px)'; // fixes 1px gap in webkit in mobile
					background-color: @skin-color;
					float: left;
				}

				.corner-horizontal-handle {
					box-sizing: border-box;
					height: @handle-part-width;
					width: @handle-part-width;
					background-color: @skin-color;
					position: absolute;
					right: 0;
				}

				&:first-child {
					.corner-horizontal-handle {
						border-top-right-radius: @border-radius;
					}
				}

				&:last-child {
					position: absolute;
					bottom: 0;

					.corner-horizontal-handle {
						border-bottom-right-radius: @border-radius;

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
	import Vapor from 'vapor.vue'

	export default {
		props: ['shadow'],
		components: {
			Vapor
		}
	}
</script>
