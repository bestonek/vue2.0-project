<template>
	<div class="aa" v-if='isShow'>
		<div class="dialog-wrap">
			<div class="dialog-cover" @click="closeFn"></div>
			<transition name="drop">
				<div class="dialog-content" v-if='isShow'>
					<p class="dialog-close" @click="closeFn">x</p>
					<!-- <slot name='im1'><im1></im1></slot>
					<slot name='im2'><im2></im2></slot>
					<slot name='im3'><im3></im3></slot> -->
					<slot name='1'>1</slot>
					<slot name='2'>2</slot>
					<slot name='3'>3</slot>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
import Im1 from './i1.vue'
import Im2 from './i2.vue'
import Im3 from './i3.vue'
export default {
	components:{
		Im1,Im2,Im3
	},
	props: {
		isShow: {
			type: Boolean,
			default: true
		},
		page:{
			type:Number
		}
	},
	data() {
		return {

		}
	},
	methods: {
		closeFn(){
			this.$emit('on-close')
		}
	}
}
</script>
<style scoped>
.drop-enter-active {
	transition: all .5s ease;
}

.drop-leave-active {
	transition: all .3s ease;
}

.drop-enter {
	transform: translateY(-500px);
}

.drop-leave-active {
	transform: translateY(-500px);
}

.dialog-wrap {
	position: fixed;
	width: 100%;
	height: 100%;
}

.dialog-cover {
	background: #000;
	opacity: .3;
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.dialog-content {
	width: 50%;
	position: fixed;
	max-height: 50%;
	overflow: auto;
	background: #fff;
	top: 20%;
	left: 50%;
	margin-left: -25%;
	z-index: 10;
	border: 2px solid #464068;
	padding: 2%;
	line-height: 1.6;
}

.dialog-close {
	position: absolute;
	right: 5px;
	top: 5px;
	width: 20px;
	height: 20px;
	text-align: center;
	cursor: pointer;
}

.dialog-close:hover {
	color: #4fc08d;
}
</style>