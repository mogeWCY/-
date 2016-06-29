<template>
<myheader></myheader>
	<div>
		<h1>这本书的ID是{{ bookId }}</h1>
	</div>
<myfooter></myfooter>
</template>
<script>
export default {
	 data () {
         return {
         	name:'wcy',
         	bookId:''
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