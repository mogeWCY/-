<template>
<div class="container">
	<h2>新书推荐</h2>
<div class="new-books-lists">
   <div class="book"  v-for="book in books" >
   	   <div class="book-cover">
   	   	   <a href="#">
   	   	      <img :src="book.coverImgUrl" alt=""  data-index="{{ $index }}"  @mouseover='showProfileInfo' @mouseout='hideProfileInfo'>
   	   	   </a>
   	   </div>
   	   <div class="book-info">
   	   	   	<a href="#" class="book-name" title="{{ book.bookName }}">{{ book.bookName}}</a>
   	   	   	<p class="book-author">{{ book.author}}</p>
   	   </div>
   	   <div class="book-profile" v-show="book.showProfile">
   	   	    <p class="book-name">{{ book.bookName}}</p>
   	   	    <p>
   	   	    	<span class="author">{{ book.author }}</span>
   	   	    	<span class="time">{{ book.publicationDate }}</span>
   	   	    	<span class="press">{{ book.press }}</span>
   	   	    </p>
   	   	    <p class="profile">{{ book.bookProfile }}</p>
   	   	    <div class="triangle"></div>
   	   </div>
   </div>
 </div>
 </div>
</template>
<script>
   // 新书推荐 - 数据类型
   var newBooksData=[
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'https://img3.doubanio.com/lpic/s28367135.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          }
   ];
   newBooksData.forEach(function(item){
        item.showProfile=false;
   });
  var allBookProfiles=document.getElementsByClassName('book-profile');
   export default {
   	  data (){
   	  	 return {
   	  	 	books:newBooksData
   	  	 }
   	  },
   	  methods:{
           showProfileInfo:function(event){
           	   var idx=event.target.dataset.index;
           	   var bookCoverX=event.target.offsetLeft;
           	   var bookCoverY=event.target.offsetTop;
           	   var bookProfileX=bookCoverX+120;
           	   var bookProfileY=bookCoverY-20;
               this.books[idx].showProfile=true;
               var ele=allBookProfiles[idx];
               ele.style.left=bookProfileX+'px';
               ele.style.top=bookProfileY+'px';
           },
           hideProfileInfo:function(){
           	   var idx=event.target.dataset.index;
           	   this.books[idx].showProfile=false;
           }
   	  }
   }
</script>
<style>
.container{
	width: 630px;
	margin: 0px auto;
}
.container>h2{
	border-bottom: 1px solid #ddd;
}
.book-cover img{
	width: 106px;
	height: 158px;
}
.new-books-lists{
	display: flex;
	display:-webkit-flex;
	flex-wrap:wrap;
	justify-content: space-between;
	margin-top:-20px;
}
.book{
	width: 106px;
	margin-top:20px;
}
.book-info{
}
.book-info .book-name{
	color:#3377aa;
}
.book-info .book-author{
	margin-top:5px;
	margin-bottom: 0px;
}
.book-profile{
	position: fixed;
	z-index: 1;
	background: #f6f6f1;
    border-radius:5px;
    border:1px solid #bdb9b9;
    width: 300px;
    height: 200px;
    padding-left: 10px;
}
.book-profile .profile{
  font-size:14px;
}
.triangle{
  position: absolute;
  width: 0px;
  height: 0px;
  top:20px;
  left:-20px;
  border-color:transparent #f6f6f1 transparent transparent;
  border-style:solid;
  border-width:10px;
}
</style>