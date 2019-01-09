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
            <a v-on:click="updateProfile" class="button is-success">
              <span  style="color: #000;">Save Changes</span>
              <span class="icon is-small">
                <b-icon
                icon="check"
                size="is-small">
              </b-icon>
              </span>
            </a>
            <a class="button" @click="editMode = !editMode">
              <span>Cancel</span>
              <span class="icon is-small">
               <b-icon
                icon="cancel"
                size="is-small">
              </b-icon>
              </span>
            </a>
            </div>
        </div>
      </section>
      <section class="container">
        <div class="profileItem">
          <b-field label="Username">
            <span v-if="!editMode">{{user.username}}</span>
            <b-input v-else placeholder="Username" 
            v-model="updatedProfile.username"
            :value="user.username" 
            rounded
            ></b-input>
          </b-field>
        </div>
        <div class="profileItem">
          <b-field label="Location">
            <span v-if="!editMode">{{user.location}}</span>
            <b-input v-else placeholder="Location" 
            v-model="updatedProfile.location"
            :value="user.location" rounded></b-input>
          </b-field>
        </div>
        <div class="profileItem">
          <b-field label="Occupation">
            <span v-if="!editMode">{{user.job}}</span>
            <b-input v-else placeholder="Occupation" 
            v-model="updatedProfile.job"
            :value="user.job" rounded></b-input>
          </b-field>
        </div>
        <div class="profileItem">
          <b-field label="Bio">
            <span v-if="!editMode">{{user.bio}}</span>
            <b-input v-else type="textarea" placeholder="Bio" 
            v-model="updatedProfile.bio"
            :value="user.bio" rounded></b-input>
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
            <div v-else class="columns is-multiline is-desktop">
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Phone Number"
                  v-model="updatedProfile.contact.phone"
                  :value="user.contact.phone"
                  icon="phone">
              </b-input>
            </b-field>
            </div>
            <br>
             <div class="column is-half is-full-mobile">
             <b-field>
              <b-input placeholder="Facebook Profile Link"
                  v-model="updatedProfile.contact.facebook"
                  :value="user.contact.facebook"
                  icon="facebook">
              </b-input>
            </b-field>            
            </div>
            <br>
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Twitter Profile Link"
                  v-model="updatedProfile.contact.twitter"
                  :value="user.contact.twitter"
                  icon="twitter">
              </b-input>
            </b-field>
            </div>
            <br>
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Linkedin Profile Link"
                  v-model="updatedProfile.contact.linkedin"
                  :value="user.contact.linkedin"
                  icon="linkedin">
              </b-input>
            </b-field>
            </div>
            <br>
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Github Profile Link"
                  v-model="updatedProfile.contact.github"
                  :value="user.contact.github"
                  icon="github-face">
              </b-input>
            </b-field>
            </div>
            <br>
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Instagram Profile Link"
                  v-model="updatedProfile.contact.instagram"
                  :value="user.contact.instagram"
                  icon="instagram">
              </b-input>
            </b-field>
            </div>
            <br>
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Dribbble Profile Link"
                  v-model="updatedProfile.contact.dribbble"
                  :value="user.contact.dribbble"
                  icon="dribbble">
              </b-input>
            </b-field>
            </div>
            <br>
            <div class="column is-half is-full-mobile">
            <b-field>
              <b-input placeholder="Behance Profile Link"
                  v-model="updatedProfile.contact.behance"
                  :value="user.contact.behance"
                  icon="behance">
              </b-input>
            </b-field>
            </div>
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
                placeholder="skills"
                v-model="updatedProfile.contact.skills"
                :value="user.skills"
                >
                
             </b-taginput>
        </b-field>
        </div>
      </section>
  </div>
</template>

<script>
  export default {
    name: 'About',
    computed: {
      user () {
        return this.$store.getters.User
      }
    },
    methods: {
      updateProfile () {
        this.$store.dispatch('updateProfile', this.updatedProfile)
        this.$toast.open({
          message: 'Profile Updated!',
          type: 'is-success'
        })
        this.editMode = false
      }
    },
    data () {
      return {
        editMode: false,
        updatedProfile: {
          username: '',
          bio: '',
          location: '',
          job: '',
          skills: [],
          contact: {
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            github: '',
            behance: '',
            dribbble: '',
            phone: ''
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
 @import 'https://use.fontawesome.com/releases/v5.6.3/css/all.css';
  .profileItem{
    margin-bottom: 30px
  }
  input.input, textarea.textarea {
    border-color: #777;
  }
  input.input::placeholder, textarea.textarea::placeholder{
    color: #666;
  }
  span.icon i {
    color: #333;
  }
  .content{
    padding: 0 20px;
  }
</style>
