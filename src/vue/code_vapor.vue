<template lang='jade'>
	.code-vapor {{sanitizedCode}}
		.code-char
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';

	.code-vapor {
		font-size: 15px;
		font-family: @base-font;
		color: @color-gray;

		.code-char {

		}
	}
</style>

<script>
	export default {
		props: {
			code: String,
			interval: {
				type: Number,
				default: 500
			}
		},

		data() {
			return {
				charIndex: 0
			}
		},

		computed: {
			sanitizedCode() {
				return this.code.replace(/ /g,'')
			}
		},

		methods: {
			spawnChar() {
				let spawnedChar = this.sanitizedCode[this.charIndex % this.sanitizedCode.length]
				this.charIndex += 1
			}
		},

		created() {
			this.intervalId = setInterval(this.spawnChar, this.interval)
		},

		destroyed() {
			window.clearInterval(this.intervalId)
		}
	}
</script>
