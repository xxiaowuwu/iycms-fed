<template>
	<el-container>
		<div class="container">
			<el-row>
				<el-col :span="8" v-for="(o, index) in 10" :key="o" :offset="index > 0 ? 3 : 0">
					<el-card :body-style="{ padding: '0px' }">
						<img src="/static/home/img/article-li.jpg" class="image">
						<div style="padding: 14px;">
							<span>好吃的汉堡</span>
							<div class="bottom clearfix">
								<time class="time">2017-08-15</time>
								<el-button type="text" class="button">操作按钮</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</el-container>
</template>
<script>
	export default {
		data() {
			return {
				currentDate: new Date()
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

</style>