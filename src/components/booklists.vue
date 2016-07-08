<template>
<div class="container">
	<h2>新书推荐</h2>
<div class="new-books-lists">
   <div class="book"  v-for="book in books" >
   	   <div class="book-cover">
   	   	   <a v-link="{ params:{ bookId: book.bookId },name:'book'}">
   	   	      <img :src="book.coverImgUrl" alt=""  data-index="{{ $index }}"  @mouseover='showProfileInfo' @mouseout='hideProfileInfo'>
   	   	   </a>
   	   </div>
   	   <div class="book-info">
   	   	   	<a v-link="{ params:{ bookId: book.bookId },name:'book'}" class="book-name" title="{{ book.bookName }}">{{ book.bookName}}</a>
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
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中ghjgjh科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"亲则在穷困中患了重病，福贵前去求药，却在途中被品"
          },
          {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
          	author:'余华',
          	press:'华中科技大学出版社',
          	publicationDate:'2015/10/05',
          	bookProfile:"《活着(新版)》讲述了农"
          },
           {
          	bookId:'123',
          	bookName:'活着',
          	coverImgUrl:'http://img3x9.ddimg.cn/72/14/23979159-1_l_4.jpg',
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
   	  	 	 books:''
   	  	 }
   	  },
      ready (){
           this.books=newBooksData;
           var newBook={
               userId:localStorage.userId,
               index:1,
               login:(localStorage.userId)?true:false
           };
           var self=this;
           setTimeout(function(){
                         $.ajax({
                              url:'http://192.168.155.1:8080/Test/mainpage',
                              type:'post',
                              dataType:'json',
                              data:{
                                  index:JSON.stringify(newBook)
                              },
                              success:function(data){
                                    self.books=data[0].newbook;
                                    // 显示出错，bookProfile 
                                    /*self.books.forEach(function(item){
                                        console.log(item);
                                    })
                                    self.books.forEach(function(item){
                                          item.showProfile=false;
                                    });*/
                              },
                              error:function(){
                                  console.log('error 新书推荐');
                              }
                          });
           },0);
        
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
<style scoped>
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
  position: relative;
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
	position: absolute;
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