<template>
	<el-container>
		<div class="content">
			<div class="content-head mb20">
				<h1>1112123121123</h1>
			</div>
			<div class="container background p20">
			
				  	<div class="body">
				  		大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd大厦大厦大厦大厦
				  		<br />大厦大厦dd
				  		
				  		
				  		
				  		
				  	</div>
				  	
				  	
				  	<div class="info">
				  			<p>
				  			所属分类: <a href="content.vue23">php</a> 发表时间: <span>2017-24-15 11:55:55</span> 最后更新时间: <span>2017-24-15 11:55:55</span> </p>
				  			<p>浏览量: <span>2015</span> TAG: 
				  			<el-tag size="mini">超小标签</el-tag>
				  			<el-tag size="mini">超小标签</el-tag>
				  			<el-tag size="mini">超小标签</el-tag>
				  			<el-tag size="mini">超小标签</el-tag>
				  			<el-tag size="mini">超小标签</el-tag>
				  			<el-tag size="mini">超小标签</el-tag>
				  			</p>
				  			<p class="warning">
				  				本文标题: 你有仍人有仍人有仍仍人脸有<Br />
				  				本文链接: http://23423234<br />
				  				版权声明: 若无特殊注明，本文皆为《 读心印 》原创，转载请保留文章出处。
				  				
						  	</p>
				  		</div>
				  		<div class="comments">
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
				  	
				  	
				  	<div class="toc">
					  	<div class="title"><h1 class="l">目录[TOC]</h1></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in 10"> - <router-link to="/">我是文单1{{vo}}1111</router-link></li>
							</ul>
						</div>
				  	</div>

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
		},
		methods: {
		
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
	.content{
		width: 100%;
	}
	.content .container {
		position: relative;
	}
	
	.content .container .toc{
		width: 200px;
		position: absolute;
		right: 20px;
		top: 20px;
	}
	.content .container .body{
		
	}
	
	.content .container .info{
		color: #333;
		border-top: dashed 1px #ccc;
		padding: 10px 0;
		margin: 20px 0 10px 0;
	}
	
	.content .container .info span{
		color: #999;
	}
	.content .container .info p{
		margin: 5px 0;
	}
	.content .container .info .warning{
		border-left: solid 3px #009688;
		padding: 10px;
		color: #666;
		background-color: rgba(0,0,0,0.05);
	}
	
	.content .container .comments{
		border-top: dashed 1px #ccc;
		padding: 20px 0;
		margin: 10px 0;
	}
	
	
	.content .container .comments .tools {
		margin-top: 5px;
	}
	
	.content .container .comments .tools i {
		font-size: 30px;
		color: #999999;
	}
	
	.content .container .comments .tools i:hover {
		color: #009688;
		cursor: pointer;
	}
	
	.content-head{
		width: 100%;
		height: 200px;
		line-height: 200px;
		    position: relative;
		    overflow: hidden;
	}
	.content-head h1{
		z-index: 9;
		position: absolute;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 40px;
	}
	.content-head:before{
		content: "";
		background: #009688 url(/static/home/img/article-li.jpg);
		background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
     
      	-webkit-filter: blur(50px);
        -moz-filter: blur(50px);
        -o-filter: blur(50px);
        -ms-filter: blur(50px);
        filter: blur(50px);
        width: 100%;
		height: 400px;
		position: absolute;
		top: -100px;
		left: 0;
		z-index: 0;
	}
	.content-head:after{
		    content: "";
		    position: absolute;
		    top: 0;
		    left: 0;
		    z-index: 1;
		    width: 100%;
		    height: 100%;
		    background-color: rgba(0, 0, 0, .5);
	}
	
</style>
