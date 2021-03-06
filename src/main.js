let RUN = {}

// framework

import Vue     from 'vue'
import router  from './framework/router'
import store   from './framework/store'
import vuetify from './framework/vuetify';

RUN = {
   router,
   store,
   vuetify,
...RUN }

import wrap    from './framework/wrap';
import debug   from './framework/debug';
Vue.component( 'wrap',  wrap  )
Vue.component( 'debug', debug )

// project

import WalrusHeader from './components/walrus-header';
Vue.component( 'walrus-header',  WalrusHeader  )

import WalrusCard from './components/walrus-card';
Vue.component( 'walrus-card',  WalrusCard  )

import NumberInput from './components/number-input';
Vue.component( 'number-input',  NumberInput  )

// app

import App from './App.vue'
const  HTMLid = '#app'
const  render = f => f(App)

RUN = {
    render,
...RUN }


// Run!

new Vue({...RUN}).$mount(HTMLid)

