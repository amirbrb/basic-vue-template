import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import CreatePostView from '@/components/CreatePostView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'createPost',
      component: CreatePostView
    }
  ]
})
