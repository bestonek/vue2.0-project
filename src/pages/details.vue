<template>
	<div class="box">
		<div class="con-left">
			<img :src="imgSrc" alt="">
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgBox: {
					'/details/count': require('../assets/images/1.png')
				}
			}
		},
		computed:{
			imgSrc(){
				return this.imgBox[this.$route.path]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 980px;
		margin: 20px auto 0;
		overflow: hidden;
		.con-left{
			float: left;
			width: 270px;
			background-color: #fff;
			img{
				margin: auto;
				display: block;
			}
		}
	}	
</style>