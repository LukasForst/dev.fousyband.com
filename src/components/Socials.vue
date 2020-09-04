<template>
  <div class="socials">
    <md-button class="md-fab md-big md-icon-button" :href="facebook" target="_blank">
      <md-icon class="fa fa-facebook"/>
    </md-button>

    <md-button class="md-fab md-big md-icon-button" :href="instagram" target="_blank">
      <md-icon class="fa fa-instagram"/>
    </md-button>

    <md-button class="md-fab md-big md-icon-button" :href="youtube" target="_blank">
      <md-icon class="fa fa-youtube"/>
    </md-button>

    <md-button class="md-fab md-big md-icon-button" :href="email">
      <md-icon class="fa fa-envelope-o"/>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Socials",
  data() {
    return {
      facebook: 'https://www.facebook.com/fousyband/',
      instagram: 'https://www.instagram.com/fousyband/',
      youtube: 'https://www.youtube.com/channel/UCf6j1ffSdmnY6pZ4wyKjx4g',
      email: "mailto:booking@fousyband.com"
    }
  }
}
</script>

<style scoped>
a {
  color: inherit;
}
</style>