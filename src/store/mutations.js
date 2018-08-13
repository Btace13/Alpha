
export default {

  // Change user state
  changeUserState (state) {
    state.user = !state.user
  },

  // Load in posts
  loadPosts (state, payload) {
    state.posts = payload
  },

  // Create a new post
  createPost (state, payload) {
    state.posts.push(payload)
  },

  // Update Post
  updatePost (state, payload) {
    const post = state.posts.find(post => {
      return post.id === payload.id
    })
    if (payload.title) {
      post.title = payload.title
    }
    if (payload.location) {
      post.location = payload.location
    }
    if (payload.description) {
      post.description = payload.description
    }
    if (payload.needed) {
      post.needed = payload.needed
    }
    if (payload.tags) {
      post.tags = payload.tags
    }
  },

  // Set user in state
  setUser (state, payload) {
    state.user = payload
  },

  // Set app as loading
  setLoading (state, payload) {
    state.isLoading = payload
  },

  // Log any errors that occur
  setError (state, payload) {
    state.error = payload
  },

  // Clear out all errors
  clearError (state) {
    state.error = null
  }
}
