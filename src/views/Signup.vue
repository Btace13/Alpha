<template>
  <div class="content">
      <section class="section">
        <div class="container">
          <h1 class="heading">Signup</h1>
          <form @submit.prevent="signup()">
            <b-field label="Email">
              <b-input name="email" id="email" v-model="email" placeholder="Email" type="email" rounded></b-input>
            </b-field>
            <b-field label="Username">
              <b-input name="username" id="username" v-model="username" placeholder="Username" type="text" rounded></b-input>
            </b-field>
            <b-field label="Password">
              <b-input name="password" id="password" v-model="password" placeholder="Password" type="password" rounded></b-input>
            </b-field>
            <button v-bind:class="{ 'is-loading': isLoading }" type="submit" class="button is-fullwidth is-primary">Sign Up</button>
          </form>
          <router-link to="/login">Login</router-link>
        </div>
      </section>
  </div>
</template>


<script>
  export default {
    name: 'About',
    data () {
      return {
        email: '',
        password: '',
        username: ''
      }
    },
    methods: {
      signup () {
        this.$store.dispatch('createUser', {email: this.email, password: this.password, username: this.username})
      }
    },
    computed: {
      user () {
        return this.$store.getters.User
      },
      error () {
        return this.$store.getters.error
      },
      isLoading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
          this.$toast.open({
            message: 'Welcome to Project: Idea!',
            type: 'is-success'
          })
          document.location.reload()
        }
      },
      error (value) {
        if (value !== null && value !== undefined) {
          this.$snackbar.open({
            message: value.message,
            type: 'is-warning',
            position: 'is-top',
            actionText: 'Retry',
            indefinite: true
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
