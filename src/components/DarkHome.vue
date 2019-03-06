<template>
  <div id="home-wrapper">
    <h1 class="homeTitle">
      Hi, my name is
      <a class="homeTitle blue">Steve Gore</a>.
    </h1>
    <h3 class="homeSub">I'm a Front-End Web Developer.</h3>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  components: {
    Navbar: Navbar
  },
  name: "Home",
  data() {
    return {};
  },
  methods: {
    // changeTheme(name) {
    //   this.$router.push({ name: `${name}` });
    // }
  }
};
</script>

<style lang="scss">
// Variables
$lightBlue: #5cbcea;

#home-wrapper {
  background: #f1f1f1;
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
  color: #222;
}
.homeSub {
  font-size: 2.5rem;
  font-weight: 300;
  color: #666;
  opacity: 0.7;
}
.blue {
  color: $lightBlue;
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
  .homeTitle {
    width: 100%;
    font-size: 7rem;
  }
  .homeSub {
    width: 100%;
    font-size: 5.5rem;
  }
}
</style>

