<template>
	<button type="button" @click="getData">点击</button>
</template>
<script>
            var  data={
                 useremail:"234567@163.com",
                 password:"123456"
            };
            var userData=JSON.stringify(data);
	export default {
		 methods:{
             getData:function(){
             	  $.ajax({
                    url:'http://172.24.242.2:8080/Test/login',
                    dataType:'json',
                    contentType: 'application/json',
                    data:{
                    	userData:userData
                    },
                    type:'post',
                    success:function(data){
                        console.log(data);
                    },
                    error:function(){
                        console.log('error');
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