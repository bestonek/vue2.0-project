<template>
	<div class="content">
		<div class="left-con-box">
			<div class="box">
				<h3>{{ leftListData[0]['proCls'] }}</h3>
				<div v-for="val in leftListData[0]['conList']">
					<h4>{{ val['title'] }}</h4>
					<ul>
						<li v-for="(vl,idx) in val['list']">
							<a :href="vl['href']" target="_blank">
								{{ vl['value'] }}
								<span v-if="vl['hot']">HOT</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="box">
				<h3>{{ leftListData[1]['title'] }}</h3>
				<ul>
					<li v-for="val in leftListData[1]['list']">
						<a href="">{{ val['value'] }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="light-con-box">
			<slide-show :slide-data="slideData" :int-time="3000"></slide-show>
			<ul>
				<li
					v-for="(val,idx) in rightBoxData" 
					:class="{mr:idx%2==0}"
				>
					<div class="img-box">
						<img :src="val.src" alt="">
					</div>
					<div class="r-box">
						<h3>{{ val.title }}</h3>
						<h4>{{ val.text }}</h4>
						<router-link
							tag="a"
							:to="{path: val.href}"
						>立即购买</router-link>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import _ from 'lodash'
import SlideShow from '../components/slideShow.vue'

export default {
	components: {
		SlideShow
	},
	data() {
		return {
			rightBoxData:[

				{
					src: require('../assets/images/1.png'),
					href: '/details',
					title: '开放产品',
					text: '开放产品是一款开放产品'
				},
				{
					src: require('../assets/images/2.png'),
					href: '/details',
					title: '开放产品',
					text: '开放产品是一款开放产品'
				},
				{
					src: require('../assets/images/3.png'),
					href: '/details',
					title: '开放产品',
					text: '开放产品是一款开放产品'
				},
				{
					src: require('../assets/images/4.png'),
					href: '/details',
					title: '开放产品',
					text: '开放产品是一款开放产品'
				}

			],
			slideData: [

				{
					src:require('../assets/slideShow/pic1.jpg'),
					href:'/',
					title:'slide1'
				},
				{
					src:require('../assets/slideShow/pic2.jpg'),
					href:'/',
					title:'slide2'
				},
				{
					src:require('../assets/slideShow/pic3.jpg'),
					href:'/',
					title:'slide3'
				},
				{
					src:require('../assets/slideShow/pic4.jpg'),
					href:'/',
					title:'slide4'
				}

			],
			leftListData: [

				{
					proCls: '全部产品',
					conList: [{
							title: 'PC产品',
							list: [{
									value: '数据统计',
									href: 'http://www.baidu.com',
									hot: false
								},
								{
									value: '数据预测',
									href: 'http://www.baidu.com',
									hot: false
								},
								{
									value: '流量分析',
									href: 'http://www.baidu.com',
									hot: true
								},
								{
									value: '广告发布',
									href: 'http://www.baidu.com',
									hot: false
								}
							]
						},
						{
							title: '手机应用类',
							list: [{
									value: '91助手',
									href: 'http://www.baidu.com',
									hot: false
								},
								{
									value: '产品助手',
									href: 'http://www.baidu.com',
									hot: true
								},
								{
									value: '智能地图',
									href: 'http://www.baidu.com',
									hot: false
								},
								{
									value: '团队语音',
									href: 'http://www.baidu.com',
									hot: true
								}
							]
						}
					]
				},
				{
					title: '最新消息',
					list: [{
							value: '消息消息消息消息消息消息消息消息消息消息',
							href: 'http://www.baidu.com'
						},
						{
							value: '消息消息消息消息消息消息消息消息消息消息',
							href: 'http://www.baidu.com'
						},
						{
							value: '消息消息消息消息消息消息消息消息消息消息',
							href: 'http://www.baidu.com'
						},
						{
							value: '消息消息消息消息消息消息消息消息消息消息',
							href: 'http://www.baidu.com'
						}
					]
				}

			]
		}
	}
}
</script>
<style lang="scss" scoped>
.content {
	width: 980px;
	margin: 20px auto;
	overflow: hidden;
	.left-con-box {
		float: left;
		width: 270px;
		.box {
			background-color: #fff;
			overflow: hidden;
			margin-bottom: 20px;
			h3 {
				text-indent: 15px;
				font-size: 16px;
				color: #fff;
				line-height: 34px;
				background-color: #4fc08d;
				margin-bottom: 15px;
			}
			h4 {
				text-indent: 15px;
				font-size: 14px;
				font-weight: bold;
				line-height: 30px;
			}
			div {
				&:nth-of-type(1) {
					border-bottom: 1px solid #ccc;
				}
			}
			ul {
				padding-bottom: 20px;
				li {
					width: 240px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding: 0 15px;
					a {
						font-size: 13px;
						padding-left: 5px;
						line-height: 20px;
						display: inline;
						&:hover {
							color: #666;
						}
						span {
							font-weight: bold;
							background-color: red;
							color: #fff;
							font-size: 12px;
							padding: 0 2px;
						}
					}
				}
			}
		}
	}
	.light-con-box {
		float: right;
		width: 680px;
		ul{
			overflow: hidden;
			li{
				width: 330px;
				float: left;
				margin-top: 30px;
				background-color: #fff;
				padding: 20px 0;
				&.mr{
					margin-right: 20px;
				}
				.img-box{
					float: left;
					margin: 0 20px;
					img{
						display: block;
						width: 100px;
					}
				}
				.r-box{
					float: left;
					h3{
						font-size: 18px;
						font-weight: bold;
						line-height: 120%;
						margin-bottom: 10px;
					}
					h4{
						font-size: 16px;
						line-height: 120%;
						margin-bottom: 20px;
					}
					a{
						display: inline-block;
						width: 90px;
						line-height: 30px;
						font-size: 16px;
						background-color: #4fc08d;
						color: #fff;
						text-align: center;
						border-radius: 3px;
					}
				}
			}
		}
	}
}
</style>