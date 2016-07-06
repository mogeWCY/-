<template>
    <div v-for="comment in comments" class="comment">
         <p>{{ comment.userName }}:{{ comment.content }}</p>
         <button type="button">展开</button>
         <div class="replay">
               <p v-for="replay in comment.son">
                   {{ replay.content}}
               </p>
         </div>
    </div>
</template>
<script>
export default{
     data () {
         var bookComments=[
         {
            "content":"好差劲啊 ",
            "id":1,
            "time":"2016-06-22",
            "replyto":"",
            "userName":"1楼",
            "son":[
                    {
                      "content":"我是回复1楼的",
                      "id":3,
                      "time":"2016-06-23",
                      "replyto":"hust",
                      "userName":"cra",
                      "son":[
                            {
                              "content":"我是回复小明的",
                              "id":5,
                              "time":"2016-06-24",
                              "replyto":"cra",
                              "userName":"ss",
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
                        "content":"杩樿",
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
          comments:bookComments
         }
     }
}
</script>
<style>
.comment{
   border:1px solid red;
}
.replay{
    height: 200px;
    border:1px solid black;
}
.show{
    display: block;
}
.hide{
    display: none;
}
</style>