export default {

  // Grabs User
  User (state) {
    return state.user
  },

  // Grabs loading state
  loading (state) {
    return state.isLoading
  },

  // Grabs all errors
  error (state) {
    return state.error
  },

  // Grabs all public posts
  publicPosts (state) {
    return state.posts.sort((postA, postB) => {
      return postA.date < postB.date
    })
  },

  // Grabs a single post
  singlePost (state) {
    return (postId) => {
      return state.posts.find((post) => {
        return post.id === postId
      })
    }
  }
}
