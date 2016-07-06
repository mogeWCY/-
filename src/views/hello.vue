<template>
<form action="http://172.21.185.2:8080/example_mysql/rest/upload/image" method="post" enctype="multipart/form-data" >  
        <p>  
            文件 :<input type="file" name="file"/><br />  
            用户名: <input type="text" name="username"/><br />  
        </p>  
        <!--<input type="hidden" value="123" name="userId">-->
        <input type="submit" value="上传">
        </form>  
</template>
<script>
export default {
	methods:{
		changeInfo:function(event){
			event.preventDefault();
			console.log('hello world');
		}
	}
}
</script>