<template lang='jade'>
	.table-pillar
</template>

<style lang='less'>
	@import (reference) '~variables.less';

	@base-shadow-height: 42%;

	.table-pillar {
		background-color: @color-wood-darker;
		transition: height @transition-top-duration @transition-top-easing;
		z-index: -2;
		position: relative;

		&:after {
			background-color: @color-wood-even-darker;
			content: '';
			position: absolute;
			width: 100%;
			height: @base-shadow-height + @table-padding;
		}

		.top & {
			height: 0;
		}
	}
</style>

<script>
	export default {
	}
</script>
