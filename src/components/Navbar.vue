<template>
  <div>
    <div id="nav-wrapper">
      <nav class="nav">
        <!-- LOGO -->
        <a href="#" class="nav-link logo" @click="routeSetter('Home')">S.Gore</a>
        <!-- 1 -->
        <a href="#" class="nav-link">
          <svg class="nav-link__icon blue" @click="routeSetter('Home')">
            <use xlink:href="/src/assets/sprite.svg#icon-home"></use>
          </svg>
          <a href="#" class="nav-link_alt">Home</a>
        </a>
        <!-- 2 -->
        <a href="#" class="nav-link">
          <svg class="nav-link__icon purple" @click="routeSetter('Projects')">
            <use xlink:href="/src/assets/sprite.svg#icon-code"></use>
          </svg>
          <a href="#" class="nav-link_alt">Projects</a>
        </a>
        <!-- 3 -->
        <a href="#" class="nav-link">
          <svg class="nav-link__icon lightGreen" @click="routeSetter('About')">
            <use xlink:href="/src/assets/sprite.svg#icon-emoji-flirt"></use>
          </svg>
          <a href="#" class="nav-link_alt">About</a>
        </a>
        <!-- 4 -->
        <a href="#" class="nav-link">
          <svg class="nav-link__icon darkBlue" @click="routeSetter('Contact')">
            <use xlink:href="/src/assets/sprite.svg#icon-mail"></use>
          </svg>
          <a href="#" class="nav-link_alt">Contact</a>
        </a>
        <!-- 5 -->
        <a href="#" class="nav-link">
          <svg class="nav-link__icon scrollToTop">
            <use xlink:href="/src/assets/sprite.svg#icon-chevron-with-circle-up"></use>
          </svg>
          <a href="#" class="nav-link__alt">To Top</a>
        </a>
      </nav>
    </div>
    <div class="theme">
      <svg class="theme-icon" @click="changeTheme('DarkHome')">
        <use xlink:href="/src/assets/sprite.svg#icon-moon"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default {
  name: "Navbar",
  data() {
    return {
      top: (0, 0)
    };
  },
  methods: {
    routeSetter(name) {
      this.$router.push({ name: `${name}` });
    },
    changeTheme(name) {},
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss">
$purple: #8800ff; // rgb(136, 0, 255)
$lightBlue: #5cbcea; // rgb(92, 188, 234)
$midBlue: #0038ff; // rgb(0, 56, 255)
$darkBlue: #4800ff; // rgb(72, 0, 255)
$red: #ff0038; // rgb(255, 0, 56)
$lightGreen: #00c597; // rgb(0, 255, 199)

// Gradient
$gradient: linear-gradient(
  to left top,
  #403f4c,
  #343546,
  #262b41,
  #17223b,
  #011936
);

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}
.theme {
  position: fixed;
  width: 4rem;
  height: 4rem;
  top: 1rem;
  right: 1rem;

  &-icon {
    width: 4rem;
    height: 4rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
    stroke: #eee;

    &:hover {
      fill: goldenrod;
      stroke: #111;
      cursor: pointer;
    }
  }
}

#nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 8rem;
  height: 100vh;
  display: grid;
  grid-column: span;
  grid-row: 0 / -1;
}
.nav {
  background: $gradient;
  width: 8rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-right: 1px solid #333;

  &:hover &-link__icon {
    transform: rotate(0);
    fill: $red; // Consider leaving all icons red
  }
  &:hover &-link_alt {
    transform: translateX(0);
    opacity: 1;
  }

  &-link {
    position: relative;
    padding: 1rem;
    width: 100%;
    height: calc(100vh / 5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: $lightBlue;

    &_alt {
      text-decoration: none;
      font-family: "Lato";
      opacity: 0.3;
      transform: translateX(-20rem);
      color: #eee;
      transition: all 0.25s cubic-bezier(0.99, 0.27, 1, 0.71);
    }

    &__icon {
      width: 3.5rem;
      height: 3.5rem;
      transform: rotate(-30deg);
      fill: $lightBlue;
      transition: all 0.25s cubic-bezier(0.99, 0.27, 1, 0.71);
    }
  }
}
///////////////////////////////
// Utility Classes
.logo {
  font-family: "Pacifico";
  font-size: 2rem;
  height: 5rem;
  text-decoration: none;
  color: $red;
}
.scrollToTop {
  transform: rotate(0);
  text-decoration: none;

  &:hover {
    fill: $red;
  }
}
.blue {
  fill: $lightBlue;
}
.purple {
  fill: $purple;
}
.lightGreen {
  fill: $lightGreen;
}
.darkBlue {
  fill: $darkBlue;
}
a:-webkit-any-link:last-of-type {
  color: #eee;
  text-decoration: none;
  font-family: "Lato";
  margin-top: 0.3rem;
}
/////////////////////////
// Media Queries
@media screen and (max-width: 565px) {
  #nav-wrapper {
    position: fixed;
    width: 100vw;
    height: 8rem;
    top: calc(100vh - 8rem);
    left: 0;
    display: grid;
    grid-column: 0 / span;
    grid-row: 10 / span;
  }
  .nav {
    width: 100vw;
    height: 8rem;
    flex-direction: row;

    &-link {
      height: 100%;
      width: calc(100vw / 5);
      align-items: center;

      &:hover &-link_alt {
        transform: translateY(-20rem);
      }

      &_alt {
        transform: translateY(20rem);
      }
    }
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #nav-wrapper {
    position: fixed;
    width: 100vw;
    height: 8rem;
    top: calc(100vh - 8rem);
    left: 0;
    display: grid;
    grid-column: 0 / span;
    grid-row: 10 / span;
  }
  .nav {
    width: 100%;
    flex-direction: row;
    //
    &-link {
      height: 100%;
      width: calc(100vw / 6);
      align-items: center;

      &:hover &-link_alt {
        transform: translateY(-20rem);
      }
      //
      &_alt {
        font-size: 0.8rem;
        transform: translateY(20rem);
      }
      &__icon {
        height: 3rem;
        width: 3rem;
        transform: rotate(0);
      }
    }
  }
}
.logo {
  font-size: 1.5rem;
}
</style>

