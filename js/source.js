// 🎌 IMPORT MODULES, COMPONENTS AND WHATNOT. CREATE THE VUE INSTANCE 🎌
import Vue from 'vue'
import VueRouter from 'vue-router'
import WebFont from 'webfontloader'
import Marked from 'marked'
import App from '../components/app.vue'
import ourRoutes from './our-routes.js'

// 🎌 GOOGLE FONTS, CAUSE TYPOGRAPHY 🎌
WebFont.load({
 google: {
   families: ['Alegreya:400,italic,700,900']
 }
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes: ourRoutes,
  mode: 'history',
})

var app = new Vue({
  router,
}).$mount('#content')