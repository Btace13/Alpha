<template>
  <div id="app">
    <my-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

  *{
    font-family: 'Poppins', sans-serif;
  }
  body{
     background: #171918;
     color: #fff;
  }
</style>
