<template>
	<el-container>
		<div class="container">
			<el-row class="info">
				<el-col :span="6" class="info-content p20  background">
					<div class="title mb20">
						<h1>博主资料</h1>
					</div>
				
					<div class="text item">
						<img width="100px" :src="info.head" />
					</div>
					
					
					
					<div class="text mt10 item">
						{{info.desc}}
					</div>
					
					
					<div class="text mt10 item">
						网名: {{info.nick}}
					</div>
					
					<div class="text  item">
						姓名: {{info.name}}
					</div>
					
					<div class="text  item">
						性别: {{info.sex}}
					</div>
					<div class="text item">
						生日: {{info.birthday}} ({{info.calendar}})
					</div>
					
					<div class="text item">
						年龄: {{info.name}}
					</div>
					<div class="text item">
						故乡: {{info.home_province}} - {{info.home_city}} - - {{info.home_area}}
					</div>
					<div class="text item">
						所在地: {{info.my_province}} - {{info.my_city}} - - {{info.my_area}}
					</div>
					<div class="text item">
						邮箱: {{info.email}}
					</div>
					<div class="text item">
						扣扣: {{info.qq}}
					</div>
					<div class="text item">
						微信: {{info.wx}}
					</div>
					<div class="text item">
						个人博客: {{info.url}}
					</div>
					<div class="text item">
						Github: {{info.github}}
					</div>
					<div class="text item">
						Gitocs: {{info.gitosc}}
					</div>
				</el-col>
				<el-col :span="18" class="p20  background">
					<div class="title mb20">
						<h1>专业技能</h1>
					</div>
				
					<div class="skills">
						<el-row v-for="i in 10">
							<el-col :span="4">python</el-col>
							<el-col :span="20" class="">
								<el-progress :percentage="70"></el-progress>
							</el-col>
						</el-row>
					</div>
					
					
					<div class="title mt20">
						<h1>工作经验</h1>
					</div>
					
					<div class="work">
						<ul>
							<li v-for="vo in work">
								<div class="date l">{{vo.date_start}}</div>
								<div class="content l">
									<h3>{{vo.department}}</h3>
									<p>至{{vo.date_end}}</p>
								</div>
							</li>
						</ul>
					</div>
									
				</el-col>
			</el-row>
		</div>
	</el-container>
</template>
<script>
	export default {
		data() {
			return {
				info: {
					'name': '小曾',
					'nick': '网名',
					'head': '/static/home/img/head.jpg',
					'sex': '男',
					'birthday': '2017-12-31',
					'calendar': '公历',
					'qq': '12',
					'wx': '12',
					'email': '12',
					'url': '12',
					'github': '12',
					'gitosc': '12',
					'desc': '探索计算机的奥秘是我们的乐趣,也是我们奋不顾身的理由\r\n我们是开发者,我们是程序员,一群与众不同的人!',
					'my_city': '36',
					'my_area': '411',
					'home_city': '',
					'home_area': '',
					'my_province': '3',
					'home_province': '20',
				},
				work:[
				{department:'某某公司', company:"1231", key:"!23", date_start:"2017-15", date_end:"2017-25", position:"!23", body:"工作内容"},
				{department:'某某公司', company:"1231", key:"!23", date_start:"!23", date_end:"123", position:"!23", body:"工作内容"},
				{department:'某某公司', company:"1231", key:"!23", date_start:"!23", date_end:"123", position:"!23", body:"工作内容"},
				{department:'某某公司', company:"1231", key:"!23", date_start:"!23", date_end:"123", position:"!23", body:"工作内容"},
				]
			}
		},
		created() {
			this.$emit("SetHeader", true);
		},
		methods: {

		}
	}
</script>

<style>
	.info > div{
		min-height: 800px;
	}
	
	div.title{
		border-bottom: dashed 1px #ccc;
		padding-bottom: 8px;
		overflow: hidden;
		margin-bottom: 10px;
	}
	
	div.title h1 {
		font-size: 18px;
	}
	
	div.title a {
		font-size: 14px;
	}
	
	.skills{
		overflow: hidden;
	}
	.skills > div{
		width: 50%;
		float: left;
		color: #666;
		margin-bottom: 10px;
	}
	
	.info-content .item{
		margin-bottom: 5px;
		color: #666;
	}
	.work{
		margin-top: 30px;
	}
	.work ul li{
		width: 100%;
		overflow: hidden;
	}
	.work ul li div.date{
		width: 100px;
		padding: 20px 0;
	}
	.work ul li div.content{
		position: relative;
		padding: 20px 30px;
		border-left: solid 1px #ccc;
	}
	.work ul li div.content:after{
		content: "";
		width: 15px;
		height: 15px;
		background-color: #009688;
		position: absolute;
	    top: 25px;
	    left: -8px;
	    border: solid 3px rgba(255,255,255,0.5);
	    border-radius: 50%;
    	-moz-border-radius: 50%;
	}
	
	
</style>