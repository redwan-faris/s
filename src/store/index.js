import setting from './setting/index'
import {auth} from './auth.module'
import Vuex from 'vuex'
import axios from 'axios'
import {api} from '../api/Intercepter'
export default new Vuex.Store({
  modules:{
    setting,
    auth
  },
  state: {
    user: null,
    isNewUser: true
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      localStorage.setItem('user', JSON.stringify(userData))
      console.log(userData)
      state.user = userData
    },
    LOGOUT () {
      localStorage.removeItem('user')
      location.reload()
    },
    IS_NEW_USER (state, isNewUser) {
      state.isNewUser = isNewUser
    }
  },
  actions: {
    register ({ commit }, credentials) {
      console.log(credentials)
      let formData = new FormData();
      formData.append("name", credentials.name);
      formData.append("email", credentials.email);
      formData.append("password", credentials.password); 
      formData.append("fb_name", credentials.fb_name); 
      formData.append("image", credentials.file[0]);
      return api
        .post('register', formData)
        .then(( data) => {
           
          commit('SET_USER_DATA', data.data.data)
        })
    },
    async login ({ commit }, credentials) {
      let error = null;
       await api
        .post('login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data.data)
        }).catch(e => {error = e.response.data.data[1]})
        return error;
    },
    logout ({ commit }) {
      commit('LOGOUT')
    },
    isNewUser ({ commit }, isNewUser) {
      commit('IS_NEW_USER', isNewUser)
    },registerAdmin({commit},credentials){
      return api
      .post("/register-admin", credentials)
      .then((data) => {
            
        commit('SET_USER_DATA', data.data.data)
        return data.data
      });
    }
  }
})