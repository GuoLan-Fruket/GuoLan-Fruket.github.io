<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue"
import Main from "./components/Main.vue"

export default {
  name: 'App',
  components: {
    Welcome, Main
  }
}
</script>

<style>
img{
  border-radius: 10px;
}
del{
  opacity: 0.15;
}
del:hover{
  opacity: 1;
}
.card{
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #dadada !important;
  box-shadow: 0px 0px 15px #333333 !important;
  margin-bottom: 5px !important;
}
</style>
