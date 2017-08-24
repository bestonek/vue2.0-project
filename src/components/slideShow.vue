<template>
	<div @mouseover="clearInt()" @mouseout="setInt()">
		<ul class="img-box">
			<li>
				<a :href="slideData[slideIndex]['href']">
					<transition name="slide-show">
						<img v-if="isShow" :src="slideData[slideIndex]['src']" alt="">
					</transition>
					<transition name="slide-show">
						<h3 v-if="isShow">{{ slideData[slideIndex]['title'] }}</h3>
					</transition>
					<transition name="slide-hide">
						<img v-if="!isShow" :src="slideData[slideIndex]['src']" alt="">
					</transition>
					<transition name="slide-hide">
						<h3 v-if="!isShow">{{ slideData[slideIndex]['title'] }}</h3>
					</transition>
				</a>
			</li>
		</ul>
		<div class="btn-box">
			<span v-for="(x,idx) in slideData" @click="goTo(idx)" :class="{active:idx==slideIndex}"></span>
		</div>
		<div class="LRBtn-box">
			<div onselectstart="return false" class="l" @click="goTo(toPrevent)">
				<</div>
					<div onselectstart="return false" class="r" @click="goTo(toNext)">></div>
			</div>
		</div>
</template>
<script>
export default {
	props: {
		slideData: {
			type: Array,
			default: []
		},
		intTime:{
			type: Number,
			default: 3000
		}
	},
	data() {
		return {
			isShow: true,
			slideIndex: 0
		}
	},
	watch: {
		slideIndex() {}
	},
	methods: {
		goTo(idx) {
			if (this.slideIndex != idx) {
				this.isShow = false
				setTimeout(() => {
					this.isShow = true
					this.slideIndex = idx
				}, 14)
			}
		},
		setInt(){
			this.timer = setInterval(()=>{
				this.goTo(this.toNext)
			},this.intTime)
		},
		clearInt(){
			clearInterval(this.timer)
		}
	},
	computed: {
		toPrevent() {
			if (this.slideIndex == 0) {
				return this.slideData.length - 1
			} else {
				return this.slideIndex - 1
			}
		},
		toNext() {
			if (this.slideIndex == this.slideData.length - 1) {
				return 0
			} else {
				return this.slideIndex + 1
			}
		}
	},
	mounted(){
		this.setInt()
	}
}
</script>
<style lang="scss" scoped>
div {
	position: relative;
	overflow: hidden;
	height: 382px;
	ul.img-box {
		width: 100%;
		li {
			a {
				h3 {
					font-size: 16px;
					color: #fff;
					padding: 0 15px;
					line-height: 200%;
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: rgba(0, 0, 0, .4);
				}
				img {
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}
				.slide-show-enter-active {
					transition: .6s;
				}
				.slide-show-enter {
					transform: translateX(680px)
				}
				.slide-hide-leave-active {
					transition: .5s;
					transform: translateY(382px)
				}
			}
		}
	}
	.btn-box {
		position: absolute;
		bottom: 0;
		right: 5px;
		z-index: 3;
		height: 32px;
		line-height: 32px;
		padding: 0 10px;
		span {
			display: inline-block;
			width: 10px;
			height: 10px;
			background-color: #fff;
			border-radius: 50%;
			margin: 0 3px;
			cursor: pointer;
			&.active {
				background-color: #4fc08d;
			}
			&:hover {
				background-color: #4fc08d;
			}
		}
	}
	.LRBtn-box {
		text-align: center;
		line-height: 30px;
		div {
			position: absolute;
			background-color: rgba(255, 255, 255, .6);
			height: 30px;
			font-size: 16px;
			z-index: 4;
			color: rgb(130,130,130);
			width: 20px;
			top: 0;
			bottom: 0;
			margin: auto;
			cursor: pointer;
			border-radius: 2px;
			border: 1px solid rgba(170,170,170,.8);
			&.l {
				left: 15px;
			}
			&.r {
				right: 15px;
			}
		}
	}
}
</style>