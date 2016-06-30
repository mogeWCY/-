<template>
    <myheader></myheader>
    <div class="container123">
           <div class="main">
              <newbookslists></newbookslists>
               <!-- 猜你喜欢 漂流书评-->
           	  <guesslikebookslists></guesslikebookslists>
              <flowbookcomments title="漂流书评"></flowbookcomments>
           </div>
         <div class="sidebar">
    	   <!-- 用户标签-->
         <booktags></booktags>
         </div>
    </div>
    <div class="footer">
    <myfooter></myfooter>
    </div>
</template>
<script>
//import  myheader from 'myheader.vue'
export default {
	components: {
		"myheader":require('../components/myheader.vue'),
		"myfooter":require('../components/myfooter.vue'),
		"newbookslists":require('../components/booklists.vue'),
		"guesslikebookslists":require('../components/likebooklists.vue'),
    "flowbookcomments":require('../components/flowbookcomment.vue'),
    "booktags":require('../components/booktag.vue')
	},
	data () {
		return {
			msg:'thank you'
		}
	}

}
</script>

<style scoped >
.container123{
  margin: 0 auto;
}
.container123:after{
      content: "";
      display: block;
      height: 0;
      visibility:hidden;
      clear: both;
}
.main{
   float: left;
   margin-left:200px;
   width: 640px;
}
.sidebar{
   float: left;
   margin-left: 50px;
   margin-top:50px;
}
.footer{
 margin: 0 auto;
}
</style>