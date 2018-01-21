<template>
	<div id="app" v-loading.fullscreen.lock="!show" @click="floating">
		<Header :nav="nav" :header2="header2" @SetHeader="set_header2"  ></Header>
		<router-view @SetHeader="set_header2" ></router-view>
		<Footer></Footer>
		<div :class="{'maskl':true,'maskl2':show}"></div>
		<div :class="{'maskr':true,'maskr2':show}"></div>
		<div class="floatig">
			<font v-for="vo in keys" v-show="vo.show" :style="{top:vo.yy+'px',left:vo.xx+'px',opacity:vo.opacity}">{{vo.name}}</font>
		</div>
	</div>
</template> 
<script>
	export default {
		data() {
			return {
				show: true,
				header2: false,
				nav: [
					{name:"更多",url:"/about",an:false,list:[
						{name:"友情链接",url:"/info"},
					]},
					{name:"关于我",url:"/info"},
					{name:"留言",url:"/leave"},					
					{name:"作品",url:"/lea212"},
					{name:"实验室",url:"/experiment"},
					{name:"归档",url:"/archive"},
					{name:"博文",url:"/article"},
					{name:"首页",url:"/",active:true}
				],
				keys:[
					{name:"php",show:false,yy:0,xx:0,opacity:1},
					{name:"css",show:false,yy:0,xx:0,opacity:1},
					{name:"python",show:false,yy:0,xx:0,opacity:1},
					{name:"java",show:false,yy:0,xx:0,opacity:1},
					{name:"mysql",show:false,yy:0,xx:0,opacity:1},
					{name:"php",show:false,yy:0,xx:0,opacity:1},
				],
				i:0
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
				if(e.target.nodeName=="A" || e.target.nodeName=="I"){
					return false;
				}
				var self = this;
				var n = self.i
				self.keys[n].yy = e.clientY;
				self.keys[n].xx = e.clientX;
				self.keys[n].show = true;
				self.keys[n].opacity = 1;
				setTimeout(function(){
					self.keys[n].opacity = 0.3;
					self.keys[n].yy = e.clientY-20;
				},10)
				
				setTimeout(function(){
					self.keys[n].show = false;
				},1000)
				
				self.i = (self.i==self.keys.length-1) ? 0 : ++self.i;
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