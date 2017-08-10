<template>
	<div>
		<h1 v-for='(a,b) in length' @click="getPage(b+1),onShow()">{{b+1}}</h1>
		<my-dialog @on-close="onClose" :isShow='isShow'>
			<h1 :page="page" :slot='1'></h1>
		</my-dialog>
	</div>
</template>
<script>
import Dialog from '../components/dialog.vue'
export default {
	components: {
		myDialog: Dialog,
	},
	data() {
		return {
			isShow: true,
			length: 4,
			page: null
		}
	},
	computed: {
	},
	methods: {
		onClose() {
			this.isShow = false;
		},
		onShow() {
			this.isShow = true
		},
		getPage(a){
			this.page = a
		}
	}
}
</script>
<style lang="scss">
</style>