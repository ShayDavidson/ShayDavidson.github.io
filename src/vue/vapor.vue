<template lang='jade'>
	.vapor
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
		20% {
			left: sin(-1) * @vapor-sin-multiplier;
		}
		50% {
			left: sin(1) * @vapor-sin-multiplier;
		}
		100% {
			font-size: 2rem;
			left: sin(-1) * @vapor-sin-multiplier;;
			opacity: 0;
			top: -@top-vapor-reach;
			width: 50%;
		}
	}

	.vapor {
		font-size: 3rem;
		font-family: @base-font;
		color: @color-gray;
		text-align: center;
		position: relative;
		top: 3rem;

		.vapor-rectangle {
			position: absolute;
			background-color: @color-brown-light;
			height: 1rem;
			width: 100%;
			animation: vaporize 1s;
		}
	}
</style>

<script>
	function createVaporRectangle() {
		let element = document.createElement('div')
		element.className = 'vapor-rectangle'
		return element
	}

	export default {
		props: {
			height: String,
			duration: {
				type: Number,
				default: 1000
			},
			numberOfSegments: {
				type: Number,
				default: 20
			}
		},

		computed: {
			segments() {
				let array = new Array(this.numberOfSegments)
				for (let i = 0; i < this.numberOfSegments; i++) {
					array[i] = {}
				}
				return array
			}
		},

		methods: {
			spawnVaporRectangle() {
				const element = createVaporRectangle()
				this.$el.appendChild(element)
				element.addEventListener('animationend', () => {
					this.$el.removeChild(element)
				}, false)
			}
		}
	}
</script>
