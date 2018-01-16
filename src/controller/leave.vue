<template>
	<el-container>
		<div class="container">
			<div class="leave">
				<el-input type="textarea" :rows="5" resize="none" placeholder="请输入想您说的话..." v-model="content">
				</el-input>
				
				<div class="tools">
					<i class="iconfont">&#xe6fe;</i>
					<i class="iconfont">&#xe63e;</i>
					<i class="iconfont">&#xe659;</i>
					<i class="iconfont">&#xe65d;</i>
					<i class="iconfont">&#xe791;</i>
					<i class="iconfont">&#xe6b9;</i>
					<el-button class="r">提交留言</el-button>
				</div>
			</div>
		</div>
	</el-container>
</template>
<script>
	export default {
		data() {
			return {
				content: null
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
			}
		}
	}
</script>

<style>
	.leave{
		padding: 20px;	
		background: #FFFFFF;
		overflow: hidden;
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
	
</style>