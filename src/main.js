import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Test from './components/Test.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Register from './components/Register.vue'

import Panel from './components/Panel.vue'
import HomePanel from './components/dash/Home.vue'
import Task from './components/dash/Task.vue'
import Settings from './components/dash/Settings.vue'

import NotFoundView from './components/404.vue'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/test', name: 'test', component: Test },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/register', name: 'register', component: Register },
    { path: '/panel',
      component: Panel,
      // auth: true,
      children: [
        {
          path: '',
          component: HomePanel,
          name: 'HomePanel',
          description: 'Overview of environment'
        },
        {
          path: 'task',
          component: Task,
          name: 'Dashboard',
          description: 'Overview of environment'
        }, {
          path: 'settings',
          component: Settings,
          name: 'Settings',
          description: 'User settings page'
        }
      ]
    }, {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})

new Vue({
  router
}).$mount('#app')
