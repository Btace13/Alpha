import firebase from 'firebase'

export default {
  // Load in all the posts from Firebase
  loadPosts ({commit}) {
    commit('setLoading', true)
    const postsCollection = firebase
      .firestore()
      .collection('posts')

    postsCollection.onSnapshot((postRef) => {
      const posts = []
      postRef.forEach((doc) => {
        posts.push({
          id: doc.id,
          title: doc.data().title,
          location: doc.data().location,
          description: doc.data().description,
          needed: doc.data().needed,
          tags: doc.data().tags,
          date: doc.data().date,
          files: doc.data().files,
          userId: doc.data().userId,
          interestedUsers: doc.data().interestedUsers,
          fbKeys: []
        })
      })
      commit('loadPosts', posts)
      commit('setLoading', false)
    })
  },

  // Creating a post
  createPost ({commit, getters}, payload) {
    const post = {
      title: payload.title,
      location: payload.location,
      description: payload.description,
      needed: payload.needed,
      tags: payload.tags,
      date: payload.date,
      files: payload.files,
      userId: getters.User.id,
      interestedUsers: []
    }
    firebase
    .firestore()
    .collection('posts')
    .add(post)
    .then(() => console.log('added post'))
    .catch(error => {
      alert(error)
    })
  },

  // Updating a post
  updatePost ({commit}, payload) {
    commit('setLoading', true)
    const updatedPost = {}
    if (payload.title) {
      updatedPost.title = payload.title
    }
    if (payload.location) {
      updatedPost.location = payload.location
    }
    if (payload.description) {
      updatedPost.description = payload.description
    }
    if (payload.needed) {
      updatedPost.needed = payload.needed
    }
    if (payload.tags) {
      updatedPost.tags = payload.tags
    }
    firebase
      .firestore()
      .collection('posts')
      .doc(payload.id)
      .set(updatedPost, {merge: true})
        .then(() => {
          commit('setLoading', false)
          commit('updatePost', payload)
        })
        .catch(error => {
          alert(error)
        })
  },
  // Create a new User
  createUser ({commit, getters}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then((data) => {
      const newUser = {
        id: data.user.uid,
        email: data.user.email,
        username: payload.username,
        registeredPosts: [],
        interestedPosts: [],
        fbKeys: []
      }
      commit('setUser', newUser)
      data.user.updateProfile({
        displayName: payload.username
      })
      commit('setLoading', false)
    })
    .then(() => {
      firebase
        .firestore()
        .collection('users')
        .doc(getters.User.id)
        .set(getters.User)
        .catch(error => {
          alert(error)
          commit('setLoading', false)
        })
    })
    .catch(error => {
      commit('setLoading', false)
      commit('setError', error)
    })
  },

  // Login User
  loginUser ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then((data) => {
      commit('setLoading', false)
      const newUser = {
        id: data.user.uid,
        email: data.user.email,
        username: data.user.displayName,
        registeredPosts: [],
        interestedPosts: [],
        fbKeys: []
      }
      commit('setUser', newUser)
      firebase
        .firestore()
        .collection('users')
        .doc(data.user.uid)
        .get()
        .then(doc => {
          commit('setUser', doc.data())
        })
    })
    .catch((error) => {
      commit('setLoading', false)
      commit('setError', error)
    })
  },

  // Auto signing in with local storage
  autoSignIn ({commit, getters}, payload) {
    commit('setUser', {
      id: payload.uid,
      email: payload.email,
      username: payload.displayName,
      registeredPosts: [],
      interestedPosts: [],
      fbKeys: []
    })
    firebase
      .firestore()
      .collection('users')
      .doc(payload.uid)
      .get()
        .then(doc => {
          commit('setUser', doc.data())
        })
  },

  // Logout of account
  logout ({commit}) {
    firebase.auth().signOut().then(function () {
      console.log('Signed Out')
    }, function (error) {
      console.log('Sign Out Error', error)
    })
    commit('setUser', null)
  },

  // Adding a interested user in a post and a post to a user
  addInterestedUser ({ commit, getters }, payload) {
    commit('setLoading', true)
    const user = getters.User
    const newInterestedPost = payload.id
    firebase
      .firestore()
        .collection('users')
        .doc(user.id)
        .update({
          interestedPosts: firebase.firestore.FieldValue.arrayUnion(newInterestedPost)
        })
        .then(() => {
          commit('updatePost', payload)
          commit('addInterestedUser', payload)
        })
        .catch(error => {
          alert(error)
        })
    firebase
      .firestore()
      .collection('posts')
      .doc(newInterestedPost)
      .update({
        interestedUsers: firebase
          .firestore
          .FieldValue
          .arrayUnion(user.id)
      })
      .then(() => {
        commit('setLoading', false)
      })
      .catch(error => {
        alert(error)
      })
  },

  // Removing a interested user in a post and a post to a user
  removeInterestedUser ({ commit, getters }, payload) {
    commit('setLoading', true)
    const user = getters.User
    const postToRemove = payload.id
    if (!user.fbKeys) {
      return
    }
    firebase
      .firestore()
      .collection('users')
      .doc(user.id)
      .update({
        interestedPosts: firebase
          .firestore
          .FieldValue
          .arrayRemove(postToRemove)
      })
      .then(() => {
        commit('updatePost', payload)
        commit('removeInterestedUser', payload)
      })
      .catch(error => {
        alert(error)
      })
    firebase
      .firestore()
      .collection('posts')
      .doc(postToRemove)
      .update({
        interestedUsers: firebase
          .firestore
          .FieldValue
          .arrayRemove(user.id)
      })
      .then(() => {
        commit('setLoading', false)
      })
      .catch(error => {
        alert(error)
      })
  }
}
