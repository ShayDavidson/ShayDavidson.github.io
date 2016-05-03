<template lang='jade'>
	.code-vapor {{sanitizedCode}}
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';

	.code-vapor {
		font-size: 15px;
		font-family: @base-font;
		color: @color-gray;
	}
</style>

<script>
	export default {
		props: ['code'],

		computed: {
			sanitizedCode() {
				return this.code.replace(/ /g,'')
			}
		}
	}
</script>
