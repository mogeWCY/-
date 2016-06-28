module.exports = function(router){
	router.map({
		'*': {
            component: require('./views/index.vue')
        },
        '/index': {
            component: require('./views/index.vue')
        },
        '/list': {
            component: require('./components/list.vue')
        },
        '/asi': {
            component: require('./components/asi.vue')
        },
        '/hello': {
            component: require('./components/hello.vue')
        },
        'setting': {
            component:require('./views/setting.vue')
        },
        'result': {
            component:require('./views/searchresult.vue')
        },
        'tag': {
            component:require('./views/tagsinfo.vue')
        },
        'home' :{
            component:require('./views/home.vue')
        },
        'home/followees':{
            component:require('./views/followees.vue')
        }
    })
	
}