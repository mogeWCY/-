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
       bookId:6672772,
       userId:3433453,
       username:'浴火小青春',
       userCommentTitle:'走了好久终于走到今天',
       userCommentText:'怎么看也像是枝裕和作品里最治愈最轻松的一部了，可是，混蛋！为什么航一告诉弟弟：“可能，比起家人，我还是选择了世界吧”，会让人那么伤感？最后航一的奇迹应该实现了吧，只是他还不知道自己已经渐渐长大了',
       bookname:'奇迹',
       bookScore:8.5,
       userProfileImgUrl:'https://img3.doubanio.com/icon/u81206007-3.jpg',
       commentTime:'2016-05-20 20:08'
     },
     {
       bookId:6672772,
       userId:3433453,
       username:'浴火小青春',
       userCommentTitle:'走了好久终于走到今天',
       userCommentText:'怎么看也像是枝裕和作品里最治愈最轻松的一部了，可是，混蛋！为什么航一告诉弟弟：“可能，比起家人，我还是选择了世界吧”，会让人那么伤感？最后航一的奇迹应该实现了吧，只是他还不知道自己已经渐渐长大了',
       bookname:'奇迹',
       bookScore:8.5,
       userProfileImgUrl:'https://img3.doubanio.com/icon/u81206007-3.jpg',
       commentTime:'2016-05-20 20:08'
     },
     {
       bookId:6672772,
       userId:3433453,
       username:'浴火小青春',
       userCommentTitle:'走了好久终于走到今天',
       userCommentText:'怎么看也像是枝裕和作品里最治愈最轻松的一部了，可是，混蛋！为什么航一告诉弟弟：“可能，比起家人，我还是选择了世界吧”，会让人那么伤感？最后航一的奇迹应该实现了吧，只是他还不知道自己已经渐渐长大了',
       bookname:'奇迹',
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