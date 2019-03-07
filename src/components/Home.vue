<template>
  <transition name="fade" enter-active-class="expand" leave-active-class="fadeout">
    <div id="home-wrapper">
      <h1 class="homeTitle" :key="animated">
        Hi, my name is
        <a class="homeTitle blue" :key="animated2">Steve Gore</a>.
      </h1>

      <h3 class="homeSub">I'm a Front-End Web Developer.</h3>
    </div>
  </transition>
</template>

<script>
import Navbar from "./Navbar";

export default {
  components: {
    Navbar: Navbar
  },
  name: "Home",
  data() {
    return {
      animated: false,
      animated2: false
    };
  },
  methods: {
    startAni() {
      this.animated = true;
      this.animated2 = true;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
// Variables
$lightBlue: #5cbcea;

#home-wrapper {
  background: #111;
  margin-left: 8rem;
  max-width: calc(100vw - 8rem);
  height: 100vh;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
}
.homeTitle {
  font-size: 4rem;
  color: #eee;
}
.homeSub {
  font-size: 2.5rem;
  font-weight: 300;
  color: #f4f4f4;
  opacity: 0.6;
}
.blue {
  color: $lightBlue;
}
////////////////////////////////
// ANIMATIONS
.expand {
  -webkit-animation: tracking-in-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: tracking-in-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }

  40% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }

  40% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 565px) {
  #home-wrapper {
    max-width: 100vw;
    height: calc(100vh - 8rem);
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .homeTitle {
    text-align: center;
    width: 100%;
  }
  .homeSub {
    text-align: center;
    width: 100%;
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #home-wrapper {
    max-width: 100vw;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .homeTitle {
    width: 100%;
    font-size: 7rem;
    text-align: center;
  }
  .homeSub {
    width: 100%;
    font-size: 5.5rem;
    text-align: center;
  }
}
</style>

