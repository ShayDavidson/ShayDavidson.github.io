<template lang='jade'>
	.table-stand(:class='{ top: top }')
		.table-front
</template>

<style lang='less'>
	@import '~colors.less';
	@import '~animations.less';

	@table-padding: 5rem;
	@table-front-height: 5rem;

	.table-stand {
		background-color: @color-wood;
		height: 0;
		position: absolute;
		width: 100%;
		padding: @table-padding;
		padding-bottom: 2 * @table-padding;
		bottom: -@table-padding * 2;
		left: -@table-padding;
		transition: all @transition-top-duration @transition-top-easing;

		&.top {
			height: 100%;
			padding-bottom: @table-padding;
			bottom: -@table-padding;
		}

		.table-front {
			width: 100%;
			height: @table-front-height;
			background-color: @color-wood-dark;
			transition: height @transition-top-duration @transition-top-easing;
			left: 0;
			bottom: 0;
			position: absolute;

			.top& {
				height: 0;
			}
		}
	}
</style>

<script>
	export default {
		props: ['top']
	}
</script>
