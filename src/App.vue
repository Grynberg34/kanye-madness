<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
 import Home from './components/Home.vue';
export default {


  name: 'App',
  metaInfo: {
    title: 'Kanye Madness Bracket',
  },
  components: {
    Home
  }
  
}
</script>


<style>

  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  #app {
    font-family: 'Jost', sans-serif;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%,rgba(255, 255, 255, 0.9) 100%), url('/background.jpg');
    background-size: cover;
    background-attachment: fixed;
  }


</style>
