<template>
  <div id="top-level-container">
    <Main/>
    <Countdown/>
    <Socials/>
  </div>
</template>

<script>
import Main from "@/components/Main";
import Socials from "@/components/Socials";
import Countdown from "@/components/Countdown";

export default {
  name: "Container",
  components: {
    Main, Socials, Countdown
  }
}
</script>

<style scoped>

#top-level-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

</style>