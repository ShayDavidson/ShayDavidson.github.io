<template lang='jade'>
	.table-stand
		.table-front
</template>

<style lang='less'>
	@import (reference) '~variables.less';

	@table-front-height: 10px;
	@table-padding: 8%;
	@table-front-height: 20px;

	.table-stand {
		background-color: @color-wood;
		height: 0;
		position: absolute;
		width: 100%;
		padding: @table-padding;
		padding-bottom: 2 * @table-padding;
		bottom: -@table-padding * 1.5;
		left: -@table-padding;
		transition: all @transition-top-duration @transition-top-easing;

		.top & {
			height: 100%;
			padding-bottom: @table-padding;
			bottom: -@table-padding;
		}

		.table-front {
			width: 100%;
			height: @table-front-height;
			background-color: @color-wood-dark;
			transition: bottom @transition-top-duration @transition-top-easing;
			left: 0;
			bottom: -@table-front-height;
			position: absolute;
			z-index: -1;

			.top & {
				bottom: 0;
			}
		}
	}
</style>

<script>
	export default {
	}
</script>
