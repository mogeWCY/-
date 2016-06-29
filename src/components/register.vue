<template>
	<div class="register">
	    <div class="register-title">
	    	<h2>加入漂流书单</h2>
            <i class="fa fa-times" aria-hidden="true" @click='closeDialog'></i>
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
	methods:{
		sendInfo:function(){
			var userData={
					username:this.username,
					useremail:this.useremail,
					password:this.password
			};
            if(this.validate()){//如果格式正确
                // ajax 提交，
                $.ajax({
                	url:'',
                	dataType:'json',
                	data:{userData:userData},
                	success:function(data){

                	},
                	error:function(){

                	},
                	beforeSend:function(){

                	}
                });
                if('hello'){//验证账户，正确。做出相应的跳转
                    biu('success');
                }else{//账户错误
                	biu('账号或密码错误',{
                        type:'warning'
                	});
                }
            }else{
                // 
            }
		},
        validate:function(){
        	if(this.validateEmail()&&this.validatePwd()){
        		return true;
        	}
        	return false;
        },
        closeDialog:function(){
           this.$parent.isShowRegister=false;
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
	},
	props:['isShowRegister']
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
 	background: rgba(31,31,31,0.12);
 	z-index: 1;
 }
</style>