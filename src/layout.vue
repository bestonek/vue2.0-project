<template>
	<div>
		<div class="app-header">
			<div class="box">
				<router-link class="logo" tag="a" :to="{path:'/'}">
					<img src="../src/assets/logo.png" height="200" width="200" alt="">
				</router-link>
				<div class="right">
					<a href="javascript:;" @click="open('log')">登录</a>
					<a href="javascript:;" @click="open('reg')">注册</a>
					<a href="javascript:;" @click="open()">关于</a>
				</div>
			</div>
		</div>
		<my-dialog :is-show="isShow" @on-close="close()">
			<log-form v-if="showDialog=='log'"></log-form>
			<reg-form v-if="showDialog=='reg'"></reg-form>
		</my-dialog>
		<div class="app-content">
			<!-- 缓存 -->
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer"></div>
	</div>
</template>
<script>
import Index from './pages/index.vue'
import SlideShow from './components/slideShow.vue'
import Dialog from './components/dialog.vue'
import LogForm from './components/logForm.vue'
import RegForm from './components/regForm.vue'

export default {
	components: {
		Index,
		SlideShow,
		MyDialog: Dialog,
		LogForm,
		RegForm
	},
	data() {
		return {
			isShow: false,
			showDialog: ''
		}
	},
	methods: {
		open(dl) {
			this.isShow = true
			this.showDialog = dl
		},
		close() {
			this.isShow = false
		}
	}
}
</script>
<style lang="scss">
* {
	padding: 0;
	margin: 0;
	color: #333;
	font-family: "微软雅黑";
	outline: 0;
}

body {
	background-color: #fff;
}

a {
	text-decoration: none;
}

a img {
	display: block;
	border: none;
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

.app-header {
	$w: 980px;
	background-color: #363636;
	padding: 10px 0;
	.box {
		width: $w;
		margin: auto;
		overflow: hidden;
		.logo {
			float: left;
			img {
				width: 50px;
				height: 50px;
			}
		}
		.right {
			float: right;
			line-height: 50px;
			a {
				display: inline;
				font-size: 16px;
				color: #fff;
				margin: 0 10px;
				&:hover {
					color: #e5e5e5;
				}
			}
		}
	}
}
</style>