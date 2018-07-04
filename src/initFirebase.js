import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import store from './store'

firebase.initializeApp({
  apiKey: 'AIzaSyA92oKTl3fqWgVbEUQtEJSePZgJsAZEPbU',
  authDomain: 'project-idea-a2407.firebaseapp.com',
  databaseURL: 'https://project-idea-a2407.firebaseio.com',
  projectId: 'project-idea-a2407',
  storageBucket: '',
  messagingSenderId: '75277895854'
})

if (__DEV__) {
  window.firebase = firebase
}

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit('UPDATE_USER', user)
})
