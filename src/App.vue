<template>
	<div id="app" v-loading.fullscreen.lock="!show" @click="floating">
		<Header :nav="nav" :header2="header2" @SetHeader="set_header2"  ></Header>
		<router-view @SetHeader="set_header2" ></router-view>
		<Footer></Footer>
		<div :class="{'maskl':true,'maskl2':show}"></div>
		<div :class="{'maskr':true,'maskr2':show}"></div>
		<!--<img v-show="!show" src="../static/home/img/loading.gif" id="loading" />-->
		<div class="floatig">
			<font v-for="vo in keys" v-show="vo.show" :style="{top:vo.y,left:vo.x}">{{vo.name}}</font>
		</div>
	</div>
</template> 
<script>
	export default {
		data() {
			return {
				show: false,
				header2: false,
				nav: [{name:"关于我",url:"/about",an:false,list:[{name:"个人资料",url:"/article"},{name:"专业技能",url:"/article"},
				{name:"项目经验",url:"/article"},{name:"工作经历",url:"/article"},]},{name:"留言",url:"/leave"},
				{name:"实验室",url:"/experiment"},{name:"归档",url:"/archive"},{name:"博文",url:"/article"},{name:"首页",url:"/",active:true,}],
				keys:[
					{name:"php",color:"#000",show:false,y:0,x:0},
					{name:"css",color:"#000",show:false,y:0,x:0},
					{name:"python",color:"#000",show:false,y:0,x:0},
					{name:"java",color:"#000",show:false,y:0,x:0},
					{name:"mysql",color:"#000",show:false,y:0,x:0},
					{name:"php",color:"#000",show:false,y:0,x:0},
				]
			};
		},
		
		created: function(){
			
		},
		mounted: function(){
			var self = this;
			setTimeout(function(){
				self.show = true;
			},3000/1000)
		
		},
		methods: {
			//导航状态
			set_header2:function(e){
				this.header2 = e;
			},
			floating : function(e){
				//$("body").css("color","#F00")
				//console.log(e);
				var self = this;
				var n = parseInt(Math.random()*(self.keys.length));
				
				self.keys[n].y = e.clientY+111;
				self.keys[n].x = e.clientX;
				self.keys[n].show = true;
				
				self.keys = self.keys;
				setTimeout(function(){
					self.keys[n].show = false;
				},1000)
			}
		},
		
	}
</script>

<style>
	.floatig font{
		position: fixed;
		top: 0;
		left: 0;
		color: #000;
		z-index: 102;
	}
	.maskl,.maskr{
		position: fixed;
		width: 50%;
		height: 100%;
		background-color: #FFF;
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
	
	
	
	
</style>