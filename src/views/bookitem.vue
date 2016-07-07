<template>
<myheader></myheader>
<div class="container">
	<div class="book-name">
		<h1>{{bookInfo.bookName}}</h1>
	</div>
	<div class="book-info">
		<img :src="bookInfo.coverImgUrl" class="book-cover">
    <div class="book-detail">
		    <p>作者：{{ bookInfo.author }}</p>
		    <p>出版社：{{ bookInfo.press }}</p>
		    <p>出版日期：{{ bookInfo.publicationDate }}</p>
        <p>综合评价:<bookscore :score="bookInfo.bookScore"></bookscore>{{ bookInfo.bookScore }}分</p>
        <p class="tags">所属标签:<span v-link="{ params:{tagname:tag},name:'tag'}" v-for="tag in bookInfo.bookTags" track-by="$index">{{ tag }}</span></p>
    </div>
    <div class="book-judge" @click="judge">
        <button type="button" :class="judgeBtnClass.wantBtn" data-type="want">想读</button>
        <button type="button" :class="judgeBtnClass.readBtn" data-type="read">读过</button>
        <button type="button" :class="judgeBtnClass.haveBtn" data-type="have">拥有</button>
    </div>
  </div>
  <div class="profile">
        <h2>内容简介</h2>
        <p v-for="s in bookSentenceArr">{{ s }}</p>
        <h2>作者简介</h2>
        <p v-for="s in authorSentenceArr">{{ s }}</p>
	</div>
  <div class="comment">
  <h2>热门评价</h2>
       <div>
      <comments :comments='comments'></comments>
       </div>
       <commenteditor></commenteditor>
  </div>
</div>
<myfooter></myfooter>
</template>
<script>
import biu from 'biu.js'
export default {
	 data () {
       var bookComments=[
         {
            "content":"《活着》这本书是个好书啊",
            "id":1,
            "time":"2016-06-22",
            "replyto":"",
            "userName":"小明",
            "userId":123,
            "userImgUrl":'https://sfault-avatar.b0.upaiyun.com/337/270/337270487-574ecf99584f4_huge256',
            "son":[
                    {
                      "content":"1楼沙发",
                      "id":3,
                      "time":"2016-06-23",
                      "replyto":"小明",
                      "userName":"小红",
                      "userId":124,
                      "userImgUrl":"https://pic1.zhimg.com/b1df50c64_m.jpg",
                      "son":[
                            {
                              "content":"沙发什么沙发，水货",
                              "id":5,
                              "time":"2016-06-24",
                              "replyto":"小红",
                              "userName":"小亮",
                              "userId":125,
                              "userImgUrl":'https://pic1.zhimg.com/290ed4e12bf2147dd040cf7f7ddf2d58_m.jpg',
                              "son":[],
                              "pid":3,
                              "type":1
                            },
                            {
                              "content":"别乱刷存在感",
                              "id":6,
                              "time":"2016-06-24",
                              "replyto":"小红",
                              "userName":"阿狸",
                              "userId":126,
                              "userImgUrl":"https://pic4.zhimg.com/799df728d7d9e8e39988e2d49652b9eb_m.png",
                              "son":[],
                              "pid":3,
                              "type":1
                            }
                            ],
                      "pid":1,
                      "type":1
                    }
                    ],
            "pid":0,
            "type":0
         },
         {
            "content":"还可以吧 ",
            "id":2,
            "time":"2016-06-22",
            "replyto":"",
            "userName":"2楼",
            "userId":127,
            "userImgUrl":"https://pic3.zhimg.com/e231cbdea_m.jpg",
            "son":[
                     {
                        "content":"可以",
                        "id":4,
                        "time":"2016-06-23",
                        "replyto":"ssss",
                        "userName":"pang",
                        "userId":128,
                        "userImgUrl":"https://pic2.zhimg.com/b8122761a03db2d4f31ca7608f02030d_m.jpg",
                        "son":[],
                        "pid":2,
                        "type":1
                     }
                  ],
            "pid":0,
            "type":0
           }
         ];
         return {
         	bookId:'',
         	bookInfo:'',
          userId:localStorage.userId||'',
          username:localStorage.username,
          btnStatus:'',
          comments:bookComments
         }
	 },
	 ready (){
         document.title="书籍详情页";
     },
	 route:{
	 	data (transition) {
             var self=this;
             this.bookId=transition.to.params.bookId;
             var obj={
                  bookId:this.bookId,
                  userId:this.userId
             };
             $.ajax({
                 url:'http://192.168.83.1:8080/Test/bookIntroduction',
                 type:'post',
                 dataType:'json',
                 data:{
                     data:JSON.stringify(obj)
                 },
                 success:function(data){
                    self.bookInfo=data[0];
                    self.btnStatus=data[1];
                    console.log("书籍详情页");
                    console.log(self.btnStatus);
                 },
                 error:function(data){
                    console.log("书籍详情页");
                 }
             });
             /*$.ajax({
                url:'',
                type:'post',
                data:{
                    data:JSON.stringify(obj)
                },
                success:function(data){
                     //this.comments=data;
                },
                error:function(){

                }
             });*/
	 	}
	 },
	 components:{
	 	'myheader':require('../components/myheader.vue'),
	 	'myfooter':require('../components/myfooter.vue'),
    'bookscore':require('../components/staticstars.vue'),
    'commenteditor':require('../components/commenteditor.vue'),
    'comments':require('../components/comment.vue')
	 },
   computed:{
     bookSentenceArr:function(){
       return this.bookInfo.bookProfile.split('。');
     },
     authorSentenceArr:function(){
       return  this.bookInfo.authorProfile.split('。');
     },
     judgeBtnClass:function(){
              var  tempClassObj={
                  wantBtn:{
                      'btn':true,
                      'gray':this.btnStatus.want //false
                    },
                  readBtn:{
                      'btn':true,
                      'gray':this.btnStatus.read  //false
                   },
                  haveBtn:{
                      'btn':true,
                      'gray':this.btnStatus.have  //true
                  }
             };
            return tempClassObj;
     }
   },
   methods:{
      jdugeLogin:function(){
          if(!this.userId){
               //var redirect=
               this.$route.router.go('/login?redirect='+encodeURIComponent(this.$route.path));
               return false;
          }
          return true;
      },
      judge:function(event){
         if(event.target.tagName.toLowerCase()=='button'){
             var type=event.target.dataset.type;
             if(!this.jdugeLogin()){
               return -1;
             }
             switch (type) {
                case 'want' :this.wantAction();break;
                case 'read' :this.readAction();break;
                case 'have' :this.haveAction();break;
                default:console.log('hello world');
             }
         }
      },
      wantAction:function(){
          //获取userId , bookId
          //ajax 发送数据
          if(this.judgeBtnClass.wantBtn['gray']){
              return false;
          }
          var jdUrl="http://search.jd.com/Search?keyword="+this.bookInfo.bookName+"&enc=utf-8&wq="+
          this.bookInfo.bookName+"&pvid=1pdif3qi.dk6wya";
          var template="那快来京东看看有木有<a style='font-size:22px;color:red' target='_blank' href='" +jdUrl+ "'>"+this.bookInfo.bookName+"</a>吧";
          var tempObj={
              userId:this.userId,
              bookId:this.bookId,
              typeId:2
          };
          var self=this;
          $.ajax({
              url:'http://192.168.83.1:8080/Test/choosetrend',
              type:'post',
              data:{
                  data:JSON.stringify(tempObj)
              },
              success:function(data){
                   self.btnStatus.want=true;
                   console.log(data);
                   console.log(self.btnStatus.want);
                   biu(template,{
                        type:'success'
                   });
              },
              error:function(){
                  
              }
          });
      },
      readAction:function(){
         var self=this;
         if(this.judgeBtnClass.readBtn['gray']){
           return false;
         }
         var tempObj={
             userId:this.userId,
             bookId:this.bookId,
             typeId:3
         };
         var self=this;
         $.ajax({
             url:'http://192.168.83.1:8080/Test/choosetrend',
             type:'post',
             data:{
               data:JSON.stringify(tempObj)
             },
             success:function(){
                 self.btnStatus.read=true;
                 biu('既然读过了，快点留下你的评价吧',{
                      type:'success'
                  });
             },
             error:function(){

             }
         });
      },
      haveAction:function(){
         if(this.judgeBtnClass.haveBtn['gray']){
           return false;
         }
        var tempObj={
            userId:this.userId,
            bookId:this.bookId,
            typeId:1
        };
        var self=this;
        $.ajax({
           url:'http://192.168.83.1:8080/Test/choosetrend',
           type:'post',
           data:{
               data:JSON.stringify(tempObj)
           },
           success:function(data){
                self.btnStatus.have=true;
                biu('好的，知道你有这本书了',{
                      type:'success'
                });
           },
           error:function(){

           }
        });
        // this.judgeBtnClass.haveBtn['gray']=true;
      },
      showComments:function(data){
             data.forEach(function(item){
                 
             });
      }
   }
}
</script>
<style scoped>
.container{
   width: 80%;
   margin: 40px auto;
   border:1px solid #ddd;
   border-radius:10px;
   padding-left: 30px;
   padding-right: 30px;
}
.container h2{
   border-bottom: 1px solid #ddd;
   padding-bottom:20px;
}
.book-name{
  /*padding-left: 50px;*/
}
.book-info{
  border:1px solid #ddd;
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
}
.book-info .book-cover{
   float: left;
}
.book-info img{
   width: 120px;
   height: 150px;
}
.book-info .book-detail{
  float: left;
  text-align:left;
}
.book-info::after{
  content: "";
  display: block;
  clear: both;
}
.book-info .tags span{
    cursor:pointer;
    padding: 5px 10px;
    font-size: 12px;
    background: #f5f5f5;
    margin: 5px;
}
.book-judge{
  float:left;
  display: flex;
  display:-webkit-flex;
  flex-direction: column;
  height: 100px;
  justify-content:space-between;
  margin-left: 450px;
  position: absolute;
  top:50%;
  margin-top:-50px;
}
.book-judge .btn{
    cursor:pointer;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: #0f88eb;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    padding:5px 10px;
}
.book-judge .gray{
  background: rgba(213,218,222,0.84);
  cursor:auto;
}
.profile {
   /*padding-left:30px;*/
}
.profile p{
   text-indent: 30px;
   margin-top:8px;
   font-size: 14px;
}
</style>