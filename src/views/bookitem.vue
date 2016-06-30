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
    </div>
    <div class="book-judge">
        <button type="button" class=" btn gray">想读</button>
        <button type="button" class="btn">读过</button>
        <button type="button" class="btn">拥有</button>
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
          	bookProfile:"战争过后，世界一片荒芜。羸弱的孩子们躲到暗无天日的地底下，吃垃圾为生。所有人都以为生活只能是这样：残酷、痛苦、欺凌……唯有她，始终坚信这世上会有爱与美好，这便是她心中的那片“光”。她要亲自找到“光”，不管付出怎样的代价,一天，她饱受凌虐，奄奄一息地躺在废墟里，等待死亡降临。这时，一位老先生出现在她面前。他冒着生命危险将小女孩藏在黑漆漆的屋子里，悉心照料她，并借由家里的食物、摆设和照片，一一向她叙说战争来临前人们曾拥有的美好生活，竟和她心中的“光”无比吻合。而渐渐恢复健康小女孩亦为心如死灰的老先生带来活乐趣和希望……面对黑暗的再次袭来，她对美好世界的执念，又能否改变二人的未来？",
          	authorProfile:"1977年中学毕业后，进入北京鲁迅文学院进修深造。1983年开始创作，同年进入浙江省海盐县文化馆。[2]  1984年开始发表小说，《活着》和《许三观卖血记》同时入选百位批评家和文学编辑评选的九十年代最具有影响的十部作品。[3]  1998年获意大利格林扎纳·卡佛文学奖。2005年获得中华图书特殊贡献奖",
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
	 },
   computed:{
     bookSentenceArr:function(){
       return this.bookInfo.bookProfile.split('。');
     },
     authorSentenceArr:function(){
       return  this.bookInfo.authorProfile.split('。');
     }
   },
   methods:{
     
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