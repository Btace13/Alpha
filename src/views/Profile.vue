<template>
<div class="container">
  <h1>My Profile</h1>
  <hr/>

  <img :src="user.photoURL" />
  <h3>{{user.displayName}}</h3>
  <p>Email: {{user.email}}</p>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="scss">
  .container{
    padding: 0 30px;
  }
</style>
