<template>
  <myheader></myheader>
  <div class="home">
  	<div class="my-profile">
  		<div class="basic-info">
      <div class="edit-profile">
         <a href="#">编辑资料</a>
      </div>
      <div class="top">
  			<span>{{ userInfo.username }},</span>
        {{ userInfo.userprofile}}
        </div>
        <div class="body">
          <img :src="userInfo.userImgUrl" alt="{{ userInfo.username }}">
          <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
         <span>{{ userInfo.address[0] + userInfo.address[1] }}</span>
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
             <p>关注了<span class="point">{{userInfo.concerndPersons.length }}</span>人</p>
             <button type="button">我要关注</button>
           </div>
  		</div>
  	</div>
  	<div class="followees-info">
  		<div v-for='person in userInfo.concerndPersons'>
  			<img :src="person.userImgUrl">
        <div class="main-content">
  			<a href="#"> {{ person.username }} </a>
  			<p>{{ person.userprofile }}</p>
        </div>
          <button type="button">取消关注</button>
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
                  userImgUrl:'https://img3.doubanio.com/icon/u28165185-4.jpg',
                  username:'Awee',
                  userprofile:'快上车，没时间解释了'
               },
               {
                  userId:222222,
                  userImgUrl:'https://img3.doubanio.com/icon/u41952166-15.jpg',
                  username:'林taro',
                  userprofile:'想要做一个写代码很美的人'
               },
               {
                  userId:333333,
                  userImgUrl:'https://img1.doubanio.com/icon/u28690777-19.jpg',
                  username:'空白白白白',
                  userprofile:'一个数据工程师'
               },
               {
                  userId:444444,
                  userImgUrl:'https://img3.doubanio.com/icon/u3206680-10.jpg',
                  username:'羽小团',
                  userprofile:'处女座，不解释'
               }
            ]
           };
           return {
             	userInfo:userInfo
           }
		},
		route (){

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
			'myfooter':require('../components/myfooter.vue'),
      'sliderbooks':require('../components/sliderbooks.vue'),
      'mycomments':require('../components/flowbookcomment.vue')
		}
	}
</script>
<style>
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
</style>