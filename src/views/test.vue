<template>
	<button type="button" @click="getData">点击</button>
</template>
<script>
            var  userData={
                 useremail:"234567@163.com",
                 password:123456
            };
	export default {
		 methods:{
             getData:function(){
             	  $.ajax({
                    url:'http://172.24.242.2:8080/login',
                    dataType:'text',
                    type:'post',
                    data:{userData:userData},
                    success:function(data){
                        console.log(data);
                    },
                    error:function(){
                        console.log('hello');
                    },
                    beforeSend:function(){
                        //发送请求前调用
                    }
                });
             }
		 }
	}
</script>
<style scoped>
</style>