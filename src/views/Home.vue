<template>
  <div class="container is-fluid">
    <div class="content">
      <section class="section">
           <h1 class="heading">Feed</h1>
           <div class="columns is-multiline">
             <div v-for="post in posts" :key="post.index" class="column is-3">
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
                    <span>Needed: <span v-for="needed in post.needed" :key="needed.index">{{needed}}, </span></span>
                    <br>
                    <p>{{timeFilter(post.date)}}</p>
                    <router-link :to="'/post/' + post.id" class="button is-fullwidth">Learn More</router-link>
                  </div>
                </div>
              </div>
             </div>
           </div>
      </section>
  </div>
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
