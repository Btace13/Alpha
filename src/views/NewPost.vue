<template>
  <div class="content">
      <section class="section">
        <div class="container">
          <h1 class="heading">New Post</h1>
          <form @submit.prevent="createPost">
            <b-field label="Title">
              <b-input v-model="title" name="title" id="title" placeholder="Title" rounded></b-input>
            </b-field>
            <b-field label="Location">
              <b-input v-model="location" name="Location" id="location" placeholder="Ex. Online" rounded></b-input>
            </b-field>
            <b-field label="Description">
              <b-input v-model="description" id="description" name="description" maxlength="200" type="textarea"></b-input>
            </b-field>
            <b-field label="What do you need for your project?">
              <b-taginput
                  v-model="needed"
                  ellipsis
                  placeholder="Ex. graphic Desinger">
              </b-taginput>
            </b-field>
            <b-field label="Project Tags">
              <b-taginput
                v-model="tags"
                maxtags="5"
                :value="[]">
              </b-taginput>
            </b-field>
            <b-field class="file">
              <b-upload accept='image/*' v-model="files">
                <a class="button is-primary">
                    <b-icon icon="upload"></b-icon>
                    <span>Click to upload an image</span>
                </a>
              </b-upload>
              <span class="file-name"
                  v-if="files && files.length">
                  {{ files[0].name }}
              </span>
             </b-field>
            <button type="submit" class="button is-fullwidth is-danger" :disabled="!formIsValid">Create Idea</button>
          </form>
        </div>
      </section>
  </div>
</template>


<script>
  export default {
    name: 'About',
    data () {
      return {
        title: '',
        location: 'Online',
        description: '',
        needed: [],
        tags: [],
        date: new Date(),
        files: []
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && this.location !== '' && this.description !== '' && this.needed !== '[]' && this.tags !== '[]'
      }
    },
    methods: {
      createPost () {
        if (!this.formIsValid) {
          return
        }
        const postData = {
          title: this.title,
          location: this.location,
          description: this.description,
          needed: this.needed,
          tags: this.tags,
          date: this.date,
          files: this.files
        }
        this.$store.dispatch('createPost', postData)
        this.$toast.open({
          message: 'Post created!',
          type: 'is-success'
        })
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
