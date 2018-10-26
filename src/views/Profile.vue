<template>
  <div class="content">
      <section class="section">
        <div class="container">
          <h1 class="heading">{{user.username}}</h1>
          <p class="subheading">{{user.email}}</p>
            <a v-if="!editMode" @click="editMode = !editMode">
              Edit Profile 
              <b-icon
                icon="pencil"
                size="is-small">
              </b-icon>
            </a>
            <div v-else>
            <a class="button is-success">
              <span>Save Changes</span>
              <span class="icon is-small">
                <i class="fas fa-save"></i>
              </span>
            </a>
            <a class="button" @click="editMode = !editMode">
              <span>Cancel</span>
              <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
            </a>
            </div>
        </div>
      </section>
      <section class="container">
        <div class="profileItem">
          <b-field label="Username" type="is-info">
            <span v-if="!editMode">{{user.username}}</span>
            <b-input v-else placeholder="Username" rounded></b-input>
        </b-field>
        </div>
        <div class="profileItem">
          <b-field label="Bio">
            <span v-if="!editMode">{{user.bio}}</span>
            <b-input v-else type="textarea" placeholder="Bio" rounded></b-input>
        </b-field>
        </div>
        <div class="profileItem">
          <b-field label="Contact">
            <span v-if="!editMode">{{user.bio}}</span>
            <div v-else>
            <b-input placeholder="Phone Number"
                icon="phone">
            </b-input>
            <br>
             <b-input placeholder="Facebook Profile Link"
                icon="facebook">
            </b-input>
            <br>
            <b-input placeholder="Twitter Profile Link"
                icon="twitter">
            </b-input>
            <br>
            <b-input placeholder="Linkedin Profile Link"
                icon="linkedin">
            </b-input>
            <br>
            <b-input placeholder="Github Profile Link"
                icon="github-face">
            </b-input>
            <br>
            <b-input placeholder="Instagram Profile Link"
                icon="instagram">
            </b-input>
            <br>
            </div>
        </b-field>
        </div>
        <div class="profileItem">
          <b-field label="Skills">
            <span v-if="!editMode">{{user.skills}}</span>
             <b-taginput
                v-else
                ellipsis
                placeholder="skills">
             </b-taginput>
        </b-field>
        </div>
      </section>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        editMode: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.User
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .profileItem{
    margin-bottom: 30px
  }
</style>
