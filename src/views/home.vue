<template>
  <myheader></myheader>
  <div class="home">
  	<div class="my-profile">
  		<div class="basic-info">
      <div class="edit-profile">
         <a v-link="{path:'/setting'}">编辑资料</a>
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
             <p>关注了<a v-link="{ params:{ userId: userInfo.userId },name:'followees'}"class="point">{{userInfo.concerndPersons.length }}</a>人</p>
             <button type="button">我要关注</button>
             <button type="button">我要换书</button>
           </div>
  		</div>
  	</div>
  	<div class="my-read-books">
       <h2>我读过的书</h2>
       <div>
            <a v-for="book in userInfo.myreadbooks" href="#" :title="book.bookName"
           v-link="{ params:{ bookId: book.bookId },name:'book'}">
                <img :src="book.bookCoverImgUrl">
            </a>
       </div>
    </div>
    <div class="my-want-books">
         <h2>我想读的书</h2>
         <div>
            <a v-for="book in userInfo.mywantbooks" href="#" :title="book.bookName"
            v-link="{ params:{ bookId: book.bookId },name:'book'}">
               <img  :src="book.bookCoverImgUrl" >
            </a>
         </div>
    </div>
  	<div class="my-books">
        <h2>我拥有的书</h2>
        <div>
        <a v-for="book in userInfo.mybooks" href="#" :title="book.bookName"
        v-link="{ params:{ bookId: book.bookId },name:'book'}">
           <img :src="book.bookCoverImgUrl">
        </a>
        </div>
    </div>
  	<div class="my-comments">
       <mycomments  title="我的书评"></mycomments> 
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
            userId:12345,
            sex:'男',
            qqnumber:2938429494,
            address:['湖北省','武汉市','洪山区','珞瑜路','1037号'],
            userprofile:'音浪太强，不晃会被撞到地上',
            concerndTags:["文学","历史","小说","童话","故事","科幻","耽美","诗歌"],
            mybooks:[
                    {
                       bookId:110,
                       bookCoverImgUrl:'https://img3.doubanio.com/mpic/s27279654.jpg',
                       bookName:'活着'
                    },
                    {
                      bookId:111,
                      bookCoverImgUrl:'https://img1.doubanio.com/mpic/s8875457.jpg',
                      bookName:'西游记'
                    },
                    {
                      bookId:112,
                      bookCoverImgUrl:'https://img1.doubanio.com/mpic/s3846669.jpg',
                      bookName:'水浒传'
                    }
            ],
            mywantbooks:[
                  {
                     bookId:123,
                     bookCoverImgUrl:'https://img3.doubanio.com/lpic/s28829910.jpg',
                     bookName:'回到初衷'
                  },
                  {
                     bookId:124,
                     bookCoverImgUrl:"https://img3.doubanio.com/lpic/s28672942.jpg",
                     bookName:"超越帝国"
                  },
                  {
                    bookId:125,
                    bookCoverImgUrl:"https://img3.doubanio.com/lpic/s28622011.jpg",
                    bookName:"雕刻时光"
                  }
            ],
            myreadbooks:[
                 {
                   bookId:126,
                   bookCoverImgUrl:'https://img1.doubanio.com/lpic/s28673707.jpg',
                   bookName:'死神的浮力'
                 },
                 {
                   bookId:127,
                   bookCoverImgUrl:'https://img3.doubanio.com/spic/s28588315.jpg',
                   bookName:'精进'
                 },
                 {
                   bookId:128,
                   bookCoverImgUrl:'https://img3.doubanio.com/spic/s28579451.jpg',
                   bookName:'来信勿拆'
                 }
            ],
            concerndPersons:['s','a','c','d']
           };
           return {
             	userInfo:userInfo
           }
		},
		route:{
           data (transition) {
               var userId=transition.to.params.userId;
               // 根据用户ID获取数据
               // userInfo
               /*$.ajax({

               });*/
           }
		},
		ready () {
              document.title='个人主页';
              var sexIcons=document.getElementsByName('sex');
              if(this.userInfo.sex=='男'){
                 sexIcons[1].style.display='none';
              }else{
                 sexIcons[0].style.display="none";
              }
              console.log(this.$children);
              console.log('hello');
		},
		components:{
			'myheader':require('../components/myheader.vue'),
			'myfooter':require('../components/myfooter.vue'),
      'mycomments':require('../components/flowbookcomment.vue')
		}
	}
</script>
<style scoped>
.home{
   width: 80%;
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
.my-read-books,.my-want-books,.my-books{
  width: 90%;
  margin: 20px auto;
}
.my-read-books>div,.my-want-books>div,.my-books>div{
   margin:30px auto;
   display: flex;
   display: -webkit-flex;
   flex-wrap: wrap;
}
.my-read-books img{
   width: 80px;
   height: 120px;
   margin-left: 30px;
}
.my-want-books img{
   width: 80px;
   height: 120px;
   margin-left: 30px;
}
.my-books img{
   width: 80px;
   height: 120px;
   margin-left: 30px;
}
.my-comments{
  width: 90%;
  margin: 20px auto;
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
</style>