<template lang='jade'>
	footer Developed by Shay Davidson &copy; {{year}}
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';

	footer {
		position: absolute;
		bottom: 0;
		font-family: @font-family-base;
		font-size: @font-size-staic-small;
		color: @color-brown;
		text-align: center;
		width: 100%;
		padding: 1em;
		box-sizing: border-box;
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
