<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar: Navbar
    }
  }
</script>

<style>
  @import "../node_modules/bulma/css/bulma.css";
  @import "../node_modules/font-awesome/css/font-awesome.css";
</style>
