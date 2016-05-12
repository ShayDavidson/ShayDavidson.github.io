<template lang='jade'>
	.main-content
		h1 Hey, I'm Shay
		p A web, mobile and game developer, a father to one daughter and two cats, a coffee lover and a synthwave fan.
		p Currently leading the web team at the PayPal Consumer Product Center in Tel-Aviv.
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';

	.main-content {
		color: @color-brown;
		font-family: @font-family-base;

		h1 {
			font-size: @font-size-fluid-header;
			margin: 0;
			margin-bottom: 1.25rem;
		}

		p {
			font-size: @font-size-fluid-normal;
			margin: 0;
			text-align: justify;
			line-height: @font-size-fluid-normal * 1.5;

			+ p {
				margin-top: 1.5rem;
			}
		}
	}
</style>

<script>
	export default {
	}
</script>
