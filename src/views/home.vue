<template>
  <myheader></myheader>
  <div class="home">
  	<div class="my-profile">
  		<div class="basic-info">
      <div class="edit-profile">
         <a v-link="{path:'/setting'}" v-if="showBtns">编辑资料</a>
      </div>
      <div class="top">
  			<span>{{ userInfo.userName }},</span>
        {{ userInfo.profile}}
        </div>
        <div class="body">
          <img :src="userImgUrl" alt="{{ userInfo.userName }}">
          <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
         <span>{{ userInfo.city }}</span>
         </div>
         <div>
         <i class="fa fa-mars" aria-hidden="true" name="sex"></i>
         <i class="fa fa-venus" aria-hidden="true" v-if='judgeSex' name="sex"></i>
         <span>{{ userInfo.sex }}</span>
         </div>
        </div>
  		</div>
  		<div class="relation-info">
           <div>
             <p>关注了<a v-link="{ params:{ userId: userInfo.userId },name:'followees'}"class="point">{{userInfo.concerndPersons.length }}</a>人</p>
             <button type="button" v-if="!showBtns" @click='concern'>我要关注</button>
           </div>
  		</div>
  	</div>
  	<div class="my-read-books">
       <h2>我读过的书</h2>
       <div>
            <a v-for="book in userInfo.read" href="#" :title="book.bookName"
           v-link="{ params:{ bookId: book.bookId },name:'book'}">
                <img :src="book.coverImgUrl">
            </a>
       </div>
    </div>
    <div class="my-want-books">
         <h2>我想读的书</h2>
         <div>
            <a v-for="book in userInfo.want" href="#" :title="book.bookName"
            v-link="{ params:{ bookId: book.bookId },name:'book'}">
               <img  :src="book.coverImgUrl" >
            </a>
         </div>
    </div>
  	<div class="my-books">
        <h2>我拥有的书</h2>
        <div>
        <a v-for="book in userInfo.have" href="#" :title="book.bookName"
        v-link="{ params:{ bookId: book.bookId },name:'book'}">
           <img :src="book.coverImgUrl">
        </a>
        </div>
    </div>
  	<div class="my-comments">
       <mycomments  title="我的书评"></mycomments> 
    </div>
  </div>
  <myfooter></myfooter>
</template>
<script>
export default {
		data () {
           return {
             	userInfo:'',
              myId:localStorage.userId,
              queryUserId:'',
              userImgUrl:localStorage.userImgUrl
           }
		},
		route:{
           data (transition) {
               var self=this;
               this.queryUserId=transition.to.params.userId;
               //this.myId=localStorage.userId;
               console.log("urlId:",this.userId);
               console.log("myId:",this.myId);

               var tempObj={
                   queryUserId:this.queryUserId
               }
               var self=this;
               $.ajax({
                   url:'http://192.168.155.1:8080/Test/userpage',
                   type:'post',
                   data:{
                      queryUserId:JSON.stringify(tempObj)
                   },
                   success:function(data){
                       /*console.log('hwllo');
                       console.log(data.coverImg);*/
                       self.userInfo=data;
                      // self.userImgUrl+=data.coverImg;
                   },
                   error:function(){
  
                   }
               });
           }
		},
		ready () {
              document.title='个人主页';
              var sexIcons=document.getElementsByName('sex');
              if(this.userInfo.sex=='男'){
                 //sexIcons[1].style.display='none';
              }else{
                // sexIcons[0].style.display="none";
              }
		},
		components:{
			'myheader':require('../components/myheader.vue'),
			'myfooter':require('../components/myfooter.vue'),
      'mycomments':require('../components/flowbookcomment.vue')
		},
    computed:{
       'showBtns':function(){
            if(this.queryUserId!==this.myId){
              console.log('false');
              return false;
            }
            console.log('true');
            return true;
       }
    }
	}
</script>
<style scoped>
.home{
   width: 80%;
   margin: 20px auto;
   border:1px solid #ddd;
   border-radius:5px;
}
.home .my-profile{
    width: 90%;
    margin:20px auto;
    position: relative;
}
.home .my-profile .edit-profile{
  position: absolute;
  top:0px;
  right: 0px;
}
.my-profile .edit-profile a{
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    background: #0f88eb;
    font-size: 14px;
    line-height: 30px;
    padding: 5px 10px;
    color: #fff;
}
.home .basic-info img{
   width: 100px;
   height: 100px;
}
.basic-info .top{
}
.basic-info .top>span{
  font-weight: 700;
}
.basic-info .body{
   margin-top: 10px;
}
.basic-info .body>div{
   font-size: 14px;
   margin-top: 15px;
}
.basic-info .body::after{
  content:'';
  display: block;
  clear: both;
}
.basic-info .body img{
  float: left;
  margin-right: 20px;
}
.my-read-books,.my-want-books,.my-books{
  width: 90%;
  margin: 20px auto;
}
.my-read-books>div,.my-want-books>div,.my-books>div{
   margin:30px auto;
   display: flex;
   display: -webkit-flex;
   flex-wrap: wrap;
}
.my-read-books img{
   width: 80px;
   height: 120px;
   margin-left: 30px;
}
.my-want-books img{
   width: 80px;
   height: 120px;
   margin-left: 30px;
}
.my-books img{
   width: 80px;
   height: 120px;
   margin-left: 30px;
}
.my-comments{
  width: 90%;
  margin: 20px auto;
}
.home .relation-info  button{
   border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    background: #0f88eb;
    font-size: 14px;
    line-height: 30px;
    width: 120px;
    color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    font-weight: bold;
}
.relation-info .point{
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 24px;
  color:blue;
  cursor: pointer;
}
</style>