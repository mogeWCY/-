<template>
	<div class="booktag-container">
		<h2>书籍标签</h2>
		<div class="booktags">
			<ul>
				<li v-for="tag in tags" track-by="$index">
				    <a v-link="{ params:{tagname:tag},name:'tag'}">{{ tag }}</a></li>
			</ul>
		</div>
		<h2>更多功能</h2>
		<p><a href="#">就近换书</a></p>
	</div>
</template>
<script>
	var allTagsData=["小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画","推理","言情","小说","随笔","散文","童话","诗歌","名著","漫画"];
export default{
	data () {
		return {
			tags:''
		}
	},
	ready (){
       //this.tags=allTagsData;
       var index={
       	 userId:localStorage.userId||'',
       	 index:3
       };
       var self=this;
       setTimeout(function(){
                    $.ajax({
              url:'http://172.21.185.3:8080/Test/mainpage',
              type:'post',
              dataType:'json',
              data:{
              	 index:JSON.stringify(index)
              },
              success:function(data){
              	   //console.log('标签');
              	   //console.log(data[0].alllabel);
                   self.tags=data[0].alllabel;
              },
              error:function(){
                   console.log('书籍标签error');
              }
       			});
       },4000);
	}
}
</script>
<style scoped>
.booktag-container{
	width: 400px;
	height: 700px;
	z-index: 0;
}
.booktag-container h2{
	border-bottom:1px solid #ddd;
	padding-bottom: 10px;
}
.booktag-container ul{
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	padding: 0px;
	justify-content:space-between;
}
.booktag-container li{
	list-style: none;
	background:#f5f5f5;
	margin:5px;
}
.booktag-container li a {
	padding:8px 10px;
	font-size:14px;
	line-height: 14px;
}
</style>