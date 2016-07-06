<template>
	<div class="register">
	    <div class="register-title">
	    	<h2>加入漂流书单</h2>
           <!-- <i class="fa fa-times" aria-hidden="true" @click='closeDialog'></i>-->
	    </div>
	    <div class="register-name">
	    	<input type="text" placeholder="昵称" class="register-input" v-model="username">
	    </div>
		<div class="register-email">
			<input type="email" name='username' placeholder="邮箱" class="register-input" v-model="useremail">
		</div>
		<div class="register-pwd">
			<input type="{{ iptType}}" name="password" placeholder="密码（6位~16位之间）" class="register-input"
			v-model="password">
		    <i class="fa fa-lg fa-eye" aria-hidden="true" @click='showPwd'></i>
		</div>
		<div class="register-btn">
			<button type="button" @click='sendInfo'>注册</button>
		</div>
	</div>
	<div class="modal"></div>
</template>
<script>
import biu from 'biu.js'
export default {
	data () {
		return {
		   username:'',
           useremail:'',
           password: '',
           iptType:'password'
		}
	},
  ready (){
        document.title="加入漂流书单";
  },
	methods:{
		sendInfo:function(){
			       var userData={
					           username:this.username,
					           useremail:this.useremail,
					           password:this.password
			             };
             var self=this;
             if(this.validate()){//如果格式正确
                        var tempObj={
                            username:this.username,
                            password:this.password,
                            useremail:this.useremail
                        };
                   
                // ajax 提交，
                     $.ajax({
                	       url:'http://172.21.185.3:8080/Test/enroll',
                         type:'post',
                	       data:{
                             userData:JSON.stringify(tempObj)
                         },
                	       success:function(data){
                                    console.log(data);
                                    if(!data.exist){

                                           localStorage.username=self.username;
                                           localStorage.userId=data.userId;
                                           self.$route.router.go('/setting');
                                    }else{
                                          biu('用户名已被注册，请重新填写',{
                                              type:'warning'
                                          });
                                    }
                	               },
                	       error:function(){
                            console.log("注册页错误");
                	       }
                    });
            }
		},
    validate:function(){
        	if(this.validateEmail()&&this.validatePwd()){
        		return true;
        	}
        	return false;
        },
    showPwd:function(){
           if(this.iptType=='text'){
                this.iptType='password';
                return false;
            }
           if(this.iptType=='password'){
                this.iptType='text';
                return false;
           }
        },
    validateEmail:function(){
        	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        	if (filter.test(this.useremail)) {// 邮箱格式正确
                   return true;
             }
             biu('邮箱格式错误',{
                 type:'warning'
             });
               return false;
    },
    validatePwd:function(){
        	var len=this.password.length;
        	if(len<6||len>16){
                biu('密码长度不符合要求，请重新设定',{
                	type:'warning'
                });
                return false;
        	}
        	return true;
    }
	}
}
</script>
<style src="../assets/css/biu.css"></style>
<style scoped>
.register{
	border: 1px solid #cbcbcb;
 	width: 300px;
 	position: fixed;
  top:20vh;
  margin-left: -150px;
  left: 50vw;
  z-index: 999999;
 	box-shadow: 0 0 15px 0 rgba(0,0,0,.3);
 	border-radius: 5px;
 	background: #fff;
}
 .register-title{
    text-align: center;
 }
 .register-title h2{
 	display: inline-block;
 }
 .register-title i{
    float: right;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px;
 }
 .register-name,.register-pwd,.register-email{
 	width: 100%;
 	text-align: center;
 }
 .register-pwd{
 	margin-top: 20px;
 	position: relative;
 }
 .register-email{
 	margin-top: 20px;
 }
 .register-pwd i{
 	position: absolute;
    top:5px;
    right: 50px;
    cursor: pointer;
 }
 .register-input{
 	width: 200px;
 	border-radius: 5px;
 	border: 1px solid rgba(142,122,122,0.8);
 	padding: 5px 5px;
 	text-indent: 10px;
 }
 .register-btn{
     margin: 20px 0px;
     text-align: center;
 }
 .register-btn button{
 	-webkit-appearance: none;
 	border: 0px;
 	background: #0f88eb;
 	width: 220px;
 	color: #fff;
 	cursor: pointer;
 	height: 30px;
 	border-radius: 5px;
 	font-weight: bold;
 }
  .modal{
  	position: fixed;
  	top: 0px;
  	left: 0px;
 	width: 100vw;
 	height: 100vh;
 	background:url('https://pixabay.com/static/uploads/photo/2013/06/10/00/30/sunset-123926__180.jpg');
  background-size:cover;
 	z-index: 1;
 }
</style>