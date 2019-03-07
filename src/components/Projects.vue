<template>
  <div id="projects-wrapper">
    <h2 class="projTitle">Projects</h2>
    <section class="proj-container">
      <!----------------------- Item-1 ----------------------->
      <div class="proj-container__item">
        <div class="proj-container__item-inner"></div>
        <div class="proj-container__item-outer">
          <h5 class="item-title">Italian Bistro Site</h5>
          <p
            class="item-text"
          >Website built for an italian restaurant using HTML, Sass, and vanilla JS for interactivity. Includes filterable menu with a broken grid design for the image displays.</p>
          <div class="item-tags">
            <span class="item-tag htmlTag">HTML</span>
            <span class="item-tag cssTag">Sass</span>
            <span class="item-tag jsTag">JS</span>
            <div class="item-tags_social">
              <span class="social-tag">
                <svg class="icon">
                  <use xlink:href="/src/assets/sprite.svg#icon-github-with-circle"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!----------------------- Item-2 ----------------------->
      <div class="proj-container__item">
        <div class="proj-container__item-inner"></div>
        <div class="proj-container__item-outer">
          <h5 class="item-title">Italian Bistro Site</h5>
          <p
            class="item-text"
          >Website built for an italian restaurant using HTML, Sass, and vanilla JS for interactivity. Includes filterable menu with a broken grid design for the image displays.</p>
          <div class="item-tags">
            <span class="item-tag htmlTag">HTML</span>
            <span class="item-tag cssTag">Sass</span>
            <span class="item-tag jsTag">JS</span>
            <div class="item-tags_social">
              <span class="social-tag">
                <svg class="icon">
                  <use xlink:href="/src/assets/sprite.svg#icon-github-with-circle"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!----------------------- Item-3 ----------------------->
      <div class="proj-container__item">
        <div class="proj-container__item-inner"></div>
        <div class="proj-container__item-outer">
          <h5 class="item-title">Italian Bistro Site</h5>
          <p
            class="item-text"
          >Website built for an italian restaurant using HTML, Sass, and vanilla JS for interactivity. Includes filterable menu with a broken grid design for the image displays.</p>
          <div class="item-tags">
            <span class="item-tag htmlTag">HTML</span>
            <span class="item-tag cssTag">Sass</span>
            <span class="item-tag jsTag">JS</span>
            <div class="item-tags_social">
              <span class="social-tag">
                <svg class="icon">
                  <use xlink:href="/src/assets/sprite.svg#icon-github-with-circle"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!----------------------- Item-4 ----------------------->
      <div class="proj-container__item">
        <div class="proj-container__item-inner"></div>
        <div class="proj-container__item-outer">
          <h5 class="item-title">Italian Bistro Site</h5>
          <p
            class="item-text"
          >Website built for an italian restaurant using HTML, Sass, and vanilla JS for interactivity. Includes filterable menu with a broken grid design for the image displays.</p>
          <div class="item-tags">
            <span class="item-tag htmlTag">HTML</span>
            <span class="item-tag cssTag">Sass</span>
            <span class="item-tag jsTag">JS</span>
            <div class="item-tags_social">
              <span class="social-tag">
                <svg class="icon">
                  <use xlink:href="/src/assets/sprite.svg#icon-github-with-circle"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!----------------------- Item-5 ----------------------->
      <div class="proj-container__item">
        <div class="proj-container__item-inner"></div>
        <div class="proj-container__item-outer">
          <h5 class="item-title">Italian Bistro Site</h5>
          <p
            class="item-text"
          >Website built for an italian restaurant using HTML, Sass, and vanilla JS for interactivity. Includes filterable menu with a broken grid design for the image displays.</p>
          <div class="item-tags">
            <span class="item-tag htmlTag">HTML</span>
            <span class="item-tag cssTag">Sass</span>
            <span class="item-tag jsTag">JS</span>
            <div class="item-tags_social">
              <span class="social-tag">
                <svg class="icon">
                  <use xlink:href="/src/assets/sprite.svg#icon-github-with-circle"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!----------------------- Item-6 ----------------------->
      <div class="proj-container__item">
        <div class="proj-container__item-inner"></div>
        <div class="proj-container__item-outer">
          <h5 class="item-title">Italian Bistro Site</h5>
          <p
            class="item-text"
          >Website built for an italian restaurant using HTML, Sass, and vanilla JS for interactivity. Includes filterable menu with a broken grid design for the image displays.</p>
          <div class="item-tags">
            <span class="item-tag htmlTag">HTML</span>
            <span class="item-tag cssTag">Sass</span>
            <span class="item-tag jsTag">JS</span>
            <div class="item-tags_social">
              <span class="social-tag">
                <svg class="icon">
                  <use xlink:href="/src/assets/sprite.svg#icon-github-with-circle"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      title: "Projects Page"
    };
  }
};
</script>

<style lang="scss">
// Palette
$purple: #8800ff; // rgb(136, 0, 255)
$lightBlue: #5cbcea; // rgb(92, 188, 234)
$midBlue: #0038ff; // rgb(0, 56, 255)
$darkBlue: #4800ff; // rgb(72, 0, 255)
$red: #ff0038; // rgb(255, 0, 56)
$lightGreen: #00c597;

#projects-wrapper {
  max-width: 100vw;
  min-height: 100vh;
  padding-left: 8rem;
}
.projTitle {
  text-align: center;
  font-family: "Lato";
  font-size: 4rem;
  text-decoration: underline #e84855;
  margin-bottom: 4rem;
}
.proj-container {
  margin: 0 auto;
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 50rem));
  grid-template-rows: repeat(auto-fit, minmax(40rem, 50rem));
  grid-gap: 3rem 2rem;
  justify-content: center;

  &__item {
    max-width: 50rem;
    height: 50rem;
    border-radius: 0.5rem;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);

    &-inner {
      width: 100%;
      height: 55%;
      background: url("../assets/Italian1.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 0.5rem;
      border: none;
    }
    &-outer {
      width: 100%;
      height: 45%;
      padding: 2rem 2rem;
      display: grid;
      grid-auto-flow: row;
    }
  }
}

.item-title {
  font-family: "Lato";
  font-size: 2.5rem;
}
.item-text {
  font-size: 1.3rem;
  font-family: "Lato";
  font-weight: 300;
  color: #666;
  margin-bottom: 2rem;
}
// Contains all the tags for each project
.item-tags {
  align-self: end;
  display: flex;
  align-items: flex-end;

  &_social {
    margin-left: auto;
    margin-top: 1rem;
  }
}
.social-tag {
  padding-top: 2rem;
  width: 3rem;
  height: 3rem;
}
.social-tag .icon {
  width: 3rem;
  height: 3rem;
}
.item-tag {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: #eee;
  font-family: "Lato";
}
.htmlTag {
  background: $lightGreen;
}
.cssTag {
  background: $purple;
}
.jsTag {
  background: $red;
}
</style>


