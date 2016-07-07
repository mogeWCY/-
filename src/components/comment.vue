<template>
	  <div v-for="comment in comments" track-by="$index">

      <div class="judge" v-if="comment.type==0">
         <img :src="comment.userImgUrl" v-link="{ params:{userId:comment.userId},name:'user'}">
         <span v-link="{ params:{userId:comment['userId']},name:'user'}">{{ comment.userName }}</span>
         <p>{{ comment.content }}</p>
         <button type="button" @click="say($index)">查看评论</button>
      </div>
      <div class="a">
           <span v-if="comment.type!=0" v-link="{ params:{userId:comment['userId']},name:'user'}"><strong>{{ comment.userName }}</strong></span>
           <span v-if="comment.replyto">回复</span><span v-link="{ params:{userId:comment.pid},name:'user'}">{{ comment.replyto }}</span>
           <span>{{ comment.content }}</span>
            <comments :comments="comment.son"></comments>
      </div>
      <div class="b" v-if="comment.type==0">
      	 <input type="text" name="" id="">
      </div>
  </div>
</template>
<script>
 export default{
 	data (){
 		return {
 			//comments:bookComments
 		}
 	},
 	methods:{
 		     say:function(idx){
                     var ele=document.getElementsByClassName('judge')[idx].nextElementSibling;
                     var ele2=ele.nextElementSibling;
                     if(ele.style.display=='none'){
                        console.log(ele);
                        ele.style.display='block';
                        ele2.style.display='block';
                        let allEles=ele.getElementsByTagName('*');
                        for(let i=0,len=allEles.length;i<len;i++){
                        	 allEles[i].style.display='block';
                        }
                     }else{
                       ele.style.display='none';
                       ele2.style.display='none';
                     }
                }
 	},
 	props:['comments'],
 	components:{
 		'comments':require('./comment.vue')
 	},
 	name:'comments',
 	ready () {
 		var allEles=document.getElementsByClassName('a');
 		var allEles1=document.getElementsByClassName('b');
 		for(let i=0,len=allEles.length;i<len;i++){
 			 allEles[i].style.display='none';
 		}
 		for(let i=0,len=allEles1.length;i<len;i++){
 			 allEles1[i].style.display='none';
 		}
 	}
 }
</script>
<style scoped>
.judge{
	border:1px solid red;
}
.judge img{
	width: 60px;
	height: 60px;
}
</style>
