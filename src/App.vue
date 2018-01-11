<template>
	<div id="app"  v-show="name">
		<Header :nav="nav" ></Header>
		<router-view @transferUser="abc"></router-view>
		<Footer></Footer>
	</div>
</template> 
<script>
	export default {
		name: 'app',
		data() {
			return {
				name:true,
				nav: [{
						name: "关于我",
						url: "/about",
						
						an: false,
						list: [{
								name: "个人资料",
								url: "/article"
							},
							{
								name: "专业技能",
								url: "/article"
							},
							{
								name: "项目经验",
								url: "/article"
							},
							{
								name: "工作经历",
								url: "/article"
							},
						]
					},

					{
						name: "实验室",
						url: "/experiment"
					},

					{
						name: "归档",
						url: "/archive"
					},
					{
						name: "博文",
						url: "/article"
					},
					{
						name: "首页",
						url: "/",
						active:true,
					},
				],
			};
		},
		mounted: function(){
		},
		methods: {
			abc: function(e){
				console.log(e,"我是父级");
			}
		},
		
	}
</script>