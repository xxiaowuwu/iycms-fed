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
				<ul>
					<li v-for="vo in [10,12,13,14,15,16,17,19,20,21,22,23]">
						<span><img src="/static/home/img/article-li.jpg" /> <b></b></span>
						<div>
							<h2>姓名</h2>
							<p>这是留言这是留言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言</p>
							<span>2015-15-15 12:23:12 来自xxxxxx x </span>
						</div>
						
					</li>
				</ul>
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
	.leave{
		padding: 20px;	
		background: #FFFFFF;
		overflow: hidden;
		-webkit-box-shadow: 0px 0px 15px #ccc;
   		 box-shadow: 0px 0px 15px #ccc;
	}
	.leave .tools{
		margin-top: 5px;
	}
	.leave .tools i{
		font-size: 30px;
		color: #999999;
	}
	.leave .tools i:hover{
		color: #009688;
		cursor:pointer;
	}
	
	
.leave-content{
	margin-top: 20px;
}
.leave-content > ul {
	margin-bottom: 20px;
}

.leave-content > ul li{
	overflow: hidden;
	background-color: #FFF;
	width: 100%;
	margin-bottom: 20px;
	-webkit-box-shadow: 0px 0px 15px #ccc;
    box-shadow: 0px 0px 15px #ccc;
}

.leave-content > ul li img{
	width: 50px;
	height: 50px;
}

.leave-content > ul li > span{
	width: 100px;
	display: block;
	float: left;
	border-right: solid 1px #CCCCCC;
	padding-bottom: 20px;
	margin-right: 20px;
	position: relative;
}

.leave-content > ul li > span{
	width: 100px;
	display: block;
	float: left;
	border-right: solid 1px #CCCCCC;
	padding-bottom: 20px;
	margin-right: 20px;
	position: relative;
	font-size: 16px;
	text-align: right;
	padding-right: 27px;
}

.leave-content > ul li b{
	position: absolute;
}
.leave-content > ul li em{
	color: #666;
	padding-right: 5px;
	font-style:normal;
}



.leave-content > ul li > span b{
	width: 10px;
	height: 10px;
	display: block;
	background-color: #009688;
	float: right;
	border-radius:50%;
	-moz-border-radius:50%;
	right: -5px;
    top: 15px;
}

	
</style>