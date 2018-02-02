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
				  		
				  		<div class="info">
				  			
				  			
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
				
			}
		},
		created() {
			this.$emit("SetHeader", true);
		},
		
		
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
