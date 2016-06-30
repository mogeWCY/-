module.exports = function(router){
	router.map({
		'*': {  // 404 路由
            name:'home',
            component:function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '/': { //网站首页
            component:function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        'setting': { //个人信息设置页
            name:'setting',
            component:function(resolve){
                 require(['./views/setting.vue'],resolve)
            }
        },
        '/search': { //搜索结果页
            name:'search',
            component:require('./views/searchresult.vue')
        },
        '/tag/:tagname': { //标签详情页
            name:'tag',
            component:function(resolve){
                require(['./views/tagsinfo.vue'],resolve)
            }
            //require('./views/tagsinfo.vue')
        },
        '/user/:userId' :{ //个人主页
            name:'user',
            component:function(resolve){
                require(['./views/home.vue'],resolve)
            }
            //require('./views/home.vue')
        },
        '/user/:userId/followees':{
            name:'followees',
            component:function(resolve){
                require(['./views/followees.vue'],resolve)
            }
            //require('./views/followees.vue')
        },
        '/notice' :{
            name:'notice',
            component:function(resolve){
                require(['./views/notice.vue'],resolve)
            }
            //require('./views/notice.vue')
        },
        '/book/:bookId' :{
            name:'book',
            component:function(resolve){
                require(['./views/bookitem.vue'],resolve)
            }
        },
        '/test' :{
            component :function(resolve){
                require(['./views/test.vue'],resolve)
            }
        }
    })
	
}