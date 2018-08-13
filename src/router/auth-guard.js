import { store } from '../store'

// Makes sure that a user is logged in
export default (to, from, next) => {
  if (store.getters.User) {
    next()
  } else {
    next('/login')
  }
}
