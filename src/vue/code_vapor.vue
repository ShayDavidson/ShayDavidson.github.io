<template lang='jade'>
	.code-vapor
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';

	@keyframes vaporize {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.code-vapor {
		font-size: 15px;
		font-family: @base-font;
		color: @color-gray;

		.code-char {
			animation: vaporize 1s ease-out;
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
				const spawnedChar = this.sanitizedCode[this.charIndex % this.sanitizedCode.length]

				let element = document.createElement('div')
				element.className = 'code-char'
				element.innerHTML = spawnedChar
				element.addEventListener('animationend', (event) => {
					this.$el.removeChild(event.srcElement)
				}, false);
				this.$el.appendChild(element)

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
