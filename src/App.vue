<template>
  <div id="app">
    <AccueilView />
    <div class="separator"></div>
    <NavbarDesktop />
    <div class="separator"></div>
    <FormationsView />
    <InfiniteSlider />
    <ContactView />
    <AProposView />
    <ReferencesSlider />
    <NavbarMobile />
    <FooterComponent />

    <!-- VERTICAL SLIDER left -->
    <div class="vertical-slider">
      <div class="vertical-slider__line"></div>
      <div class="vertical-slider__track">
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">ITFS</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Qualité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Passion</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Créativité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">ITFS</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Qualité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Passion</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Créativité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
      </div>
    </div>
    <!-- VERTICAL SLIDER right -->
    <div class="vertical-slider">
      <div class="vertical-slider__line line2"></div>
      <div class="vertical-slider__track track2">
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Satisfaction</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Sécurité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Formation</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Qualité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Satisfaction</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Sécurité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Formation</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
        <div class="vertical-slider__dot">
          <p class="vertical-slider__dot__text">Qualité</p>
          <div class="vertical-slider__dot__circle"></div>
        </div>
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import NavbarDesktop from "@/components/NavbarDesktop.vue";
import AccueilView from "./views/AccueilView.vue";
import FormationsView from "./views/FormationsView.vue";
import InfiniteSlider from "@/components/InfiniteSlider.vue";
import ContactView from "./views/ContactView.vue";
import AProposView from "./views/AProposView.vue";
import ReferencesSlider from "@/components/ReferencesSlider.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavbarDesktop,
    AccueilView,
    FormationsView,
    InfiniteSlider,
    ContactView,
    AProposView,
    ReferencesSlider,
    NavbarMobile,
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
  overflow: auto;
  .separator {
    width: 100vw;
    height: 24px;
    background-color: rgb(0, 0, 0, 0.4);
    display: none;
    @media (min-width: $desktop) {
      display: block;
    }
  }
}
.vertical-slider {
  z-index: -1;
  height: 100vh;
  width: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 80px;
  display: none;
  &:nth-of-type(2n) {
    top: 0;
    right: 80px;
    left: inherit;

    &.track {
      gap: 800px;
      animation: slide2 200s linear infinite;
      @keyframes slide2 {
        to {
          transform: translateY(-3993.6px);
          // 940*4 + 58.4*4
        }
      }
    }
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
    left: 150px;
    margin: auto;
  }

  &__track {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 600px;
    animation: slide 80s linear infinite;

    @keyframes slide {
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
      background-color: rgb(30, 30, 30, 0.5);
    }
  }
}
.line2 {
  top: 0;
  right: 150px;
  left: unset;
  width: 0.6px;
}
.track2 {
  gap: 800px;
  animation: slide2 200s linear infinite;
  @keyframes slide2 {
    to {
      transform: translateY(-3993.6px);
      // 940*4 + 58.4*4
    }
  }
}
</style>
