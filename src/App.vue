<template>
  <div id="app">
    <NavBar />
    <AccueilView />
    <PrestationsView />
    <ContactView />
    <AProposView />
    <FooterComponent />

    <!-- VERTICAL SLIDER left -->
    <div class="vertical-slider">
      <div class="vertical-slider__line"></div>
      <div class="vertical-slider__track">
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
      </div>
    </div>
    <!-- VERTICAL SLIDER right -->
    <div class="vertical-slider">
      <div class="vertical-slider__line"></div>
      <div class="vertical-slider__track">
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Lorem ipsum</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import AccueilView from "./views/AccueilView.vue";
import PrestationsView from "./views/PrestationsView.vue";
import ContactView from "./views/ContactView.vue";
import AProposView from "./views/AProposView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavBar,
    AccueilView,
    PrestationsView,
    ContactView,
    AProposView,
    FooterComponent,
  },
  data() {
    return {
      // toggleNavbar: false,
      // toggleFooter: true,
    };
  },

  methods: {
    // toggle(bool) {
    //   this.toggleNavbar = bool;
    // },
  },
};
</script>
<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
}
.vertical-slider {
  height: 100vh;
  width: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 100px;
  display: none;
  &:nth-of-type(2n) {
    top: 0;
    right: 100px;
    left: inherit;
  }
  @media (min-width: $desktop) {
    display: block;
  }

  &__line {
    width: 1px;
    background-color: grey;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 170px;
    margin: auto;
    &:nth-of-type(2) {
      top: 0;
      right: 170px;
      left: inherit;
      border: purple solid 2px;
    }
  }

  &__track {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 600px;
    animation: slide 80s linear infinite;
    &:nth-of-type(2n) {
      animation-delay: 4s;
      border: yellow solid 2px;
    }

    @keyframes slide {
      from {
      }
      to {
        transform: translateY(-2633.6px);
        // 600*4 + 58.4*4
      }
    }
  }

  &__dot {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
    &__circle {
      width: 20px;
      height: 20px;
      background-color: grey;
      border-radius: 50%;
    }
    &__text {
      font-weight: 100;
      font-size: 20px;
    }
  }
}
</style>
