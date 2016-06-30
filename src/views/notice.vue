<template>
<myheader></myheader>
<div class="notice">
   <h2>系统消息</h2>
   <div v-for="notice in notices" class="notice-item">
   	   <a v-link="{params:{userId:notice.noticeId},name:'user'}">{{ notice.userName }}</a>
   	   <span>请求获取你的联系方式与您换书</span>
       <span>发送于{{ notice.time }}</span>
   	   <button type='button' class="btn" @click="agree" data-time="{{notice.time}}">同意</button>
   	   <button type="button" class="btn" @click="refuse" data-time="{{notice.time}}">拒绝</button>
   </div>
</div>
<myfooter></myfooter>
</template>
<script>
var notices=[
   {
     noticeId:122333,
     userId:122222,
     userName:'小雨',
     time:'2016/6/28 05:30'
   },
   {
    noticeId:122233,
   	userId:122223,
   	userName:'小明',
   	time:'2016/6/28 10:20'
   }
];
import biu from 'biu.js'
export  default{
	 data () {
         return {
         	notices:notices
         }
	 },
   components:{
     	'myheader':require('../components/myheader.vue'),
     	'myfooter':require('../components/myfooter.vue')
   },
   methods:{
     agree:function(event){
         biu('hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world');//他人的信息
         var noticeTime=event.target.dataset.time;
         this.delNoticeByTime(noticeTime);
     },
     refuse:function(evnet){
         var  noticeTime=event.target.dataset.time;
         this.delNoticeByTime(noticeTime);
     },
     delNoticeByTime:function(noticeTime){
        var noticeId;
         notices.forEach(function(item){
             if(noticeTime===item.time){
                  noticeId=item.noticeId;
                  return -1;
             }
         });
        /*   把noticeID发送过去
         $.ajax({
            url:'',
            type:'post',
            data:{'noticeId':noticeId},
            success:function(){
             
            },
            error:function(){
               biu('删除失败，请重新删除',{
                 type:'warning'
               })
            }
         });
         */
     }
   }
}
</script>
<style scoped>
.notice {
	width: 60%;
	margin:20px auto;
	border:1px solid #ddd;
	border-radius: 5px;
}
.notice h2{
	border-bottom: 1px solid #ddd;
	padding-bottom: 10px;
}
.notice .notice-item{
  margin-top: 40px;
  width: 90%;
  margin : 0 auto;
}
.btn{
   border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    background: #0f88eb;
    font-size: 14px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
}
.notice-item a{
  color: blue;
}
</style>