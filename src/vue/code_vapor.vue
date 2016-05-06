<template lang='jade'>
	.code-vapor
</template>

<style lang='less'>
	@import '~fonts.less';
	@import '~colors.less';

	@top-vapor-reach: 30rem;
	@vapor-sin-multiplier: 1.25rem;

	@keyframes vaporize {
		0% {
			left: sin(1) * @vapor-sin-multiplier;
			opacity: 0;
			top: 0;
		}
		5% {
			opacity: 1;
		}
		33% {
			left: sin(-1) * @vapor-sin-multiplier;
		}
		66% {
			left: sin(1) * @vapor-sin-multiplier;
		}
		100% {
			font-size: 2rem;
			left: sin(-1) * @vapor-sin-multiplier;;
			opacity: 0;
			top: -@top-vapor-reach;
		}
	}

	.code-vapor {
		font-size: 3rem;
		font-family: @base-font;
		color: @color-gray;
		text-align: center;

		.code-char {
			animation: vaporize 2.5s;
			position: absolute;
		}
	}
</style>

<script>
	function createCodeCharElement(char) {
		let element = document.createElement('div')
		element.className = 'code-char'
		element.innerHTML = char
		return element;
	}

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

		methods: {
			spawnChar() {
				const spawnedChar = this.code[this.charIndex % this.code.length]
				const element = createCodeCharElement(spawnedChar)
				this.$el.appendChild(element)
				element.addEventListener('animationend', () => {
					this.$el.removeChild(element)
				}, false);
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
