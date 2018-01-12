<template>
	<el-container>
		<div class="container">
			<el-row :gutter="20">
				<el-col :span="16">
					<div class="grid-content bg-purple">2222222
						<p><a @click="setabc">abdddd</a></p>
						
						2222222</div>
				</el-col> 
				<el-col :span="8">
					<div class="grid-content bg-purple-light">22222222222</div>
				</el-col>
			</el-row>
		</div>
	</el-container>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		created(){
			this.$emit("SetHeader",true);
		},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>