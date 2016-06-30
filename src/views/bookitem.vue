<template>
<myheader></myheader>
<div class="container">
	<div>
		<h1>{{bookInfo.bookName}}</h1>
	</div>
	<div class="book-info">
		<img :src="bookInfo.coverImgUrl" class="book-cover">
    <div class="book-detail">
		    <p>作者：{{ bookInfo.author }}</p>
		    <p>出版社：{{ bookInfo.press }}</p>
		    <p>出版日期：{{ bookInfo.publicationDate }}</p>
        <p>综合评价:<bookscore :score="bookInfo.bookScore"></bookscore>{{ bookInfo.bookScore }}分</p>
    </div>
    <div class="book-judge">
        <button type="button">想读</button>
        <button type="button">读过</button>
        <button type="button">拥有</button>
    </div>
  </div>
  <div>
        <h2>内容简介</h2>
        <p>{{ bookInfo.bookProfile }}</p>
        <h2>作者简介</h2>
        <p>{{bookInfo.authorProfile}}</p>
	</div>
</div>
<myfooter></myfooter>
</template>
<script>
export default {
	 data () {
	 	 var bookInfo={
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookScore:8.6,
          	bookProfile:"《活着(新版)》讲述了农",
          	authorProfile:"当代著名作家",
          	tags:['文学',"诗歌","童话"]
	 	 };
         return {
         	name:'wcy',
         	bookId:'',
         	bookInfo:bookInfo
         }
	 },
	 ready (){
         document.title="书籍详情页";
     },
	 route:{
	 	data (transition) {
             var id=transition.to.params.bookId;
             this.bookId=id;
	 	}
	 },
	 components:{
	 	'myheader':require('../components/myheader.vue'),
	 	'myfooter':require('../components/myfooter.vue'),
    'bookscore':require('../components/staticstars.vue')
	 }
}
</script>
<style scoped>
.container{
   width: 80%;
   margin: 20px auto;
   border:1px solid #ddd;
   border-radius:10px;
}
.book-info{
  border:1px solid #ddd;
  position: relative;
}
.book-info .book-cover{
   float: left;
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
.book-judge{
  border:1px solid #ddd;
  float:left;
  display: flex;
  display:-webkit-flex;
  flex-direction: column;
  height: 80px;
  justify-content:space-between;
  margin-left: 450px;
  position: absolute;
  top:50%;
  margin-top:-40px;
}
.book-judge button{
}
</style>