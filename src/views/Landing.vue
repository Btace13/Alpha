<template>
<div>
  <div class="wrapper">
    <div class="header">
      <div class="content">
        <h1>Project: Idea</h1>
        <h2>Where ideas and creators collide!</h2>
        <div class="buttons">
          <router-link class="button" to="/login">Get Started</router-link>
        </div>
      </div>
      <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/line-logo.svg">
    </div>
  </div>
  <div class="background"></div>
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
 .background {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: #fc3a52;
  background: -moz-linear-gradient(top, #F9B248 0%, #030408 100%);
  background: -webkit-linear-gradient(top, #F9B248 0%, #030408 100%);
  background: linear-gradient(to bottom, #F9B248 0%, #030408 100%);
}
.wrapper {
  width: 80%;
  height: 100%;
  min-height: 800px;
  background: #fff;
  position: relative;
  left: 50%;
  top: 0;
  margin: 90px 0;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.15);
}
.wrapper .header {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #0E2431;
  background: -moz-linear-gradient(top, #F9B248 0%, #FC3A52 100%);
  background: -webkit-linear-gradient(top, #F9B248 0%, #FC3A52 100%);
  background: linear-gradient(to bottom, #F9B248 0%, #FC3A52 100%);
  overflow: hidden;
}
.wrapper .header .logo {
  width: 50px;
  height: auto;
  position: absolute;
  top: 50px;
  left: 100px;
}
.wrapper .header .content {
  position: absolute;
  width: 100%;
  height: auto;
  max-width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -85%);
}
.wrapper .header .content h2{
  color: #fff;
  margin: 0;
  font-size: 2em;
  line-height: 1.2em;
  width: 100%;
  text-align: center;
}
.wrapper .header .content h1 {
  color: #0E2431;
  margin: 0;
  font-size: 3.4em;
  line-height: 2em;
  width: 100%;
  text-align: center;
}
.wrapper .header .content .buttons {
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.wrapper .header .content .button {
  display: inline-block;
  width: 150px;
  height: 50px;
  background: #000;
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  margin: 40px 5px 0;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 12px 20px -10px rgba(0,0,0,0.65);
  -moz-box-shadow: 0px 12px 20px -10px rgba(0,0,0,0.65);
  box-shadow: 0px 12px 20px -10px rgba(0,0,0,0.65);
  transition: box-shadow 0.5s;
}
.wrapper .header .content .button:hover {
  -webkit-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.65);
  -moz-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.65);
  box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.65);
  transition: box-shadow 0.5s;
}
.wrapper .header .waves {
  width: calc(100% + 10px);
  height: auto;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  z-index: 0;
}
.wrapper .header .curve {
  display: none;
  width: calc(100% + 10px);
  height: auto;
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  z-index: 1;
}

</style>
