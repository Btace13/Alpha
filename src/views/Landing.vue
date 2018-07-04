<template>
  <div class="hello">
   <h1>PROJECT: IDEA</h1>
       <p>Here is where is ideas and creators  collide!</p>
    <router-link to="/login">GET STARTED</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 3em;
    padding-top: 20%;
    margin: 0;
}
  .hello{
    height: 100vh;
    width: 100%;
    background: url('../assets/img/back3.jpg');
    background-size: cover;
    background-position: right;
  }
  p{
    margin-bottom: 60px;
  }
  a{
    background: #ea5455;
    color: #f6f6f6;
    margin-top: 20px;
    padding: 15px 40px;
    border-radius: 8px;
  }
  a:hover{
    background: #2d4059;
    color: #ffb400;
    border: 1px solid #000;
  }
</style>
