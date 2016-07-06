<template>
	<div class="guess">
		<h2>猜你喜欢</h2>
		<div class="guess-like-books">
			 <div class="book"  v-for="book in books" >
                 <div class="book-cover">
                 	 <a v-link="{ params:{ bookId: book.bookId },name:'book'}">
                 	 	<img :src="book.coverImgUrl">
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
</template>
<script>
var  guessYouLikeBookData=[
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强sdsdddddddddddddd柔软'//评论
      },
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:9,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:3,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
            {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
            {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
            {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      },
      {
        bookId:'345',
        bookName:'你是我的命运',
        coverImgUrl:'https://img3.doubanio.com/spic/s28580162.jpg',
        bookScore:8.4,// 评分
        author:'白石一文',
        bookTags:['日本','小说','外国文学'],
        comment:'每颗真心都有属于自己的倔强柔软'//评论
      }
   ];
   export default {
   	  data () {
   	  	return {
   	  		books:''
   	  	}
   	  },
      ready () {
        var index={
               userId:localStorage.userId||'',
               index:2,
               login:(localStorage.userId)?true:false
            };
            var self=this;
            setTimeout(function(){
                             $.ajax({
                url:'http://192.168.83.1:8080/Test/mainpage',
                type:'post',
                dataType:'json',
                data:{
                    index:JSON.stringify(index)
                },
                success:function(data){
                   self.books=data[0].guesslike;
                  // console.log("猜你喜欢");
                  // console.log(data);
                },
                error:function(){
                   console.log('猜你喜欢error');
                }
            });
            },2000);
      },
      route:{
          data (){
            }
      },
   	  components:{
   	  	 'bookscore':require('./staticstars.vue')
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
 .guess-like-books{
 	display: flex;
 	display: -webkit-flex;
 	flex-wrap: wrap;
 	justify-content: space-between;
 }
 .guess-like-books .book{
 	width: 300px;
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
</style>