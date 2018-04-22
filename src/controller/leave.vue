<template>
	<el-container>
		<div class="container" v-loading.fullscreen.lock="!show" element-loading-text="拼命加载中" element-loading-background="rgba(255, 255, 255, 0.5)">
			<div class="leave">
				<!--<el-input type="textarea" :rows="5" resize="none" placeholder="请输入想您说的话..." v-model="content">-->
				<!--</el-input>-->
        <!--DIV输入框-->
        <div class="editor" v-html="content" @keyup="setContent($event)" contenteditable></div>
        <div class="tools">
					<i @click="setB" class="iconfont">&#xe6fe;</i>
					<i @click="setURL" class="iconfont">&#xe63e;</i>
					<i @click="setFACE" class="iconfont">&#xe659;</i>
					<i @click="setREFER" class="iconfont">&#xe65d;</i>
          <ul v-show="showFACE" class="qqbq">
            <li v-for="i in qqbq" ><img @click="inpFACE(i)" :src="'../static/home/img/qqbq/'+i+'.gif'" /></li>
          </ul>
					<i @click="setIMG" class="iconfont">&#xe791;</i>
					<i @click="setCODE" class="iconfont">&#xe6b9;</i>
					<el-button @click="postLeave" class="r">提交留言</el-button>
				</div>
			</div>
			<div class="leave-content">

				<ul class="l">
					<li v-for="vo in list">
						<div class="l img"><img :src="vo.head" /></div>
						<div class="l content">
							<h4>{{vo.name || "匿名"}}</h4>
							<p v-html="vo.content"></p>
							<span>{{vo.time}} 来自{{vo.region}} {{vo.os}} {{vo.browser}} {{vo.lang}}<!--<a href="javascript:;">回复</a>--></span>
							<i class="iconfont">&#xe6f1;{{vo.id}}</i>

							<!--<div class="reply">-->
								<!--<h4>姓名</h4>-->
								<!--<p><a href="">@博主</a> 这是留言这是留言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留言这是留<br />言这是留言这是留言这是留这是留言这是留言这是留言这是留</p>-->
								<!--<span>2015-15-15 12:23:12 来自xxxxxx x </span>-->
							<!--</div>-->

						</div>
					</li>

          <el-alert v-show="list.length==0" title="没有数据" type="info" description=" " :closable="false" show-icon></el-alert>



				</ul>



					<div class="hot l">
						<div class="title"><h1 class="l">人气文章</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in init.article_a"> <router-link :to="'/content/'+vo.id">{{vo.title}}</router-link> <span class="r">{{vo.a}}</span></li>
							</ul>
						</div>
					</div>

					<div class="hot l">
						<div class="title"><h1 class="l">热门文章</h1> <router-link class="r" to="/">>更多</router-link></div>
						<div class="content">
							<ul>
								<li v-for="vo,i in init.article_z"> <router-link :to="'/content/'+vo.id">{{vo.title}}</router-link> <span class="r">{{vo.z}}</span></li>
							</ul>
						</div>
					</div>

				</div>

      <div class="page" v-show="list.length>0">
        <el-pagination background :page-size="page.size" @current-change="getPage" layout="prev, pager, next"  :total="page.count"> </el-pagination>
      </div>



    </div>
	</el-container>
</template>

<script>
	export default {
		props: ['init'],
		data() {
			return {
        show:false,
        page:{
          count:0,
          size:10
        },
				content: "",
        content2: "",
        showFACE: false,
        qqbq:[],
        list:[]
			}
		},
		created() {
		  for(var i=1;i<=74;i++){
        this.qqbq.push(i);
      }
			this.$emit("SetHeader", true);
			this.$emit("SetScrollTop");
			sessionStorage['title'] = document.title = "留言 - "+(this.init.info.nick || this.init.info.name)+ "的博客"
      this.getPage(1);
		},
		methods: {
      setContent:function($e){//模拟双向绑定
        this.content2 = $e.target.innerHTML;
      },
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
      //加粗
			setB: function(){
          this.$prompt('请输入加粗文字',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            showClose:false
          }).then(({ value }) => {
            this.content = this.content2 = this.content2+"<b>"+value+"</b>";
          });
			},
      //连接
			setURL: function(){
        this.$prompt('请输入URL', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showClose:false
        }).then(({ value }) => {
          this.content = this.content2 = this.content2+'<a href="'+value+'">'+value+'</a>';
        });

			},
      //显示表情
			setFACE: function(){
				this.showFACE = !this.showFACE;
			},
      //表情
      inpFACE: function(i){
        this.content = this.content2 = this.content2+"<img src=\"/static/home/img/qqbq/"+i+".gif\">";
      },
      //引用
			setREFER: function(){
        this.$prompt('请输入引用内容', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType:"textarea",
          showClose:false
        }).then(({ value }) => {
          this.content = this.content2 = this.content2+"<blockquote>"+value+"</blockquote>";
        });
      },
      //图片
			setIMG: function(){
        this.$prompt('请输入图片地址', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showClose:false,
        }).then(({ value }) => {
          this.content = this.content2 = this.content2+'<img src="'+value+'" />';
        });
			},
      //code
			setCODE: function(){
        this.$prompt('请输入代码内容', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType:"textarea",
          showClose:false
        }).then(({ value }) => {
          this.content = this.content2 = this.content2+"<pre>"+value+"</pre>";
        });
			},
      postLeave:function () {
        var self = this;
        if(self.content2.length<10){
          self.$message.error('留言内容不得少于10个字');
          return;
        }
        this.$emit("posts",{
          url:'/api/leave/add.html',
          data:{
            content:this.content2
          },
          success:function(e){
            self.showFACE = false;
            if(e.status==200){
                if(e.data.code==1){
                  self.content = "";
                  self.content2 = "";
                  self.$message.success("留言成功");
                  sessionStorage['leave_1'] = "";
                  self.getPage(1);
                }else{
                  self.$message.error(e.data.msg);
                }
            }else{
              self.$message.error('服务器异常 状态码' + e.status);
            }
          },error:function(e){
            self.$message.error('服务器异常');
          }});

      },
      getPage(p) { //切换页面
        var self = this;
        self.show = false;
        var name = 'leave_'+p;
        if (sessionStorage[name]){
          var data  = JSON.parse(sessionStorage[name]);
          self.show = true;
          self.list = data.list;
          self.page.count = data.count;
        }else{
          this.$emit("gets",{url:'/api/leave/index.html?p='+p,success:function(e){
              if(e.status==200){
                self.show = true;
                self.list = e.data.list;
                self.page.count = e.data.count;
                sessionStorage[name] = JSON.stringify(e.data);
              }
            },error:function(e){
              self.$message.error('服务器异常');
            }});
        }
      }
		}
	}
</script>

<style>

</style>
