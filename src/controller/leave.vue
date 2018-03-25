<template>
	<el-container>
		<div class="container">
			<div class="leave">
				<el-input type="textarea" :rows="5" resize="none" placeholder="请输入想您说的话..." v-model="content">
				</el-input>
				<div class="tools">
					<i @click="setB" class="iconfont">&#xe6fe;</i>
					<i @click="setURL" class="iconfont">&#xe63e;</i>
					<i @click="setFACE" class="iconfont">&#xe659;</i>
					<i @click="setREFER" class="iconfont">&#xe65d;</i>
					<i @click="setIMG" class="iconfont">&#xe791;</i>
					<i @click="setCODE" class="iconfont">&#xe6b9;</i>
					<el-button class="r">提交留言</el-button>
				</div>
			</div>
			<div class="leave-content">
				<ul class="l">
					<li v-for="vo in [10,12,13,14,15,16,17,19,20,21,22,23]">
						<div class="l img"><img src="/static/home/img/article-li.jpg" /></div>
						<div class="l content">
							<h4>姓名</h4>
							<p>这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留</p>
							<span>2015-15-15 12:23:12 来自xxxxxx x  <a href="javascript:;">回复</a></span>
							<i class="iconfont">&#xe6f1;12</i>
							
							<div class="reply">
								<h4>姓名</h4>
								<p><a href="">@博主</a> 这是留言这是留言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留这是留言这是留言这是留言这是留</p>
								<span>2015-15-15 12:23:12 来自xxxxxx x </span>
							</div>
							
							
							<div class="reply">
								<h4>姓名</h4>
								<p>这是留言这是留言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留</p>
								<span>2015-15-15 12:23:12 来自xxxxxx x </span>
							</div>
							
						</div>
					</li>
				</ul>
					<div class="hot l">
						<div class="title"><h1 class="l">热门文章</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in 10"> <router-link to="/">我是文单1{{vo}}1111</router-link> <span class="r">{{i}}</span></li>
							</ul>
						</div>
					</div>
					
					<div class="hot l">
						<div class="title"><h1 class="l">热门文章</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in 10"> <router-link to="/">我是文单1{{vo}}1111</router-link> <span class="r">{{i}}</span></li>
							</ul>
						</div>
					</div>
					
					<div class="hot l">
						<div class="title"><h1 class="l">热门文章</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in 10"> <router-link to="/">我是文单1{{vo}}1111</router-link> <span class="r">{{i}}</span></li>
							</ul>
						</div>
					</div>
					
				</div>
				
				<div class="page">
					<el-pagination background :page-size="30"   @size-change="handleSizeChange"
      @current-change="handleCurrentChange" layout="prev, pager, next"  :total="100"> </el-pagination>
				</div>
		</div>
	</el-container>
</template>
<script>
	export default {
		data() {
			return {
				content: ""
			}
		},
		created() {
			this.$emit("SetHeader", true);
			this.$emit("SetScrollTop");
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			setB: function(){
				this.content += "[b][/b]";
			},
			setURL: function(){
				this.content += "[url][/url]";
			},
			setFACE: function(){
				this.content += "[url][/url]";
			},
			setREFER: function(){
				this.content += "[r][/r]";
			},
			setIMG: function(){
				this.content += "[img][/img]";
			},
			setCODE: function(){
				this.content += "[code][/code]";
			}
		}
	}
</script>

<style>
	
	
</style>