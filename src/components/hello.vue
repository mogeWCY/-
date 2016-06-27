<template>
	<span class="a">{{ message }}</span>
</template>
<script>
export default {
	data () {
		return {
			message:'你好啊，今天天气不错 '
		}
	}
}
</script>
<style>
.a{
	color:red;
	border: 1px solid red;
	display: block;
	margin-top:100px;
	font-size: 40px;
}
</style>