<template>
	<el-container >
		<div class="container"  v-loading="!show" 
			element-loading-text="数据加载中..."
			element-loading-background="rgba(255, 255, 255, 0.5)"
			 v-loading.fullscreen.lock="!show2"
			 >
			<el-row :gutter="20">
				<!--文章盒子-->
				<el-col :span="18" class="article-list"  >
					<!--文章列表-->
					<el-row v-for="vo in list" class="li">
						<el-col :span="6">
							<img :src="vo.pic" />
						</el-col>
						<el-col :span="18">
							<router-link :to="'/content/'+vo.id"><h1 v-text="vo.title"></h1></router-link>
							<p v-text="vo.desc"></p>
							<div class="article-info"><router-link :to="'/article/t/'+vo.type" v-text="vo.typename"></router-link> <span v-text="vo.time"></span>

							<span class="r">
								<i class="iconfont" v-html="'&#xe68a;'+vo.a"></i>
								<i class="iconfont" v-html="'&#xe681;'+vo.z"></i>
								<i class="iconfont" v-html="'&#xe604;'+vo.p"></i>
							</span></div>
						</el-col>
					</el-row>

					<div class="page" v-show="show">
						<el-pagination background :page-size="page.size" 
			@current-change="handleCurrentChange" layout="prev, pager, next"  :total="page.count"> </el-pagination>
					</div>

				</el-col>
				<el-col :span="6">
					<div class="article-type article-r">
						<ul>
							<li v-for="vo in type"><router-link :to="vo.url" :class="{active:vo.an}">{{vo.name}}</router-link>
								<ul v-if="vo.list">
									<li v-for="vo2 in vo.list">
										<router-link :to="vo2.url" :class="{active:vo.an}">{{vo2.name}}</router-link>
									</li>
								</ul>
							</li>
						</ul>
					</div>

					<div class="article-key article-r">
						<div class="title"><h1 class="l">热门标签</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							{{$route.params.t}}
							<router-link to="/"><el-tag>标签一</el-tag></router-link>
							<router-link to="/"><el-tag type="success">标签</el-tag></router-link>
							<router-link to="/"><el-tag type="info">标签三有</el-tag></router-link>
							<router-link to="/"><el-tag type="warning">四</el-tag></router-link>
							<router-link to="/"><el-tag type="danger">标签五人</el-tag></router-link>
							<router-link to="/"><el-tag>标签一</el-tag></router-link>
							<router-link to="/"><el-tag type="success">标签</el-tag></router-link>
							<router-link to="/"><el-tag type="info">标签三有</el-tag></router-link>
							<router-link to="/"><el-tag type="warning">四</el-tag></router-link>
							<router-link to="/"><el-tag type="danger">标签五人</el-tag></router-link>
							<router-link to="/"><el-tag>标签一</el-tag></router-link>
							<router-link to="/"><el-tag type="success">标签</el-tag></router-link>
							<router-link to="/"><el-tag type="info">标签三有</el-tag></router-link>
							<router-link to="/"><el-tag type="warning">四</el-tag></router-link>
							<router-link to="/"><el-tag type="danger">标签五人</el-tag></router-link>
						</div>
					</div>

					<div class="article-hot article-r">
						<div class="title"><h1 class="l">热门文章</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in 10"> <router-link to="/">我是文单1{{vo}}1111</router-link> <span class="r">{{i}}</span></li>
							</ul>
						</div>

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
				show:false,
				show2:true,
				type:[
					{name:"全部文章",url:"/article",an:true},
					{name:"后端",url:"/article/t/1",an:false,list:[
						{name:"php",url:"/article/t/2",an:false},
						{name:"python",url:"/article/t/3",an:false},
						{name:"mysql",url:"/article/t/4",an:false},
					]},
					{name:"前端",url:"/article/t/5",an:false,list:[
						{name:"vue",url:"/article/t/6",an:false},
						{name:"angular",url:"/article/t/7",an:false},
						{name:"jquery",url:"/article/t/8",an:false},
					]},
					{name:"linux",url:"/article/t/9",an:false},
				],
				list:[],
				page:{
					count:0,
					size:10
				}
			}
		},
		created: function(){
			console.log(111);
			console.log(this.$route)
			var self = this;
			this.$emit("SetHeader", true);
			if (sessionStorage.article){
				var data  = JSON.parse(sessionStorage.article);
				self.show = true;
				self.list = data.data;
				self.page.count = data.count;
			}else{
				this.$emit("gets",{url:'/api/article.html',success:function(e){
					if(e.status==200){
						self.show = true;
						self.list = e.data.data;
						self.page.count = e.data.count;
						sessionStorage.article = JSON.stringify(e.data);
					}
				},error:function(e){
					self.$message.error('I\'m sorry 请求错误!');
				}});
			}
		},
		methods: {
			handleCurrentChange(p) { //切换页面
				var self = this;
				self.show2 = false;
				if (sessionStorage['article'+p]){
					var data  = JSON.parse(sessionStorage['article'+p]);
					self.show2 = true;
					self.list = data.data;
					self.page.count = data.count;
				}else{
					this.$emit("gets",{url:'/api/article.html?p='+p,success:function(e){
						if(e.status==200){
							self.show2 = true;
							self.list = e.data.data;
							self.page.count = e.data.count;
							sessionStorage['article'+p] = JSON.stringify(e.data);
						}
					},error:function(e){
						self.$message.error('I\'m sorry 请求错误!');
					}});
				}
			}
		}
	}
</script>
