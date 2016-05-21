<template lang='jade'>
	footer(:class='{ top: top }')
		span Developed by
		br
		span Shay Davidson
		br
		span &copy; {{year}}
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';
	@import '~animations.less';

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

		&.top {
			bottom: -50px;
		}
	}
</style>

<script>
	export default {
		props: ['top'],

		computed: {
			year() {
				return new Date().getFullYear()
			}
		}
	}
</script>
