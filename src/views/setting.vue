<template>
	<myheader></myheader>
	<div class="change-user-info-container">
  <form>
	            <div>
	   	    	<label for="username">昵称</label>
	   	    	<input type="text" name="userName" v-model="userInfo.userName">
                </div>

                <div>
	   	    	<label for="sex">性别</label>
	   	    	<i class="fa fa-lg fa-male" aria-hidden="true"></i>
	   	    	<input type="radio" name="sex" value="男" v-model="userInfo.sex">
	   	    	<i class="fa fa-lg fa-female" aria-hidden="true"></i>
	   	    	<input type="radio" name="sex" value="女" v-model='userInfo.sex'>
                </div>

                <div>
	   	    	<label for="">修改密码</label>
	   	    	<input type="password" name="oldPwd" placeholder="当前密码" v-model="inputPwd">
	   	    	<div class="newpassword">
	   	    	<input type="{{ iptType}}" name="newPwd" placeholder="新的密码" v-model="userInfo.newpassword" maxlength="16">
	   	    	<i class="fa fa-lg fa-eye" aria-hidden="true" @click="showPwd"></i>
	   	    	</div>
                </div>
                <div>
	   	    	<label for="address">地址</label>
	   	    	<input type="text" v-model="userInfo.city" maxlength="30">
                </div>

                <div>
	   	    	<label for="profile">一句话简介</label>
	   	    	<input type="text" maxlength="30" v-model="userInfo.profile">
                </div>
     
                <div class="concernd">
	   	    	<label for="">关注的标签</label>
	   	    	<span>(可去除不想关注的标签)</span>
	   	    	<div class="tags">
	   	    	<span v-for="tag in userInfo.tags">{{ tag }}<i @click="delateBookTag" class="fa fa-times-circle" aria-hidden="true" name='booktag'></i></span>
	   	    	</div>
	   	    	</div>

	   	    	<div class="mybook">
	   	    	<label>拥有的书籍</label>
	   	    	<span>(可去除现在没有的书籍)</span>
	   	    	<div class="tags">
	   	    	<span v-for="book in userInfo.have">《{{ book.bookName }}》<i @click="delateBook" class="fa fa-times-circle" aria-hidden="true" name="mybooktag"></i></span>
                </div>
                </div>
                <!--
                <div class="userimg">
                <input type="hidden" v-model="userId" name="userId">
                	   	<label for="">修改头像</label>-->
	   	    			<!--<img :src="userInfo.userImgUrl">
	   	    			<input type="file" accept="image/jpeg,image/gif,image/png" @change="uploadImg" id='filebtn'>
	   	    			<button type="button" @click="mocklClick">修改头像</button>
	   	    			</div>-->
	   	    	<div class="submit">
	   	    		<input type="submit" value="提交" @click="changeInfo">
	   	    	</div>
            </form>
	</div>
	<myfooter></myfooter>
</template>
<script>
    import  biu from 'biu.js'
    var userInfoData={
    	 userImgUrl:'https://sfault-avatar.b0.upaiyun.com/337/270/337270487-574ecf99584f4_huge256',
    	 username:'浴火小青春',
    	 password:'18237812724',
    	 newpassword:'',
    	 sex:'男',
    	 qqnumber:'',
    	 address:'',
    	 userprofile:'',
    	 concerndTags:["文学","历史","小说","童话","故事","科幻","耽美","诗歌"],
    	 mybooks:["活着","西游记","水浒传","红楼梦"]
    }
	export default {
		data () {
             return {
                 userInfo:'',
                 userId:localStorage.userId,
                 iptType:'password',
                 username:localStorage.username,
                 imageUrl:'',
                 inputPwd:'',
                 userImgUrl:localStorage.userImgUrl,
                 hello:10
           }
		},
		route :{
            data () {
               //获取已登录用户ID。如果未登陆，页面跳转主页
               if(!this.jdugeLogin()){
              		this.$route.router.go('/login?redirect='+encodeURIComponent(this.$route.path));
              		return -1;
               }
               var tempObj={
               	  userId:this.userId
               };
               var self=this;
 				       $.ajax({
                   url:'http://192.168.83.1:8080/Test/userinfo',
                   type:'post',
                   data:{
                      userId:JSON.stringify(tempObj)
                   },
                   success:function(data){
                   	    self.userInfo=data;
                        //self.userInfo.userImgUrl=''
                        console.log(data);
                   },
                   error:function(){
  
                   }
               });
            }
		},
		ready (){
			 document.title="个人信息设置";
             var  sexRadioBtns=document.getElementsByName('sex');
             if(sexRadioBtns[0].value===this.userInfo.sex){
             	sexRadioBtns[0].checked=true;
             }else{
             	sexRadioBtns[1].checked=true;
             }
		},
		components:{
			'myheader':require('../components/myheader.vue'),
			'myfooter':require('../components/myfooter.vue')
		},
		methods:{
			 jdugeLogin:function(){
          			if(!this.userId){
               			this.$route.router.go('/login');
               			return false;
          			}
          			return true;
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
             delateBookTag:function(event){
             	var allXIcons=document.getElementsByName('booktag');
             	var e=event.target;
             	var idx=[].indexOf.call(allXIcons,e);
                this.userInfo.tags.splice(idx,1);
             },
             delateBook:function(event){
                var allXIcons=document.getElementsByName('mybooktag');
             	var e=event.target;
             	var idx=[].indexOf.call(allXIcons,e);
                this.userInfo.have.splice(idx,1);
             },
             /*uploadImg:function(e){
                   var files = e.target.files || e.dataTransfer.files;
                   if (!files.length)
                         return;
                   this.createImage(files[0]);
             },
             createImage:function(file){
                    var image = new Image();
                    var reader = new FileReader();
                    var vm = this;
                    reader.onload = function (e) {
                         vm.userInfo.userImgUrl= e.target.result;
                      };
                    reader.readAsDataURL(file);
             },
             mocklClick:function(){
             	  var ipt=document.querySelector('#filebtn');
                  ipt.click();
             },*/
             validate:function(){
             	 for(var item in this.userInfo){
             	 	if(!this.userInfo[item]){
             	 		biu('亲，标*号的都要填哦',{
             	 			type:'warning'
             	 		});
             	 		return false;
             	 	}
             	 }
                 if(this.inputPwd!==this.userInfo.password){
                 	biu('亲，密码输错了，再试试吧',{
                 		type:'warning'
                 	});
                 	return false;
                 }
        	    if(this.userInfo.newpassword.length<6||this.userInfo.newpassword.length>16){
                    biu('密码长度不符合要求，请重新设定',{
                	  type:'warning'
                    });
                   return false;
        	    }
                return true;
             },
             changeInfo:function(){
             	var self=this;
             	this.userInfo.userId=this.userId;
             	if(this.validate()){
                    $.ajax({
                    	url:'http://192.168.83.1:8080/Test/modifyinfo',
                    	type:'post',
                    	data:{
                    	  changeInfo:JSON.stringify(self.userInfo)
                    	},
                    	success:function(data){
                           var flag=JSON.parse(data).ifDuplicate;
                           if(!flag){
                              biu("你的昵称已被占用",{
                                type:'warning'
                              });
                           }else{
                            biu('信息修改成功',{
                           	  type:'success'
                            });
                          }
                    	},
                    	error:function(){

                    	}
                    });

                    
             	}
             },
             cacheInfo:function(){
             	localStorage.username=this.userInfo.username;
             	localStorage.userImgUrl=this.userInfo.userImgUrl;
             	//localStorage.userId='';ss
             }
		}
	}
</script>
<style scoped>
	.change-user-info-container{
		width: 800px;
		margin: 40px auto;
		border:1px solid #ddd;
		border-radius: 5px;
		padding-left: 50px;
		padding-right: 50px;
		padding-top:20px;
	}
	.change-user-info-container form>div{
		margin-top:10px;
	}
	.change-user-info-container input[type='text'],.change-user-info-container input[type="password"]{
    	width: 400px;
    	border-radius: 5px;
    	border: 1px solid rgba(142,122,122,0.8);
    	padding: 5px 5px;
        font-size: 14px;
	}
	.change-user-info-container input[type="password"]{
		text-indent: 10px;
	}
	.change-user-info-container label{
		width: 90px;
		display: inline-block;
		text-align: right;
	}
	.change-user-info-container label::after{
		content: '*';
		color:#ed1c24;
	}
	.change-user-info-container .newpassword{
		margin-left: 98px;
		margin-top:20px;
		position: relative;
	}
	.change-user-info-container .newpassword i{
        position: absolute;
        left: 385px;
        top:5px;
        cursor: pointer;
	}
	.tags{
	      padding:10px 0px;
          margin-left: 98px;
	}
	.tags span{
        background: #ddd;
        padding: 5px 15px;
        line-height: 20px;
        position: relative;
        display: inline-block;
        border-radius: 5px;
        margin-top:5px;
        margin-right: 5px;
	}
	.tags span i{
		font-size: 14px;
		position: absolute;
		top:0px;
		right: 0px;
		cursor:pointer;
	}
	.mybook{
		margin-top:30px;
	}
	.userimg img{
        width: 100px;
        height: 100px;
	}
	.userimg input[type="file"]{
		/*visibility: hidden;*/
	}
	.userimg button{
		display: block;
		margin: 10px 0px 0px 98px;
		border:1px solid #ddd;
		cursor: pointer;
		line-height: 30px;
		border-radius: 5px;
		padding: 0px 15px;
		background: #fff;
		box-shadow: 0 0 5px rgba(0,0,0,.1);
	}
	.userimg button:hover{
		background: #ddd;
	}
	.change-user-info-container .submit{
		margin: 20px 0px  30px  98px;
	}
	.change-user-info-container .submit input[type="submit"]{
		border:1px solid #ddd;
		cursor: pointer;
		border-radius: 5px;
		background: #0f88eb;
		font-size: 14px;
		line-height: 30px;
		width: 120px;
		color: #fff;
		box-shadow: 0 0  5px rgba(0,0,0,.1);
		font-weight: bold;
	}
</style>