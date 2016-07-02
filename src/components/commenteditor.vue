<template>
   <div class="editor">
        <h2>快来发表评价吧</h2>
   	  <div class="title">
   	  	   <label for="title">标题</label>
            <input type="text" name="title" v-model="title" @focus="judgeLogin" maxlength="20"
            placeholder="最长不超过20字">
   	  </div>
        <div class="store">
            <span>评价:</span>
            <input type="radio" name="score" value='1.8' v-model="score" @click="judgeLogin"><span>很差</span>
            <input type="radio" name="score" value="3.2" v-model="score" ><span>较差</span>
            <input type="radio" name="score" value="5" v-model="score"><span>还行</span>
            <input type="radio" name="score" value="7.8" v-model="score"><span>推荐</span>
            <input type="radio" name="score" value="9.2" v-model="score"><span>力荐</span>
        </div>
   	  <div class="content">
   	  	  <label for="content">正文评价</label><span class="remain-text">还可以输入{{remainTextTotal}}字</span>
           <textarea name="content" v-model="content" @focus="judgeLogin" maxlength="300"
           ></textarea>
   	  </div>
   	  <div class="publish">
           <input type="checkbox" for="flowcomment" v-model="beginFlow"><label for="flowcomment">开启漂流</label>
           <button type="button" @click="sendComment">发布</button>
        </div>
   </div>
</template>
<script>
import biu from 'biu.js'
	 export default{
       data () {
          return {
             title:'',
             content:'',
             score:0,
             beginFlow:''
          }
       },
       methods:{
          judgeLogin:function(){
             // 判断登录状态
             // 未登录则显示登录页面
          },
          judgeLen:function(){
            if(this.title>20||this.content>300){
               biu('请注意字数限制',{
                  type:'waring'
               });
               return false;
            }
            return true;
          },
          judgeEmpty:function(){
             if(!this.score||!this.title||!this.content){
               biu("不要留空，请全部填完哦",{
                   type:'waring'
               });
               return false;
             }
             return true;
          },
          sendComment:function(){
              this.judgeLogin();
              if(!this.judgeEmpty()||!this.judgeLen()){//如果有空或者长度有限制，则退出函数
                 return -1;
              }
              //  获取评论数据，用户数据，书籍数据
              // ajax提交数据
              biu('发布成功',{
                type:'waring'
              });
          }
       },
       computed:{
          remainTextTotal:function(){
             return  (300-this.content.length);
          }
       }
    }
</script>
<style scoped>
.editor{
   margin:40px auto;
}
.title,.store,.content{
   margin-top: 20px;
}
.title label,.content label{
   margin-bottom: 10px;
   display: inline-block;
}
.title input[type="text"]{
    width: 550px;
    border: 1px solid rgba(142,122,122,0.8);
    padding: 5px 5px;
    text-indent: 10px;
    font-size: 14px;
    display: block;
    border-radius:2px;
}
.content{
   position: relative;
}
.content textarea{
     width: 600px;
     height: 150px;
     resize: none;
     font-size: 14px;
     border-radius: 5px;
     text-indent: 10px;
     display: block;
}
.content  .remain-text{
   position: absolute;
   top:0px;
   left:400px;
}
.publish  button{
    -webkit-appearance: none;
    border: 0px;
    background: #0f88eb;
    color: #fff;
    cursor: pointer;
    height: 30px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>