<template>
  <div id="app">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <Main/>
    <Socials/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Socials from "@/components/Socials";

export default {
  name: 'App',
  components: {
    Main, Socials
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: "Phorssa";
  src: local("Phorssa"),
  url(./fonts/Phorssa.ttf) format("truetype");
}

</style>
