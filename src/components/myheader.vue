<template>
	<header class="nav">
	    <div class="nav-logo" v-link="{ path :'/'}">
	    	<!-- <a href="#" title="漂流书单">漂流书单</a> -->
	    </div>
	    <div class="nav-search">
	    	<input type="text" placeholder="搜索书名" v-model="searchKeyWord" @keyup.enter="search">
	    	<button type="button" v-link="{name:'search',query:{book:searchKeyWord}}">点击</button>
	    </div>
		<div class="nav-userInfo">
		    <span @click='showRegisterModal' v-if="!hasLogin">注册</span>
		    <span  @click='showLoginModal' v-if="!hasLogin">登录</span>
		    <div class="dropdown" v-if="hasLogin">
		    <div>
		    	  <img :src="userInfo.userImgUrl" class="head_img">
		          <span>{{userInfo.username}}</span>
		    </div>
		    <ul>
		    	<li><a v-link="{params:{userId:userInfo.userId},name:'user'}">个人主页</a></li>
		    	<li><a v-link="{path:'/notice',name:'notice'}">系统通知</a></li>
		    	<li><a v-link="{ params:{ userId: userInfo.userId },name:'followees'}">关注者</a></li>
		    	<li><a href="#" @click.prevent="logout">退出登录</a></li>
		    </ul>
		    </div>
		</div>
	</header>
			<login v-if="isShowLogin" :isShowLogin.sync='isShowLogin'></login>
			<register v-if="isShowRegister" :isShowRegister='isShowRegister'></register>
</template>
<script>
export default {
	components: {
		"login":require('./login.vue'),
		"register":require('./register.vue')
	},
	data () {
         return {
         	 isShowLogin:false,
         	 isShowRegister:false,
         	 searchKeyWord:'',
         	 userInfo:{
         	 	userImgUrl:'data:image/png;base64,',
         	 	username:localStorage.username,
         	 	userId:localStorage.userId
         	 }
         }
	},
	ready (){
		  var data={
		  	 userId:this.userInfo.userId,
		  	 index:4,
		  	 login:true
		  };
		  if(this.userInfo.userId&&!localStorage.userImgUrl){
		  var self=this;
		  setTimeout(function(){
                       $.ajax({
          					url:'http://192.168.155.1:8080/Test/mainpage',
          					type:'post',
          					data:{
                					index:JSON.stringify(data)
          					},
          					success:function(data){
          						console.log('hello world');
               					console.log(data);
               					self.userInfo.userImgUrl+=data[0].userinfo.coverImg;
               					localStorage.userImgUrl=self.userInfo.userImgUrl;
          					},
          					error:function(){

          					}
         				 });
		  },2500);
		}
	},
	computed:{
        'hasLogin':function(){
        	if(localStorage.userId){
        		 return true;
        	}
        	return false;
        }
	},
	methods:{
        showLoginModal:function(){
           this.$route.router.go('/login?redirect='+encodeURIComponent(this.$route.path));
        },
        showRegisterModal:function(){
            // this.isShowRegister=true;
            this.$route.router.go('/register?redirect='+encodeURIComponent(this.$route.path));
        },
        search:function(){
        	this.$route.router.go('/search?book='+this.searchKeyWord);
        },
        logout:function(){
        	localStorage.clear();
        	this.$route.router.go('/login');
        }
	}
}
</script>
<style scoped>
	.nav{
		 margin: 0 auto;
         height: 50px;
         background: #f6f6f1;
         padding-top:20px;
	}
	.nav>div{
		display: inline-block;
		float: left;
	}
	.nav-logo{
		background:url('../assets/img/logo.png') no-repeat top;
		margin-left: 160px;
		width: 220px;
		height: 60px;
		margin-top:-15px;
		cursor:pointer;
	}
	.nav-search{
		margin-left: 100px;
	}
	.nav-logo a{
		text-indent:-9999px;
	}
	.nav-search input{
		border: 0px;
		border-radius: 5px;
		padding: 10px 10px;
		text-indent: 20px;
		font-size: 14px;
		width: 340px;
	}
	.nav-search button{
		background: url('../assets/img/icon-search.png') no-repeat;
		font-size: 0px;
		-webkit-appearance: none;
		color: transparent;
		border: 0px;
		width: 32px;
		height: 36px;
		cursor: pointer;
	}
	div.nav-userInfo{
		float:right;
		margin-right: 70px;
	}
	.nav-userInfo .dropdown{
	    z-index:99;
	}
	.nav-userInfo .dropdown>ul{
        display: none;
	}
	.nav-userInfo .dropdown:hover >ul{
        display: block;
	}
	.nav-userInfo span{
		cursor: pointer;
	}
	.nav-userInfo  ul{
		list-style-type:none;
		padding:0px;
		margin-top:20px;
		font-size: 14px;
		z-index: 99;
      }
	.nav-userInfo ul li{
		line-height: 20px;
		border-bottom:1px solid #ddd;
		padding:12px 30px;
		background: #f6f6f1;
		text-align: center;
		cursor: pointer;
	}
	.nav-userInfo ul li:last-child{
		border-radius: 5px;
	}
	.nav-userInfo ul li:hover{
		background:rgba(246,241,246,0.43);
	}
	.head_img{
		width: 30px;
		height: 30px;
	}
</style>