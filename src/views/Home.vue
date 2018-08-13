<template>
  <div class="content">
      <section class="section">
        <div class="container is-fluid">
           <h1 class="heading">Feed</h1>
           <div class="columns">
             <div v-for="post in posts" :key="post.index" class="column is-2">
               <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="content">
                      <p class="title is-4">{{post.title}}</p>
                      <p>{{post.description}}</p>
                    </div>
                  </div>
                  <div class="content">
                    <span v-for="tag in post.tags" :key="tag.index">#{{tag}} </span>
                    <br>
                    <p>{{timeFilter(post.date)}}</p>
                    <router-link :to="'/post/' + post.id" class="button is-fullwidth">Learn More</router-link>
                  </div>
                </div>
              </div>
             </div>
           </div>
        </div>
      </section>
  </div>
</template>



<script>
import timeFilter from '../filters/time-filter.js'

export default {
  name: 'Home',
  methods: {
    timeFilter
  },
  computed: {
    posts () {
      return this.$store.getters.publicPosts
    }
  }
}
</script>

<style lang="css" scoped>

</style>
