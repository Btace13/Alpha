<template>
    <div class="container">
      <h1>Feed</h1>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: 'user'
    })
  }
}
</script>
<style scoped>

</style>

