<template>
  <div class="slides-show-container">
    <div class="slider">
      <vue-flux
          ref="slider"
          :images="vfImages"
          :options="vfOptions"
          :transitions="vfTransitions">
        <template v-slot:preloader>
          <flux-preloader/>
        </template>
      </vue-flux>
    </div>
  </div>
</template>

<script>
import {FluxPreloader, VueFlux,} from 'vue-flux';

export default {
  name: 'SlideShow',
  components: {
    VueFlux,
    FluxPreloader,
  },

  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg'],
    vfTransitions: ['swipe'],
  }),
}
</script>

<style scoped>
.slides-show-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.slider {
  filter: blur(8px);
  transform: scale(1.1);
}
</style>