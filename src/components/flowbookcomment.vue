<template>
	<div class="flow-container">
		<h2>{{ title }}</h2>
	    <div class="flow-book-comment">
	    	<div class="book-comment" v-for="comment in comments">
	    		<div class="user-info">
	    			 <p class="comment-title">{{ comment.userCommentTitle }}</p>
	    			 <a class="user-logo" v-link="{ params:{userId:comment.userId},name:'user'}">
	    			 	 <img :src="comment.userProfileImgUrl" title="{{ comment.username }}">
	    			 </a>
	    			  <a class="user-name" v-link="{ params:{userId:comment.userId},name:'user'}">{{ comment.username }} </a>
	    			  <span>评论</span>
                      <bookscore :score="comment.bookScore"></bookscore>
                      <a v-link="{ params:{ bookId: comment.bookId },name:'book'}">{{ comment.bookname}}</a>
	    		</div>
	    		<div class="user-comment">
	    			{{ comment.userCommentText }}
	    			<p>{{ comment.commentTime }}</p>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
var flowBookCommentData=[
     {
       bookId:3,
       userId:1,
       username:'李培根',
       userCommentTitle:"厉害与成功之所以不同，是因为我们在说一个人很厉害时，指的是这个人在某方面更多技能的突出。更像那些匠人日日磨砺最后达到的状态。而这本书中作者从不引用那些耳熟能详的乔布斯、马云、比尔盖茨这样的例子，而是看到那些可能不为人知，但在某个领域确实厉害并独特的人，如反而是与乔布斯反其道而行之的人。这给书名里的”厉害“增加了另一层涵义：有自己清醒的追求，并选择适合自己的实现自我之路。所以腰封上的宣传也是：找到实现自我的最佳捷径",
       bookname:'精进',
       bookScore:8.5,
       userProfileImgUrl:'https://img3.doubanio.com/icon/u81206007-3.jpg',
       commentTime:'2016-05-20 20:08'
     },
     {
       bookId:4,
       userId:2,
       username:'丁烈云',
       userCommentTitle:'走了好久终于走到今天',
       userCommentText:'怎么看也像是枝裕和作品里最治愈最轻松的一部了，可是，混蛋！为什么航一告诉弟弟：“可能，比起家人，我还是选择了世界吧”，会让人那么伤感？最后航一的奇迹应该实现了吧，只是他还不知道自己已经渐渐长大了',
       bookname:'回到初衷',
       bookScore:8.5,
       userProfileImgUrl:'https://img3.doubanio.com/icon/u81206007-3.jpg',
       commentTime:'2016-05-20 20:08'
     },
     {
       bookId:5,
       userId:3,
       username:'习近平',
       userCommentTitle:'走了好久终于走到今天',
       userCommentText:'怎么看也像是枝裕和作品里最治愈最轻松的一部了，可是，混蛋！为什么航一告诉弟弟：“可能，比起家人，我还是选择了世界吧”，会让人那么伤感？最后航一的奇迹应该实现了吧，只是他还不知道自己已经渐渐长大了',
       bookname:'雕刻时光',
       bookScore:8.5,
       userProfileImgUrl:'https://img3.doubanio.com/icon/u81206007-3.jpg',
       commentTime:'2016-05-20 20:08'
     }
];
export default{
	data () { 
		return {
			comments:flowBookCommentData
		}
	},
	ready (){
       var commentInfo={
       	  
       }
	},
	components:{
		"bookscore":require('./staticstars.vue')
	},
	props:['title']
}
</script>
<style scoped>
	.flow-container{
	     margin: 20px auto;
	}
	.flow-container>h2{
		border-bottom:1px solid #ddd;
	}
	.flow-book-comment{
       margin-top: -20px;
	}
	.flow-book-comment .book-comment{
		margin-top:10px;
	}
	.flow-book-comment .book-title{
		font-weight: bold;
		font-size: 16px;
	}
	.flow-book-comment .user-comment{
        margin-top: 10px;
        text-indent:20px;
	}
</style>