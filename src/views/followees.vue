<template>
  <myheader></myheader>
  <div class="home">
  	<div class="my-profile">
  		<div class="basic-info">
      <div class="edit-profile">
         <a v-link="{ path:'/setting' }" v-if="!showBtn">编辑资料</a>
      </div>
      <div class="top">
  			<span>{{ userInfo.userName }},</span>
        {{ userInfo.profile}}
        </div>
        <div class="body">
          <img :src="userInfo.userImgUrl" alt="{{ userInfo.username }}">
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
          <button type="button" v-if="person.show" @click='change' data-index="{{ $index }}" 
          data-type="ok">取消关注</button>
          <button type="button" v-else  class="show" @click='change' data-index="{{ $index }}"
          data-type="cancel">关注</button>
          </div>
  		</div>
  	</div>
  </div>
  <myfooter></myfooter>
</template>
<script>
export default {
		data () {
            var  userInfo ={
            userImgUrl:'https://sfault-avatar.b0.upaiyun.com/337/270/337270487-574ecf99584f4_huge256',
            username:'浴火小青春',
            sex:'男',
            qqnumber:2938429494,
            address:['湖北省','武汉市','洪山区','珞瑜路','1037号'],
            userprofile:'音浪太强，不晃会被撞到地上',
            concerndTags:["文学","历史","小说","童话","故事","科幻","耽美","诗歌"],
            concerndPersons:[
               {
                  userId:111111,
                  userImgUrl:'http://h.hiphotos.baidu.com/image/h%3D300/sign=6f12a43cb4315c605c956defbdb0cbe6/a5c27d1ed21b0ef494399077d5c451da80cb3ec1.jpg',
                  username:'Awee',
                  userprofile:'快上车，没时间解释了'
               },
               {
                  userId:222222,
                  userImgUrl:'http://tva3.sinaimg.cn/crop.0.0.279.279.50/005N3SJDgw1eklpq2cgg2j307s07saa1.jpg',
                  username:'林taro',
                  userprofile:'想要做一个写代码很美的人'
               },
               {
                  userId:333333,
                  userImgUrl:'http://tva2.sinaimg.cn/crop.0.0.511.511.50/005SiNxyjw1emjqhw1hk7j30e80e8q33.jpg',
                  username:'空白白白白',
                  userprofile:'一个数据工程师'
               },
               {
                  userId:444444,
                  userImgUrl:'http://tva2.sinaimg.cn/crop.0.0.180.180.50/685cab87jw1e8qgp5bmzyj2050050aa8.jpg',
                  username:'羽小团',
                  userprofile:'处女座，不解释'
               }
            ]
           };

           return {
             	userInfo:'',
              queryUserId:'',
              myId:localStorage.userId,
              concerndPersons:'',
              username:localStorage.username
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
                 url:'http://172.21.185.2:8080/example_mysql/rest/attention/1',
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
       change:function(event){/*
           var idx=event.target.dataset.index;
           var flag=this.concerndPersons[idx].show;
           //alert(flag);
           this.concerndPersons[idx].show=!flag;
           var temp={
             userId:this.userId,
             concernPersonId:this.concerndPersons[idx].attentionID
           }
            $.ajax({
               url:'',
               type:'post',
               data:{
                   data:JSON.stringify(temp)
               },
               success:function(data){
                   console.log(data);
               },
               error:function(){
  
               }
            });*/
           var idx=event.target.dataset.index;
           if(event.target.dataset.type=='ok'){
                this.okConcern(idx);
           }else{
                this.cancelConcern(idx);
           }
       },
       okConcern:function(idx){
           var temp={
              "userID":this.myId,
              "userName":this.username,
              "attentionName":this.concerndPersons[idx].attentionName,
              "attentionUserID":this.concerndPersons[idx].attentionID,
              "attentionID":1
           }
           $.ajax({
              url:'http://172.21.185.2:8080/example_mysql/rest/attention/delete',
              type:'post',
              data:JSON.stringify(temp),
              contentType:'application/json',
              success:function(data){
                  alert('true');
                  self.concerndPersons[idx].show=true;
              },
              error:function(){

              }
           });

       },
       cancelConcern:function(idx){
           var temp={
              "userID":this.myId,
              "attentionUserID":this.concerndPersons[idx].attentionID,
           }
           $.ajax({
              url:'http://172.21.185.2:8080/example_mysql/rest/attention',
              type:'post',
              data:{
                // data:JSON.stringify(temp),
                'name':'wcy',
                'age':12
              },
              contentType:'application/json',
              success:function(data){
                  alert('true');
                  self.concerndPersons[idx].show=false;
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