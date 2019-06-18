// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "*******************************",
  authDomain: "*******************************",,
  databaseURL: "*******************************",,
  projectId: "*******************************",,
  storageBucket: "*******************************",,
  messagingSenderId: "*******************************",,
  appId: "*******************************",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
