<template lang='jade'>
	.table-pillar
</template>

<style lang='less'>
	@import (reference) '~variables.less';

	.table-pillar {
		background-color: @color-wood-darker;
		transition: height @transition-top-duration @transition-top-easing;
		z-index: -2;
		position: relative;
	}
</style>

<script>
	export default {
		props: ['top']
	}
</script>
