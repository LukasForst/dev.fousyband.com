<template>
  <div class="countdown-container">
    <div id="num-tag">
      <p>#{{ days + 1 }}</p>
    </div>
    <p id="countdown">
      {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
    </p>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data() {
    return {
      finalReleaseDate: new Date(2020, 8, 9, 21, 0, 0),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    formatNumber(num) {
      return num < 10 ? `0${num}` : num
    },
    updateTimer() {
      let delta = Math.abs(this.finalReleaseDate - new Date()) / 1000;

      const days = Math.floor(delta / 86400);
      delta -= days * 86400;

      const hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      const minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      const seconds = Math.floor(delta % 60);

      this.days = days
      this.hours = this.formatNumber(hours)
      this.minutes = this.formatNumber(minutes)
      this.seconds = this.formatNumber(seconds)
      setTimeout(() => this.updateTimer(), 1000)
    }
  },
  created() {
    this.updateTimer()
  }
}
</script>

<style scoped>
.countdown-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

#countdown {
  color: black;
  font-family: Long Cang, serif;
  font-size: 4.4vw;
}

#num-tag {
  position: absolute;
  top: 40%;
  left: 10%;
  transform: translateX(-50%) skewY(-20deg);
}

#num-tag > p {
  font-family: Phorssa, serif;
  font-size: 10rem;
  color: black;
}

@media only screen and (max-width: 600px) {
  #num-tag {
    visibility: hidden;
  }
}
</style>