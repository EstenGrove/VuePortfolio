<template>
  <div id="app">
    <navbar></navbar>

    <router-view></router-view>

    <index></index>
  </div>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar.vue";
import Index from "./components/Index";
import Routes from "./routes/routes.js";

export default {
  name: "app",
  components: {
    Navbar,
    Home,
    Index
  },
  data() {
    return {
      title: "S.Gore's Portfolio"
    };
  }
};
</script>

<style lang="scss">
// Color Palette
$purple: #c700ff; // rgb(199, 0, 255)
$lightBlue: #00b7ff; // rgb(0, 183, 255)
$midBlue: #0038ff; // rgb(0, 56, 255)
$darkBlue: #4800ff; // rgb(72, 0, 255)
$red: #ff0038; // rgb(255, 0, 56)
$lightGreen: #00ffc7; // rgb(0, 255, 199)

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
#app {
  max-width: 100vw;
  height: 100vh;
}

.expand {
  -webkit-animation: tracking-in-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: tracking-in-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.8em;
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
</style>
