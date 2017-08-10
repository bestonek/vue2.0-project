<template>
	<div>
		<div class="app-header">1</div>
		<div class="app-content">
			<!-- 缓存 -->
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">3</div>
	</div>
</template>
<script>
	import Index from './pages/index.vue'
	export default {
		components:{Index},
		methods:{
			fnn(a){
				console.log(a)
			}
		}
	}
</script>
<style lang="scss">
* {
	padding: 0;
	margin: 0;
	color: #333;
	font-family: "微软雅黑", "PingFang SC-Regular", "Helvetica";
	outline: 0;
	-webkit-tap-highlight-color: transparent;
	tap-highlight-color: transparent;
}

body {
	background-color: #fff;
}

input {
	border: none;
	background-color: transparent;
}

a {
	text-decoration: none;
	display: block;
}

img {
	display: block;
	border: 0 none;
	font-size: .24rem;
	text-align: center;
}

li {
	list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: normal;
}
</style>