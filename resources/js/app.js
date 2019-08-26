/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueFuse from 'vue-fuse'


Vue.use(VueMaterial)

Vue.use(VueFuse)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('index-persona', require('./components/indexPersona.vue').default);
Vue.component('card-persona', require('./components/CardPersona.vue').default);
Vue.component('agregar-persona', require('./components/AgregarPersona.vue').default);
Vue.component('empty-persona', require('./components/EmptyPersona.vue').default);
Vue.component('ver-persona', require('./components/VerPersona.vue').default);

//Habilita el objeto para mandar y recibir
window.EventBus = new Vue();
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});