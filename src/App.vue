<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default{
  components:{
    Navbar
  },
  mounted(){
    // Set dark-mode class on body tag
    document.body.setAttribute('class', 'dark-mode')
  }
}
</script>

<style>
@import './assets/css/theme-1.css';
</style>
