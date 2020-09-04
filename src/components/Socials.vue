<template>
  <div class="socials">
    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon class="md-morph-initial md-icon">
          <img alt="Fousy Social Open" src="../assets/fousy.png"/>
        </md-icon>
        <md-icon class="md-morph-final">
          <p id="fousy-fab">FOUsY</p>
        </md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button :href="facebook" class="md-fab md-big" target="_blank">
          <div class="social-icon fa fa-facebook"/>
        </md-button>

        <md-button :href="instagram" class="md-fab md-big" target="_blank">
          <div class="social-icon fa fa-instagram"/>
        </md-button>

        <md-button :href="youtube" class="md-fab md-big md-icon-button" target="_blank">
          <div class="social-icon fa fa-youtube"/>
        </md-button>

        <md-button :href="email" class="md-fab md-big md-icon-button">
          <div class="social-icon fa fa-envelope-o"/>
        </md-button>

      </md-speed-dial-content>
    </md-speed-dial>
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

<!--not scoped-->
<style>
.md-speed-dial-content > a {
  color: inherit;
}

#fousy-fab {
  font-size: 17px;
  font-family: Phorssa, serif;
  color: black;
}

/* Used, overwrites default */
/*noinspection CssUnusedSymbol*/
.md-ripple {
  background-color: rgba(255, 255, 255, 0.6);
}

.md-fab {
  width: 70px !important;
  height: 70px !important;
}

.social-icon {
  font-size: 30px !important;
  color: black;
}

.md-icon {
  width: 40px !important;
}

@media only screen and (max-width: 600px) {
  .md-fab {
    width: 50px !important;
    height: 50px !important;
  }

  .md-icon {
    width: 30px !important;
  }

  #fousy-fab {
    font-size: 15px;
  }
}

</style>