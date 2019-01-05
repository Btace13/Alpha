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
            <div v-if="!editMode">
              <p><i class="mdi mdi-facebook" aria-hidden="true"></i>: {{user.contact.facebook}} </p>
              <p><i class="mdi mdi-twitter" aria-hidden="true"></i>: {{user.contact.twitter}} </p>
              <p><i class="mdi mdi-linkedin" aria-hidden="true"></i>: {{user.contact.linkedin}} </p>
              <p><i class="mdi mdi-instagram" aria-hidden="true"></i>: {{user.contact.instagram}} </p>
              <p><i class="mdi mdi-github-face" aria-hidden="true"></i>: {{user.contact.github}} </p>
              <p><i class="mdi mdi-dribbble" aria-hidden="true"></i>: {{user.contact.dribbble}} </p>
              <p><i class="mdi mdi-behance" aria-hidden="true"></i>: {{user.contact.behance}} </p>
            </div>
            <div v-else>
            <b-field>
              <b-input placeholder="Phone Number"
                  icon="phone">
              </b-input>
            </b-field>
            <br>
             <b-field>
              <b-input placeholder="Facebook Profile Link"
                  icon="facebook">
              </b-input>
            </b-field>            
            <br>
            <b-field>
              <b-input placeholder="Twitter Profile Link"
                  icon="twitter">
              </b-input>
            </b-field>
            <br>
            <b-field>
              <b-input placeholder="Linkedin Profile Link"
                  icon="linkedin">
              </b-input>
            </b-field>
            <br>
            <b-field>
              <b-input placeholder="Github Profile Link"
                  icon="github-face">
              </b-input>
            </b-field>
            <br>
            <b-field>
              <b-input placeholder="Instagram Profile Link"
                  icon="instagram">
              </b-input>
            </b-field>
            <br>
            <b-field>
              <b-input placeholder="Dribbble Profile Link"
                  icon="dribbble">
              </b-input>
            </b-field>
            <br>
            <b-field>
              <b-input placeholder="Behance Profile Link"
                  icon="behance">
              </b-input>
            </b-field>
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
 @import 'https://use.fontawesome.com/releases/v5.6.3/css/all.css';
  .profileItem{
    margin-bottom: 30px
  }
</style>
