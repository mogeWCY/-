<template>
	    <i class="fa fa-star" aria-hidden="true" v-for="i in scompleteStarTotal"></i><i class="fa fa-star-half-o" aria-hidden="true" v-if="showHalfStar"></i><i class="fa fa-star-o" aria-hidden="true" v-for="i in ecompleteStarTotal"></i>
</template>
<script>
export default{
	 props:['score'],
	 computed:{
         scompleteStarTotal:function(){
         	return  Math.floor(this.score/2);
         },
         ecompleteStarTotal:function(){
         	return  (5-Math.ceil(this.score/2));
         },
         showHalfStar:function(){
         	return  ((this.score%2)!=0);
         }
	 }
}
</script>
<style scoped>
	
</style>