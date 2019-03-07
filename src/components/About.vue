<template name="fade" enter-active-class="fadein">
  <transition>
    <div id="about-wrapper">
      <h1 id="pageTitle">About</h1>
      <main class="aboutContainer">
        <div class="aboutContainer-img">
          <div class="aboutContainer-img__display"></div>
        </div>
        <article class="about">
          <p
            class="about-text"
          >How's it going? My name's Steve. I'm a front-end developer based in Tempe, AZ. Coding is a passion of mine and tends to occupy the bulk of my time when I'm not recording music or spending time with my girlfriend. I've always had a curiousity for tech and have worked in just about every field involved and tangential to the industry including: tech support, server adminstration, DevOps and web developer. Heck, I even served some time as a Manager of a Radioshack a while back.</p>
          <p
            class="about-text"
          >I'm completely self-taught. I pride myself in my ability to stay up-to-date with current technologies and growing my skillset infinitly larger. Currently I'm working a lot with Vue and Express.js. Building Single Page Applications with a RESTful API endpoint within Node. The two frameworks operate with an inherent cohesive ease, which makes the tech stack all the more enjoyable.</p>
        </article>
        <div class="arrowIcon">
          <svg id="icon" @click="scrollDown" class="pulse">
            <use xlink:href="/src/assets/sprite.svg#icon-chevron-with-circle-down"></use>
          </svg>
        </div>
      </main>
      <section class="chartWrapper">
        <h2 class="chartWrapper-title">Skills</h2>
        <div class="chartContainer">
          <canvas id="chart"></canvas>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import Chart from "chart.js";
import chartData from "../chartdata.js";

export default {
  name: "About",
  data() {
    return {
      chartData: chartData
    };
  },
  methods: {
    createChart(chartID, data) {
      const ctx = document.querySelector(chartID);
      const chart = new Chart(ctx, {
        type: "bar",
        data: data.data,
        options: data.options
      });
    },
    scrollDown() {
      const bottom = window.innerHeight;
      window.scrollTo(bottom, bottom);
      return this.createChart("#chart", this.chartData);
    }
  },
  mounted() {
    return this.createChart("#chart", this.chartData);
  }
};
</script>

<style lang="scss">
// Color Palette
$lightBlue: #5cbcea;

/////////////////////////////////////////////////////////////////////////////////////
// ABOUT-WRAPPER - Page wrapper
#about-wrapper {
  max-width: calc(100vw- 8rem);
  min-height: 100vh;
  margin-left: 4rem;
  text-align: center;
  background: #111;
  padding-bottom: 2rem;
}
/////////////////////////////////////////////////////////////////////////////////////
// PAGE TITLE
#pageTitle {
  padding-top: 1rem;
  font-family: "Nunito";
  text-align: center;
  font-size: 4rem;
  color: #eee;
  text-decoration: underline #e84855;
}
/////////////////////////////////////////////////////////////////////////////////////
// About Section Container
.aboutContainer {
  margin: 0 auto;
  min-height: 100vh;
  max-width: calc(100vw- 8rem);
  padding: 3rem 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-bottom: 3rem;

    &__display {
      width: 10rem;
      height: 10rem;
      border-radius: 150%;
      background: url("/src/assets/Me-Blog.jpeg");
      background-position: center;
      background-size: cover;
    }
  }
}

.fadein {
  animation: fadein 0.5s ease-in;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadein {
  animation: fadein 0.5s ease-in;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/////////////////////////////////////////////////////////////////////////////////////
// About Text Section: paras
.about {
  width: 100%;
  height: 100%;
  padding: 0 auto;
  text-align: justify;

  &-text {
    font-family: "Nunito";
    font-size: 2rem;
    font-weight: 400;
    color: #f4f4f4;
    margin-bottom: 2rem;
  }
}
/////////////////////////////////////////////////////////////////////////////////////
// CHARTWRAPPER
.chartWrapper {
  display: block;
  margin: 0 auto;
  max-width: 80rem;
  min-height: 40vh;

  &-title {
    font-family: "Nunito";

    font-size: 4rem;
    color: #eee;
    text-decoration: underline #e84855;
  }
}
/////////////////////////////////////////////////////////////////////////////////////
// Chart Container
.chartContainer {
  display: block;
  margin: 2rem auto;
  max-width: 80rem;
  min-height: 40rem;
  position: relative;
}
#chart {
  width: 100%;
  min-height: 40rem;
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  margin-bottom: 5rem;
}
//////////////////////////////////////////////////////////////////////////////////////
// Arrow Icon
.arrowIcon {
  width: 3rem;
  height: 3rem;
  display: block;
  margin: 0 auto;
}
.arrowIcon #icon {
  width: 3rem;
  height: 3rem;
  fill: #e84855;
  cursor: pointer;
}
/////////////////////////////////////////////////////////////////////////////////////
// Media Queries
@media screen and (max-width: 650px) {
  #pageTitle {
    margin-left: 4rem;
  }
  .aboutContainer {
    padding: 3rem 5%;
    margin-left: 4rem;
  }
  .chartWrapper {
    //

    &-title {
      margin-left: 4rem;
    }
  }
}
@media screen and (max-width: 565px) {
  #pageTitle {
    margin-left: 0;
  }
  #about-wrapper {
    max-width: 100vw;
    margin-left: 0;
  }
  .aboutContainer {
    margin: 0 0;
    width: 100%;
    padding: 0.5rem 1%;
  }
  .about {
    padding: 0 1rem;

    &-text {
      font-size: 1.7rem;
    }
  }
  .chartWrapper {
    &-title {
      margin-left: 0;
    }
  }
  .chartContainer {
    max-width: calc(80vw + 1vh + 0.5vmin);
    height: 40rem;
    padding-bottom: 3rem;
  }
  #chart {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 480px) {
  .chartWrapper {
    max-width: 100vw;
  }
  .chartContainer {
    max-width: 100vw;
  }
  #chart {
    width: 100%;
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #about-wrapper {
    max-width: 100vw;
    margin-left: 0;
  }
  //   .chartWrapper {
  //     max-width: calc(100vw + 1vh + 0.5vmin);
  //   }
}

// Animations
.pulse {
  -webkit-animation: heartbeat 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite
    both;
  animation: heartbeat 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>


