<template>
	  <div v-for="comment in comments" track-by="$index">

      <div class="judge" v-if="comment.type==0">
         <p>{{ comment.userName }}</p>
         <p>{{ comment.content }}</p>
         <button type="button" @click="say($index)">查看评论</button>
         {{ $index }}
      </div>
      <div class="a">
           <p v-if="comment.type!=0"><strong>{{ comment.userName }}</strong>
           <span v-if="comment.replyto">回复{{ comment.replyto }}</span>
           {{ comment.content }}</p>
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
 		 var bookComments=[
         {
            "content":"《活着》这本书是个好书啊",
            "id":1,
            "time":"2016-06-22",
            "replyto":"",
            "userName":"小明",
            "son":[
                    {
                      "content":"1楼沙发",
                      "id":3,
                      "time":"2016-06-23",
                      "replyto":"小明",
                      "userName":"小红",
                      "son":[
                            {
                              "content":"沙发什么沙发，水货",
                              "id":5,
                              "time":"2016-06-24",
                              "replyto":"小红",
                              "userName":"小亮",
                              "son":[],
                              "pid":3,
                              "type":1
                            },
                            {
                              "content":"别乱刷存在感",
                              "id":6,
                              "time":"2016-06-24",
                              "replyto":"小红",
                              "userName":"阿狸",
                              "son":[],
                              "pid":3,
                              "type":1
                            }
                            ],
                      "pid":1,
                      "type":1
                    }
                    ],
            "pid":0,
            "type":0
         },
         {
            "content":"还可以吧 ",
            "id":2,
            "time":"2016-06-22",
            "replyto":"",
            "userName":"2楼",
            "son":[
                     {
                        "content":"可以",
                        "id":4,
                        "time":"2016-06-23",
                        "replyto":"ssss",
                        "userName":"pang",
                        "son":[],
                        "pid":2,
                        "type":1
                     }
                  ],
            "pid":0,
            "type":0
           }
         ];
 		return {
 			//comments:bookComments
 		}
 	},
 	methods:{
 		     say:function(idx){
                     var ele=document.getElementsByClassName('judge')[idx].nextElementSibling;
                     var ele2=ele.nextElementSibling;
                     if(ele.style.display=='none'){
                       ele.style.display='block';
                       ele2.style.display='block';
                     }else{
                       ele.style.display='none';
                       ele2.style.display='none';
                     }
                }
 	},
 	props:['comments'],
 	components:{
 		'comments':require('./comment.vue')
 	}
 }
</script>
<style scoped>
.judge{
	border:1px solid red;
}
</style>
