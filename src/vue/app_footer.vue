<template lang='jade'>
	footer
		span Shay Davidson
		br
		span &copy; {{year}}
</template>

<style lang='less'>
	@import (reference) '~variables.less';

	@footer-hidden-margin: 50px;

	footer {
		position: absolute;
		bottom: 0;
		font-family: @font-family-base;
		font-size: @font-size-staic-small;
		color: @color-yellow;
		text-align: center;
		width: 100%;
		padding: 1em;
		box-sizing: border-box;
		transition: all @transition-top-duration @transition-top-easing;

		.top & {
			bottom: -@footer-hidden-margin;
		}
	}
</style>

<script>
	export default {
		computed: {
			year() {
				return new Date().getFullYear()
			}
		}
	}
</script>
