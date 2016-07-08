<template>
  <myheader></myheader>
  <div class="home">
  	<div class="my-profile">
  		<div class="basic-info">
      <div class="edit-profile">
         <a v-link="{ path:'/setting' }" v-if="!showBtn">编辑资料</a>
      </div>
      <div class="top">
  			<span>{{ username }},</span>
        {{ userInfo.profile}}
        </div>
        <div class="body">
          <img :src="userImgUrl" alt="{{ userInfo.username }}">
          <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
         <span>{{ userInfo.city }}</span>
         </div>
         <div>
         <i class="fa fa-mars" aria-hidden="true" name="sex"></i>
         <i class="fa fa-venus" aria-hidden="true" v-if='judgeSex' name="sex"></i>
         <span>{{ userInfo.sex }}</span>
         </div>
        </div>
  		</div>
  		<div class="relation-info">
           <div>
             <p>关注了<span class="point">{{ concerndPersons.length }}</span>人</p>
             <button type="button" v-if="showBtn" @click="concernIndexPerson">我要关注</button>
           </div>
  		</div>
  	</div>
  	<div class="followees-info">
  		<div v-for='person in concerndPersons'>
  			<img :src="person.userImgUrl" v-link="{params:{userId:person.attentionID},name:'user'}">
        <div class="main-content">
  			<a v-link="{params:{userId:person.attentionID},name:'user'}"> {{ person.attentionName }} </a>
  			<!--<p>{{ person.userprofile }}</p>-->
        </div>
          <div  v-if="!showBtn">
         <!-- <button type="button"  @click='change' data-index="{{ $index }}" 
          data-type="cancel">取消关注</button>
          <button type="button"  class="show" @click='change' data-index="{{ $index }}"
          data-type="ok">关注</button>-->
          <button type="button" data-type="cancel" data-index="{{ $index }}" @click='change'>取消关注</button>
          </div>
  		</div>
  	</div>
  </div>
  <myfooter></myfooter>
</template>
<script>
export default {
		data () {

           return {
             	userInfo:'',
              queryUserId:'',
              myId:localStorage.userId,
              concerndPersons:'',
              username:localStorage.username,
              btnInner:"取消关注",
              userImgUrl:localStorage.userImgUrl
           }
		},
		route:{
         data (transition){
              this.queryUserId=transition.to.params.userId;
              var temp={
                 queryUserId:this.queryUserId
              };
              var self=this;
              $.ajax({
                url:'http://192.168.155.1:8080/Test/interestlist',
                type:'post',
                data:{
                   data:JSON.stringify(temp)
                },
                success:function(data){
                   //console.log(data);
                   self.userInfo=data;
                },
                error:function(){

                }
              });
             $.ajax({
                 url:'http://192.168.155.1:8031/example_mysql/rest/attention/1',
                 type:'get',
                 success:function(data){
                    console.log(data);
                    self.concerndPersons=data;
                    self.concerndPersons.forEach(function(item){
                          item.show=true;
                    });
                 },
                 error:function(){

                 }
              });

         }
		},
		ready () {
              document.title='关注的人';
              var sexIcons=document.getElementsByName('sex');
              if(this.userInfo.sex=='男'){
                 sexIcons[1].style.display='none';
              }else{
                 sexIcons[0].style.display="none";
              }

		},
		components:{
			'myheader':require('../components/myheader.vue'),
			'myfooter':require('../components/myfooter.vue')
		},
    methods:{
       change:function(event){
           var idx=event.target.dataset.index;
           if(event.target.dataset.type=='ok'){
                this.okConcern(idx);
                event.target.dataset.type="cancel";
                event.target.innerHTML="取消关注";
                event.target.classList.remove('show');
           }else{
                this.cancelConcern(idx);
                event.target.dataset.type="ok";
                event.target.innerHTML="关注";
                event.target.classList.add('show');
          }
       },
       okConcern:function(idx){
           var temp={
              "userID":this.myId,
              "userName":this.username,
              "attentionName":this.concerndPersons[idx].attentionName,
              "attentionUserID":this.concerndPersons[idx].attentionUserID,
              "attentionID":1
           }
           $.ajax({
              url:'http://172.21.185.2:8080/example_mysql/rest/attention',
              type:'post',
              data:JSON.stringify(temp),
              contentType:'application/json',
              success:function(data){
              },
              error:function(){

              }
           });

       },
       cancelConcern:function(idx){
           var temp={
              "userID":this.myId,
              "attentionUserID":this.concerndPersons[idx].attentionUserID
           };
           var self=this;
           $.ajax({
              url:'http://172.21.185.2:8080/example_mysql/rest/attention/delete',
              type:'POST',
              data:temp,
              success:function(data){
              },
              error:function(){
              }
           });
       },
       concernIndexPerson:function(event){
             var self=this;
             var obj={
                 "concernPersonId":this.queryUserId,
                 "concernd":event.target.dataset.concernd
             };
             $.ajax({
                  url:'',
                  type:'post',
                  data:{
                     concernPersonId:JSON.stringify(obj)
                  },
                  success:function(){
                      
                  },
                  error:function(){
                     console.log('关注失败');
                  }
             });
       }
    },
    computed:{
        'showBtn':function(){
             if(this.queryUserId===this.myId){
                return false;
             }
             return true;
         },
         'concernd':function(){
          
         }
    }
	}
</script>
<style scoped>
.home{
   width: 64%;
   margin: 20px auto;
   border:1px solid #ddd;
   border-radius:5px;
}
.home .my-profile{
    width: 90%;
    margin:20px auto;
    position: relative;
}
.home .my-profile .edit-profile{
  position: absolute;
  top:0px;
  right: 0px;
}
.my-profile .edit-profile a{
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    background: #0f88eb;
    font-size: 14px;
    line-height: 30px;
    padding: 5px 10px;
    color: #fff;
}
.home .basic-info img{
   width: 100px;
   height: 100px;
}
.basic-info .top{
}
.basic-info .top>span{
  font-weight: 700;
}
.basic-info .body{
   margin-top: 10px;
}
.basic-info .body>div{
   font-size: 14px;
   margin-top: 15px;
}
.basic-info .body::after{
  content:'';
  display: block;
  clear: both;
}
.basic-info .body img{
  float: left;
  margin-right: 20px;
}
.home .relation-info  button{
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    background: #0f88eb;
    font-size: 14px;
    line-height: 30px;
    width: 120px;
    color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    font-weight: bold;
}
.relation-info .point{
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 24px;
  color:blue;
  cursor: pointer;
}
.home .followees-info{
  margin-top: 50px;
}
.home .followees-info>div{
  border-bottom:1px solid #ddd;
  position: relative;
  padding:10px 50px;
}
.home .followees-info>div::after{
   content: "";
   display: block;
   clear: both;
}
.home .followees-info img {
  float: left;
  width: 70px;
  height: 70px;
}
.home .followees-info>div:first-child{
	border-top:1px solid #ddd;
}
.home .followees-info button{
   position: absolute;
   top:20px;
   right: 50px;
   border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    background: #eee;
    font-size: 14px;
    line-height: 30px;
    color: #888;
    font-weight: bold;
}
.home .followees-info .main-content{
  margin-left:80px;
}
.followees-info .main-content a{
   color:#259;
   font-weight: 700;
   font-size: 20px;
}
.followees-info .main-content p{
  margin-top:5px;
    font-size: 14px;
}
.followees-info button.show{
  background: #0f88eb;
  color: #fff;
}
</style>