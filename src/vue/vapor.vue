<template lang='jade'>
	.vapor(v-bind:style='{ height: height }')
		.vapor-rectangle(v-for="segmentStyle in segments", v-bind:style='segmentStyle')
</template>

<style lang='less'>
	@import '~colors.less';
	@import '~animations.less';

	.vapor {
		.vapor-rectangle {
			position: absolute;
			background-color: @color-brown-light;
			width: 100%;
			animation: wobble;
			animation-fill-mode: both;
			animation-iteration-count: infinite;
		}
	}
</style>

<script>
	export default {
		props: {
			height: String, // css property
			duration: {
				type: Number,
				default: 1000 // ms
			},
			numberOfSegments: {
				type: Number,
				default: 40
			}
		},

		computed: {
			segments() {
				let array = new Array(this.numberOfSegments)
				let height = 100 / this.numberOfSegments
				for (let i = 0; i < this.numberOfSegments; i++) {
					let ratio = i / (this.numberOfSegments)
					array[i] = {
						opacity: 1 - ratio,
						animationDelay: `${ratio * this.duration}ms`,
						animationDuration: `${this.duration}ms`,
						height: `${height}%`,
						bottom: `${i * height}%`
					}
				}
				return array
			}
		}
	}
</script>
