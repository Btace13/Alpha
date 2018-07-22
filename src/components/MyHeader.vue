<template>
<div>
     <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
       <router-link v-show="user" style="padding-left: 10px;" to="/feed" class="navbar-brand mr-auto mr-lg-0"> <img style="margin-left: 20px;" class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/line-logo.svg"></router-link>
       <router-link v-show="!user" style="padding-left: 10px;" to="/" class="navbar-brand mr-auto mr-lg-0"> <img style="margin-left: 20px;" class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/line-logo.svg"></router-link>
      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li v-show="user" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown" v-show="!user"><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
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
    @media (max-width: 991.98px) {
    .offcanvas-collapse {
        position: fixed;
        top: 56px; /* Height of navbar */
        bottom: 0;
        left: 100%;
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
        overflow-y: auto;
        visibility: hidden;
        background-color: #343a40;
        transition-timing-function: ease-in-out;
        transition-duration: .3s;
        transition-property: left, visibility;
    }
    .offcanvas-collapse.open {
        left: 0;
        visibility: visible;
    }
    }

    .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
    }

    .nav-scroller .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    color: rgba(255, 255, 255, .75);
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    }

    .nav-underline .nav-link {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: .875rem;
    color: #6c757d;
    }

    .nav-underline .nav-link:hover {
    color: #007bff;
    }

    .nav-underline .active {
    font-weight: 500;
    color: #343a40;
    }

    .text-white-50 { color: rgba(255, 255, 255, .5); }

    .bg-purple { background-color: #6f42c1; }

    .border-bottom { border-bottom: 1px solid #e5e5e5; }

    .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

    .lh-100 { line-height: 1; }
    .lh-125 { line-height: 1.25; }
    .lh-150 { line-height: 1.5; }
</style>

