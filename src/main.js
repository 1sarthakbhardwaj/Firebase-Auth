import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

Vue.config.productionTip = false

 var firebaseConfig = {
    apiKey: "AIzaSyCEt-3vv3HSkw76KtXSNhAzljpf9bkWnz0",
    authDomain: "fir-auth-39b50.firebaseapp.com",
    databaseURL: "https://fir-auth-39b50.firebaseio.com",
    projectId: "fir-auth-39b50",
    storageBucket: "fir-auth-39b50.appspot.com",
    messagingSenderId: "748523915708",
    appId: "1:748523915708:web:b42913c26dbd14481b83b9",
    measurementId: "G-6YWBXPTQFV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
