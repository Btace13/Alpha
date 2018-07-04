<template>
<div>
    <nav id="navbar">
        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/about">Dashboard</router-link></li>
            <li class="divider"></li>
            <li><router-link to="/logout">Log Out</router-link></li>
        </ul>
        <div class="nav-wrapper">
            <router-link style="padding-left: 10px;" to="/" class="brand-logo">Project: Idea</router-link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><router-link to="/about">About</router-link></li>
                <li  v-show="user"><a class="dropdown-trigger" href="#!" data-target="dropdown1">{{user && user.displayName}}<i class="material-icons right">arrow_drop_down</i></a></li>
                <li v-show="!user"><router-link to="/login">Login</router-link></li>
            </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
    </ul>

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
    #navbar{
        background: #2d4059;
    }
    .dropdown-trigger{
        color: #ffb400;
    }
</style>

