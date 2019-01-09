import Vue from 'vue';
import Vuex from 'vuex';
import getCarStore from './modules/getCarlistStore'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
       getCarStore 
    }
})