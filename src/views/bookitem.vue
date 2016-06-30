<template>
<myheader></myheader>
	<div>
		<h1>这本书的ID是{{ bookId }}</h1>
	</div>
	<div class="book-info">
		<img :src="bookInfo.coverImgUrl">
		<p>{{ bookInfo.bookName }}</p>
		<p>{{ bookInfo.author }}</p>
		<p>{{ bookInfo.press }}</p>
		<p>{{ bookInfo.publicationDate }}</p>
        <p>{{ bookInfo.bookScore }}</p>
        <button type="button">想读</button>
        <button type="button">读过</button>
        <button type="button">拥有</button>
        <h2>内容简介</h2>
        <p>{{ bookInfo.bookProfile }}</p>
        <h2>作者简介</h2>

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
	 	'myfooter':require('../components/myfooter.vue')
	 }
}
</script>
<style scoped>
</style>