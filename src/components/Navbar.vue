<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/logo.png" alt="Project: Idea">
        </router-link>
        <router-link class="navbar-item" to="/">
         Home
        </router-link>
        <div class="navbar-burger burger" data-target="mobileNavbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="mobileNavbar" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
              <router-link class="navbar-item" to="/about">
                How It Works
              </router-link>
              <div v-show="!isUser">
                <a class="navbar-item" href="/login">Login / Register</a>
              </div>
              <div v-show="isUser" class="navbar-item has-dropdown is-hoverable">
                <a v-if="user" href="#" class="navbar-link">
                  {{user.username}}

                </a>
                <div class="navbar-dropdown is-boxed">
                  <router-link class="navbar-item" to="/dashboard">
                   Dashboard
                  </router-link>
                  <router-link class="navbar-item" to="/profile">
                   Profile
                  </router-link>
                  <router-link class="navbar-item" to="/create-post">
                    Create Idea
                  </router-link>
                  <hr class="navbar-divider">
                  <a @click="logout()" class="navbar-item">
                  Log Out
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  computed: {
    isUser () {
      return this.$store.getters.User !== null && this.$store.getters.User !== undefined
    },
    user () {
      return this.$store.getters.User
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$toast.open({
        message: 'Logged out!',
        type: 'is-danger'
      })
      this.$router.push('/login')
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.hello{
  margin-top: 120px;
}

</style>
