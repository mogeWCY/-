<template>
  <myheader></myheader>
	<div class="guess">
		<h2>标签：{{ tag }}</h2>
    <button type="button" class="btn concern" v-if="concernFlag" @click="changeConcern">取消关注</button>
    <button type="button" class="btn no-concern" v-else @click="changeConcern">关注</button>
    <h3>此标签下共有相关书籍 {{ booktotals}} 本</h3>
		<div class="guess-like-books">
			 <div class="book"  v-for="book in books" >
                 <div class="book-cover">
                 	 <a v-link="{ params:{ bookId: book.bookId },name:'book'}">
                 	 	<img :src="book.coverImgUrl" >
                 	 </a>
                 </div>
                 <div class="book-info">
                 	 <a v-link="{ params:{ bookId: book.bookId },name:'book'}">{{ book.bookName }}</a>
                 	 <div class="score">
                 	      评分：
                 	 	 <bookscore :score="book.bookScore"></bookscore>
                 	 	 {{book.bookScore}}
                 	 	 分
                 	 </div>
                 	 <p class="book-author">作者：{{ book.author }}</p>
                 	 <p class="book-tags">标签{{ book.bookTags }}</p>
                 </div>
                 <div class="book-comment">
                 	 <p>{{ book.comment }}</p>
                 </div>
			 </div>
		</div>
	</div>
  <div class="more-info">
  <button type="button">查看更多</button>
  </div>
  <myfooter></myfooter>
</template>
<script>
   export default {
   	  data () {
   	  	return {
   	  		books:'',
          tag:'',
          userId:localStorage.userId||'',
          concernFlag:false,
          login:(localStorage.userId)?true:false
   	  	}
   	  },
      ready() {
           document.title="标签详情";
      },
      route:{
          data (transition) {
             var tagname=transition.to.params.tagname;
             this.tag=decodeURIComponent(tagname);
             var obj={
                 'tagName':this.tag,
                 'userId':this.userId,
                 'login':this.login
             };
             // 获取用户信息,userInfo
             // 获取标签信息,tagBooksData
             var self=this;
             $.ajax({
                  url:'http://172.21.185.3:8080/Test/labelsearch',
                  type:'post',
                  data:{
                     tagName:JSON.stringify(obj)
                  },
                  success:function(data){
                          self.books=data.splice(0,data.length-1);
                          self.concernFlag=data[data.length-1].status;
                          console.log("标签详情");
                          console.log(data);
                  },
                  error:function(){
                     console.log("标签详情出错");
                  }
             })
          }
      },
   	  components:{
   	  	 'bookscore':require('../components/staticstars.vue'),
         'myheader' :require('../components/myheader.vue'),
         'myfooter' :require('../components/myfooter.vue')
   	  },
      computed:{
         booktotals:function(){
            return this.books.length;
         }
      },
      methods:{
      jdugeLogin:function(){
          if(!this.userId){
               this.$route.router.go('/login');
               return false;
          }
          return true;
       },
        changeConcern:function(){
           if(!this.jdugeLogin()){
              this.$route.router.go('/login?redirect='+encodeURIComponent(this.$route.path));
              return -1;
           }
           var self=this;
           var tempObj={
               userId:this.userId,
               tagName:this.tag,
               status:this.concernFlag
           };
            $.ajax({
                url:'http://172.21.185.3:8080/Test/choosetag',
                type:'post',
                data:{
                    data:JSON.stringify(tempObj)
                },
                success:function(data){
                      self.concernFlag=!self.concernFlag;
                },
                error:function(){
                      console.log('error');
                }
           });
        }
      }
    }
</script>
<style scoped>
 .guess{
	 width: 630px;
	 margin: 20px auto;
 }
 .guess>h2{
    border-bottom: 1px solid #ddd;
 }
 .btn{
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
 }
 .no-concern{
   color: #fff;
   background: #0f88eb;
 }
 .concern{
    background: #eee;
    color: #888;
 }
 .guess-like-books{
 	display: flex;
 	display: -webkit-flex;
 	flex-wrap: wrap;
 	justify-content: space-between;
 }
 .guess-like-books .book{
 	width: 100%;
  border-bottom:1px dotted #ddd;
 }
 .book .book-cover{
 	float: left;
 	margin-right: 20px;
 }
 .guess .book-cover img{
 	width: 67px;
	height: 97px;
 }
 .guess .book-info a{
 	color:#3377aa;
 }
 .more-info{
    width: 300px;
    margin: 20px auto;
 }
 .more-info button{
    border:1px solid #ddd;
    width: 250px;
    line-height: 32px;
    cursor:pointer;
    border-radius:5px;
    background: #0f88eb;
    color: #fff;
 }
</style>