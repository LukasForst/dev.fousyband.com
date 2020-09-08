<template>
  <div id="app">
    <div id="name">
      <p>FOUsY</p>
    </div>
    <div id="num-tag">
      <p>#{{ days + 1 }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      finalReleaseDate: new Date(2020, 8, 9, 21, 0, 0),
      days: 0,
    }
  },
  methods: {
    updateTimer() {
      let delta = Math.abs(this.finalReleaseDate - new Date()) / 1000;

      if (delta <= 0) {
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        return
      }

      this.days = Math.floor(delta / 86400);

      setTimeout(() => this.updateTimer(), 1000)
    }
  },
  created() {
    this.updateTimer()
  }


}
</script>

<style>
@font-face {
  font-family: "Phorssa";
  src: local("Phorssa"),
  url(./fonts/Phorssa.ttf) format("truetype");
}


#app {
  position: absolute;
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

#name {
  font-size: 7rem;
  font-family: Phorssa, serif;
  color: black;
}

#num-tag > p {
  font-family: Phorssa, serif;
  font-size: 7rem;
  color: black;
}
</style>
