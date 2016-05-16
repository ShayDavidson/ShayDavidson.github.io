<template lang='jade'>
	.table-pillar(:class='{ top: top }')
</template>

<style lang='less'>
	@import '~colors.less';
	@import '~animations.less';

	.table-pillar {
		background-color: @color-wood-darker;
		transition: height @transition-top-duration @transition-top-easing;

		&.top {
			height: 0;
		}

	}
</style>

<script>
	export default {
		props: ['top']
	}
</script>
