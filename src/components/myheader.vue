<template>
	<header class="nav">
	    <div class="nav-logo" v-link="{ path :'/'}">
	    	<!-- <a href="#" title="漂流书单">漂流书单</a> -->
	    </div>
	    <div class="nav-search">
	    	<input type="text" placeholder="搜索书名">
	    	<button type="button">点击</button>
	    </div>
		<div class="nav-userInfo">
		    <span @click='showRegisterModal'>注册</span>
		    <span  @click='showLoginModal'>登录</span>
		</div>
	</header>
			<login v-if="isShowLogin" :isShowLogin='isShowLogin'></login>
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
         	 isShowRegister:false
         }
	},
	methods:{
        showLoginModal:function(){
             this.isShowLogin=true;
             console.log(this.isShow);
        },
        showRegisterModal:function(){
             this.isShowRegister=true;
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
		border: 1px solid;
	}
	div.nav-userInfo{
		float:right;
		margin-right: 30px;
	}
	.nav-userInfo span{
		cursor: pointer;
	}
</style>