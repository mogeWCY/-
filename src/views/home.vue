<template>
  <myheader></myheader>
  <div class="home">
  	<div class="my-profile">
  		<div class="basic-info">
  			<img :src="userInfo.userImgUrl">
  			{{ userInfo.username }}
        {{ userInfo.userprofile}}
        {{ userInfo.address[0] + userInfo.address[1] }}
        {{ userInfo.sex }}
  		</div>
  		<div class="relation-info">
           <div>
             <p>关注了{{userInfo.concerndPersons.length }}人</p>
             <button type="button">我要关注</button>
             <button type="button">我要换书</button>
           </div>
  		</div>
  	</div>
  	<div class="my-read-books">
       <sliderbooks></sliderbooks>
    </div>
    <div class="my-want-books">
       <sliderbooks></sliderbooks>
    </div>
  	<div class="my-books">
       <sliderbooks></sliderbooks>
    </div>
  	<div class="my-comments">
       <mycomments></mycomments> 
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
            sex:'女',
            qqnumber:2938429494,
            address:['湖北省','武汉市','洪山区','珞瑜路','1037号'],
            userprofile:'音浪太强，不晃会被撞到地上',
            concerndTags:["文学","历史","小说","童话","故事","科幻","耽美","诗歌"],
            mybooks:["活着","西游记","水浒传","红楼梦"],
            concerndPersons:['s']
           };
           return {
             	userInfo:userInfo
           }
		},
		route (){

		},
		ready () {
              document.title='个人主页';
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
   width: 80%;
   margin: 20px auto;
   border:1px solid red;
}
</style>