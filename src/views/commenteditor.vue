<template>
<myheader></myheader>
   <div class="editor">
        <h2>快来发表评价吧</h2>
   	  <div class="title">
   	  	   <label for="title">标题</label>
            <input type="text" name="title" v-model="title" @focus="judgeLogin">
   	  </div>
        <div class="store">
            <span>评价:</span>
            <input type="radio" name="score"><span>很差</span>
            <input type="radio" name="score"><span>较差</span>
            <input type="radio" name="score"><span>还行</span>
            <input type="radio" name="score"><span>推荐</span>
            <input type="radio" name="score"><span>力荐</span>
        </div>
   	  <div class="content">
   	  	  <label for="content">正文评价</label>
           <textarea name="content" v-model="content" @focus="judgeLogin"></textarea>
   	  </div>
   	  <div>
           <input type="checkbox" for="flowcomment"><label for="flowcomment">开启漂流</label>
           <button type="button">发表评价</button>
        </div>
   </div>
<myfooter></myfooter>
</template>
<script>
	 export default{
       components:{
         'myheader':require("../components/myheader.vue"),
         'myfooter':require("../components/myfooter.vue")
       },
       data () {
          return {
             title:'',
             content:''
          }
       },
       methods:{
          judgeLogin:function(){
             // 判断登录状态
             // 未登录则显示登录页面
          }
       }
    }
</script>
<style scoped>
.editor{
   width: 80%;
   margin:40px auto;
   border:1px solid #ddd;
}
.title,.store,.content{
   margin-top: 20px;
}
.title label,.content label{
   display: block;
   margin-bottom: 10px;
}
.title input[type="text"]{
    width: 550px;
    border: 1px solid rgba(142,122,122,0.8);
    padding: 5px 5px;
    text-indent: 10px;
    font-size: 14px;
}
.content textarea{
     width: 80%;
     height: 114px;
     resize: none;
     font-size: 14px;
     border-radius: 5px;
     text-indent: 10px;
}
</style>