<template>
  <div id="app">
    <Navbar/>
    <div class="container is-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
  @import '../node_modules/font-awesome/css/font-awesome.css';
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  *{
    font-family: 'Montserrat', sans-serif !important;
  }
</style>
