<template>
  <div class="content">
      <section class="section">
        <div class="container">
          <h1 class="heading">Login In</h1>
          <form @submit.prevent="login()">
            <b-field label="Email">
            <b-input name="email" id="email" v-model="email" placeholder="Email" type="email" rounded></b-input>
          </b-field>
          <b-field label="Password">
              <b-input name="password" id="password" v-model="password" placeholder="Password" type="password" rounded></b-input>
          </b-field>
          <button v-bind:class="{ 'is-loading': isLoading }" type="submit" class="button is-fullwidth is-primary">Login</button>
          </form>
          <router-link to="/signup">Create an account</router-link>
        </div>
      </section>
  </div>
</template>


<script>
  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('loginUser', {email: this.email, password: this.password})
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
          this.$toast.open({
            message: 'Welcome back!',
            type: 'is-success'
          })
          this.$router.push('/')
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

<style lang="css" scoped>

</style>
