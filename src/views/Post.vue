<template>
  <div class="content">
      <section class="section">
        <div class="container">
          <h1 class="heading">{{post.title}}
          </h1>
          <p>{{post.user}}</p>
          <p>{{post.description}}</p>
          <p><span v-for="tag in post.tags" :key="tag.index">#{{tag}} </span></p>
          <p>Need: <span v-for="need in post.needed" :key="need.index">{{need}}, </span></p>
          <p>{{timeFilter(post.date)}}</p>
          <div v-if="userIsCreator" @click="modalActive = true" v-bind:class="{ 'is-loading': isLoading }" class="button is-fullwidth">
            <a>
              Edit Details 
              <b-icon
                icon="pencil"
                size="is-small">
              </b-icon>
            </a>
          </div>
        </div>
      </section>
      <b-modal :active.sync="modalActive" :width="640" scroll="keep">
          <div class="card">
            <div class="card-content">
              <form @submit.prevent="updatePost()">
                <b-field label="Title">
                  <b-input v-model="post.title" name="title" id="title" placeholder="Title" rounded></b-input>
                </b-field>
                <b-field label="Location">
                  <b-input v-model="post.location" name="Location" id="location" placeholder="Ex. Online" rounded></b-input>
                </b-field>
                <b-field label="Description">
                  <b-input v-model="post.description" id="description" name="description" maxlength="200" type="textarea"></b-input>
                </b-field>
                <b-field label="What do you need for your project?">
                  <b-taginput
                      v-model="post.needed"
                      ellipsis
                      placeholder="Ex. graphic Desinger">
                  </b-taginput>
                </b-field>
                <b-field label="Project Tags">
                  <b-taginput
                    v-model="post.tags"
                    maxtags="5"
                  >
                  </b-taginput>
                </b-field>
                <button v-bind:class="{ 'is-loading': isLoading }" type="submit" class="button is-fullwidth is-danger" :disabled="!formIsValid">Update Idea</button>
              </form>
            </div>
          </div>
        </b-modal>
  </div>
</template>


<script>
  import timeFilter from '../filters/time-filter.js'

  export default {
    name: 'Post',
    props: ['id'],
    data () {
      return {
        modalActive: false
      }
    },
    methods: {
      timeFilter,
      updatePost () {
        this.$store.dispatch('updatePost', {
          id: this.post.id,
          title: this.post.title,
          location: this.post.location,
          description: this.post.description,
          needed: this.post.needed,
          tage: this.post.tags
        })
        this.modalActive = false
        this.$toast.open({
          message: 'Post Updated!',
          type: 'is-success'
        })
      }
    },
    computed: {
      isLoading () {
        return this.$store.getters.loading
      },
      formIsValid () {
        return this.title !== '' && this.location !== '' && this.description !== '' && this.needed !== '[]' && this.tags !== '[]'
      },
      post () {
        return this.$store.getters.singlePost(this.id)
      },
      userIsAuth () {
        return this.$store.getters.User !== null && this.$store.getters.User !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuth) {
          return false
        } else if (this.$store.getters.User.id === this.post.userId) {
          return true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
