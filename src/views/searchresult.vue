<template>
  <myheader></myheader>
	<div class="result">
		<h2>搜索结果</h2>
    <h2>与"{{ keyWord }}"相关的书籍有{{ books.length }}本</h2>
		<div class="result-like-books">
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
   	  		books:guessYouLikeBookData,
          keyWord:''
   	  	}
   	  },
      ready() {
           document.title="搜索结果";
      },
      route :{
           data (transition) {
              var query=transition.to.query,key=query.book;
              this.keyWord=decodeURI(key);
           }
      },
   	  components:{
   	  	 'bookscore':require('../components/staticstars.vue'),
         'myheader' :require('../components/myheader.vue'),
         'myfooter' :require('../components/myfooter.vue')
   	  }
   }
</script>
<style scoped>
 .result{
	 width: 630px;
	 margin: 20px auto;
 }
 .result>h2{
    border-bottom: 1px solid #ddd;
 }
 .result-like-books{
 	display: flex;
 	display: -webkit-flex;
 	flex-wrap: wrap;
 	justify-content: space-between;
 }
 .result-like-books .book{
 	width: 100%;
  border-bottom:1px dotted #ddd;
 }
 .book .book-cover{
 	float: left;
 	margin-right: 20px;
 }
 .result .book-cover img{
 	width: 67px;
	height: 97px;
 }
 .result .book-info a{
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