import firebase from 'firebase'

export default {
  // Load in all the posts from Firebase
  loadPosts ({commit}) {
    commit('setLoading', true)
    firebase.database().ref('posts').once('value')
      .then(data => {
        const posts = []
        const obj = data.val()
        for (let key in obj) {
          posts.push({
            id: key,
            title: obj[key].title,
            location: obj[key].location,
            description: obj[key].description,
            needed: obj[key].needed,
            tags: obj[key].tags,
            date: obj[key].date,
            files: obj[key].files,
            userId: obj[key].userId,
            interestedUsers: obj[key].interestedUsers,
            fbKeys: []
          })
        }
        commit('loadPosts', posts)
        commit('setLoading', false)
      })
      .catch(error => {
        alert(error)
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
      userId: getters.User.id
    }
    firebase.database().ref('posts').push(post)
    .then(data => {
      const key = data.key
      commit('createPost', {
        ...payload,
        id: key
      })
    })
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
    firebase.database().ref('posts').child(payload.id).update(updatedPost)
    .then(() => {
      commit('setLoading', false)
      commit('updatePost', payload)
    })
    .catch(error => {
      alert(error)
    })
  },
  // Create a new User
  createUser ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then((data) => {
      const newUser = {
        id: data.user.uid,
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
        username: data.user.displayName,
        registeredPosts: [],
        interestedPosts: [],
        fbKeys: []
      }
      commit('setUser', newUser)
    })
    .catch((error) => {
      commit('setLoading', false)
      commit('setError', error)
    })
  },

  // Auto signing in with local storage
  autoSignIn ({commit}, payload) {
    commit('setUser', {
      id: payload.uid,
      username: payload.displayName,
      registeredPosts: [],
      interestedPosts: [],
      fbKeys: []
    })
    firebase.database().ref('users/' + payload.id + '/interestedPosts').once('value')
    .then(data => {
      const interestedPosts = []
      const obj = data.val()
      for (let key in obj) {
        interestedPosts.push({
          posts: obj[key].interestedUsers
        })
      }
      commit('setUserData', interestedPosts)
    })
  },

  // Fetching User Data
  fetchUserData ({commit, getters}) {
    commit('setLoading', true)
    firebase.database().ref('/users/' + getters.User.id + '/interestedPosts/').once('value')
      .then(data => {
        const dataPairs = data.val()
        let interestedPosts = []
        let swappedPairs = {}
        for (let key in dataPairs) {
          interestedPosts.push(dataPairs[key])
          swappedPairs[dataPairs[key]] = key
        }
        const updatedUser = {
          id: getters.user.id,
          interestedPosts: interestedPosts,
          fbKeys: swappedPairs
        }
        commit('setLoading', false)
        commit('setUser', updatedUser)
      })
      .catch(error => {
        console.log(error)
        commit('setLoading', false)
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
    firebase.database().ref('/users/' + user.id).child('/interestedPosts/')
      .push(payload)
      .then(data => {
        commit('addInterestedUser', { id: payload, fbKey: data.key })
      })
      .catch(error => {
        console.log(error)
        commit('setLoading', false)
      })
    firebase.database().ref('posts/' + payload.id + '/interestedUsers/')
      .push(user.id)
    commit('setLoading', false)
  },

  // Removing a interested user in a post and a post to a user
  removeInterestedUser ({ commit, getters }, payload) {
    commit('setLoading', true)
    const user = getters.User
    if (!user.fbKeys) {
      return
    }
    const fbKey = user.fbKeys[payload]
    firebase.database().ref('/users/' + user.id + '/interestedPosts/').child(fbKey)
      .remove()
      .then(() => {
        commit('setLoading', false)
        commit('removeInterestedUser', payload)
      })
      .catch(error => {
        console.log(error)
        commit('setLoading', false)
      })
  }
}
