<template>
	<div id="app" 
		v-loading.fullscreen.lock="!show"
		element-loading-text="数据加载中..."
		element-loading-background="rgba(0, 0, 0, 0.8)"
		@click="floating">
		<!--头部-->
		<IycmsHeader :nav="nav" :ShowHeader="ShowHeader" @SetHeader="set_header" @scrollTop="set_scrollTop" ></IycmsHeader>
		<!--主体~路由-->
		<router-view :init="init" @SetHeader="set_header" @gets="gets" ></router-view>
		<!--尾部-->
		<IycmsFooter :init="init"></IycmsFooter>
		
			
		<!--开门效果-->
		<div :class="{'maskl':true,'maskl2':show}"></div>
		<div :class="{'maskr':true,'maskr2':show}"></div>
		
		<!--点击特效-->
		<div class="floatig">
			<font v-for="vo in keys.list" v-show="vo.show" :style="{top:vo.yy+'px',left:vo.xx+'px',opacity:vo.opacity}">{{vo.name}}</font>
		</div>
		
		<!--返回顶部-->
		<transition name="el-fade-in-linear">
			<div v-show="top" @click="returntop" class="top"><i class="iconfont">&#xe610;</i></div>
		</transition>
		
	</div>
</template> 
<script>
	export default {
		data() {
			return {
				host: "http://127.0.0.14", //api接口
				show: false, //显示页面
				ShowHeader: false, //导航切换
				top: false, //返回顶部
				init:{},
				nav: [
					{name:"更多",url:"/about",an:false,list:[
						{name:"友情链接",url:"/info"},
					]},
					{name:"关于我",url:"/info"},
					{name:"留言",url:"/leave"},					
					{name:"作品",url:"/works"},
					{name:"实验室",url:"/experiment"},
					{name:"归档",url:"/archive"},
					{name:"博文",url:"/article"},
					{name:"首页",url:"/",active:true}
				],
				keys:{
					list:[
						{name:"php",show:false,yy:0,xx:0,opacity:1},
						{name:"css",show:false,yy:0,xx:0,opacity:1},
						{name:"python",show:false,yy:0,xx:0,opacity:1},
						{name:"java",show:false,yy:0,xx:0,opacity:1},
						{name:"mysql",show:false,yy:0,xx:0,opacity:1},
						{name:"php",show:false,yy:0,xx:0,opacity:1},
					],
					i:0
				}
			};
		},
		mounted: function(){
			var self = this;
			
			if(typeof(Storage)!=="undefined"){
			    console.log(1)
			} else {
			    console.log(0)
			}

			//加载初始数据
			this.gets({url:'/api.html',success:function(e){
				if(e.status==200){
					self.show = true;
					self.init = e.data;
				}
			},error:function(e){
				 self.$message.error('I\'m sorry 请求错误!');
			}});
		},
		methods: {
			//导航状态
			set_header:function(e){
				this.ShowHeader = e;
			},
			//显示返回顶部
			set_scrollTop:function(e){
				if(e>300){
					this.top = true;
				}else{
					this.top = false;
				}
			},
			//点击特效
			floating : function(e){
				//排除某些元素
				if(e.target.nodeName=="A" || e.target.nodeName=="I"){
					return false;
				}
				var self = this;
				var n = self.keys.i;
				self.keys.list[n].yy = e.clientY;
				self.keys.list[n].xx = e.clientX;
				self.keys.list[n].show = true;
				self.keys.list[n].opacity = 1;
				setTimeout(function(){
					self.keys.list[n].opacity = 0.1;
					self.keys.list[n].yy = e.clientY-50;
				},10)
				
				setTimeout(function(){
					self.keys.list[n].show = false;
				},1000)
				
				self.keys.i = (self.keys.i==self.keys.list.length-1) ? 0 : ++self.keys.i;
			},
			//返回顶部
			returntop:function(){
				var top = setInterval(function(){
					document.body.scrollTop-=10;
					if(document.body.scrollTop<=0){
						clearInterval(top)
					}
				},1)
			},
			//封装ajax get请求
			gets:function({url,success,error}){
				this.$http.get(this.host+url).then(success).catch(error);
			}
		},
		
		
	}
</script>

<style>
	.floatig font{
		position: fixed;
		left: 0;
		top: 0;
		cursor:default;
		color: #009688;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Chrome/Safari/Opera */
		-khtml-user-select: none; /* Konqueror */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
		not supported by any browser */
		transition:all 2s;
		-moz-transition:all 2s;
		-webkit-transition:all 2s;
		-o-transition:all 2s;
	}
	.maskl,.maskr{
		position: fixed;
		width: 50%;
		height: 100%;
		background-color: rgba(0,0,0,0.8);
		top: 0;
		z-index: 101;
		transition:all 2s;
		-moz-transition:all 2s;
		-webkit-transition:all 2s;
		-o-transition:all 2s;
	}
	.maskl{
		left: 0;
	}
	.maskr{
		right: 0;
	}

	.maskl2{
		left: -50%;
	}
	
	.maskr2{
		right: -50%;
	}
	
	.top{
		cursor:pointer;
		position: fixed;
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		bottom: 50px;
		left: 50%;
		margin-left: 600px;
		background-color: rgba(255,255,255,0.5);
		transition:all 2s;
		-moz-transition:all 2s;
		-webkit-transition:all 2s;
		-o-transition:all 2s;
	}
	.top i{
		font-size: 24px;
		color: #CCC;
		transition:all 2s;
		-moz-transition:all 2s;
		-webkit-transition:all 2s;
		-o-transition:all 2s;
	}
	.top:hover i{
		color: #009688;		
	}
	.top:hover{
		background-color: rgba(255,255,255,1);
	}
	
</style>