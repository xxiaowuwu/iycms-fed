<template>
	<el-container>
		<div class="container">
			<el-row class="info">
				<el-col :span="6" class="info-content p20  background">
					<div class="title mb20">
						<h1>博主资料</h1>
					</div>
				
					<div class="text item">
						<img width="100px" :src="init.info.head" />
					</div>
					
					<div class="text mt10 item" v-html="init.info.desc">
					</div>
					
					<div class="text mt10 item">
						网名: {{init.info.nick}}
					</div>
					
					<div class="text  item">
						姓名: {{init.info.name}}
					</div>
					
					<div class="text  item">
						性别: {{init.info.sex}}
					</div>
					<div class="text item">
						生日: {{init.info.birthday}} ({{init.info.calendar}})
					</div>
					
					<div class="text item">
						年龄: {{init.info.name}}
					</div>
					<div class="text item">
						故乡: {{init.info.home_province}} - {{init.info.home_city}} - - {{init.info.home_area}}
					</div>
					<div class="text item">
						所在地: {{init.info.my_province}} - {{init.info.my_city}} - - {{init.info.my_area}}
					</div>
					<div class="text item">
						邮箱: {{init.info.email}}
					</div>
					<div class="text item">
						扣扣: {{init.info.qq}}
					</div>
					<div class="text item">
						微信: {{init.info.wx}}
					</div>
					<div class="text item">
						个人博客: {{init.info.url}}
					</div>
					<div class="text item">
						Github: {{init.info.github}}
					</div>
					<div class="text item">
						Gitocs: {{init.info.gitosc}}
					</div>
				</el-col>
				<el-col :span="18" class="p20  background">
					<div class="title mb20">
						<h1>专业技能</h1>
					</div>
				
					<div class="skills">
						<el-row v-for="vo in init.skills">
							<el-col :span="6">{{vo.name}}</el-col>
							<el-col :span="18" class="">
								<el-progress :percentage="vo.value"></el-progress>
							</el-col>
						</el-row>
					</div>
					
					<div class="title mt20">
						<h1>工作经验</h1>
					</div>
					
					<div class="work">
						<ul>
							<li v-for="vo in init.work">
								<div class="date l">{{vo.date_start}}</div>
								<div class="content l">
									<div>
										<h3 class="l">{{vo.department}}</h3>
										<span class="r">至{{vo.date_end}}</span>
									</div>
									<div>
										<h4 class="l">{{vo.department}}</h4>
										<h4 class="l">{{vo.position}}</h4>
									</div>
									<div class="workbody">
										<h4>工作内容</h4>
										<p>{{vo.body}}</p>
									</div>
									
								</div>
								<p></p>
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
		props: ['init'],
		data() {
			return {
			}
		},
		created() {
			this.$emit("SetHeader", true);
			this.$emit("SetScrollTop");
		},
		methods: {

		}
	}
</script>

<style>
	
	
</style>