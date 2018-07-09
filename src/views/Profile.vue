<template>
<div class="">
   <div class="row">
    <div class="col s12 l3 m12">
      <div class="card">
        <div class="card-image">
          <img src="http://informationcommunicationtechnology.com/wp-content/uploads/2018/06/Hd-Background-1024x576.jpg">
          <span class="card-title">{{user.displayName}}</span>
          <a class="btn-floating halfway-fab waves-effect"><i class="fas fa-user-edit"></i></a>
        </div>
        <div class="card-content">
          <div class="row">
            <div class="col m4">Ideas: 2</div>
            <div class="col m4">Liked: 45</div>
            <div class="col m4">Completed: 3</div>
          </div>
        </div>
      </div>
        <ul class="collection">
          <li class="collection-item">Email: {{user.email}}</li>
          <li class="collection-item">Title: Graphic Designer</li>
          <li class="collection-item">Joined: July 4 2016</li>
        </ul>
    </div>
    <div class="col l9 m12">
      <ul class="tabs">
        <li class="tab col s4"><a href="#my-ideas">Your Ideas</a></li>
        <li class="tab col s4"><a href="#liked">Liked</a></li>
        <li class="tab col s4"><a href="#in-progess">In Progress</a></li>
      </ul>
      <div id="my-ideas" class="col s12">
        <h2>Ideas</h2>
      </div>
      <div id="liked" class="col s12">
        <h2>Liked</h2>
      </div>
      <div id="in-progess" class="col s12">
        <h2>In Progress</h2>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>
  i{
    margin: auto;
    font-size: 1em;
  }
  .card-image span.card-title{
    color: #fff;
    font-weight: 444;
  }
</style>
