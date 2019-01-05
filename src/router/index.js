import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Post from '../views/Post'
import Profile from '../views/Profile'
import Categories from '../views/Categories'
import NewPost from '../views/NewPost'
import Dashboard from '../views/Dashboard'
import EditProfile from '../views/EditProfile'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/post/:id',
      name: 'Post',
      props: true,
      component: Post,
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/create-post',
      name: 'New Post',
      component: NewPost,
      beforeEnter: AuthGuard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile/edit',
      name: 'EditProfile',
      component: EditProfile
    }
  ]
})
