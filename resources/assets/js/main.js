
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

import Vue from 'vue';
// import {panel} from './components/Panel.vue'
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 Vue.component('panel', require('./components/Panel.vue'));

//import Main from './components/Main.vue';

 new Vue({
    el: '#app',
    //render: h => h(Main),
    data: {
        msg: 'habla mmg'
    },
});
