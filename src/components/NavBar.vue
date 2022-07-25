<template>
  <div class="navbar">
    <nav class="nav-mobile">
      <a
        class="nav-mobile__link"
        href="#accueil"
        :class="{ 'nav-mobile__link--active': link === 'accueil' }"
        @click="link = 'accueil'"
      >
        <img class="nav-mobile__link__icon" src="@/assets/home.svg" />Accueil</a
      >
      <a
        class="nav-mobile__link"
        href="#prestations"
        :class="{ 'nav-mobile__link--active': link === 'prestations' }"
        @click="link = 'prestations'"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/school-outline.svg"
        />Prestations</a
      >
      <a
        class="nav-mobile__link"
        href="#contact"
        :class="{ 'nav-mobile__link--active': link === 'contact' }"
        @click="link = 'contact'"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/send-outline.svg"
        />Contact</a
      >
      <a
        class="nav-mobile__link"
        href="#a-propos"
        :class="{ 'nav-mobile__link--active': link === 'a-propos' }"
        @click="link = 'a-propos'"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/information-outline.svg"
        />A propos</a
      >
    </nav>

    <nav class="nav-desktop">
      <a href="#accueil"><LogoThreejs class="nav-desktop__logo" /> </a>
      <a
        class="nav-desktop__link"
        href="#accueil"
        :class="{ 'nav-desktop__link--active': link === 'accueil' }"
        @click="link = 'accueil'"
        >Accueil</a
      >
      <a
        class="nav-desktop__link"
        href="#prestations"
        :class="{ 'nav-desktop__link--active': link === 'prestations' }"
        @click="link = 'prestations'"
        >Prestations</a
      >
      <a
        class="nav-desktop__link"
        href="#contact"
        :class="{ 'nav-desktop__link--active': link === 'contact' }"
        @click="link = 'contact'"
        >Contact</a
      >
      <a
        class="nav-desktop__link"
        href="#a-propos"
        :class="{ 'nav-desktop__link--active': link === 'a-propos' }"
        @click="link = 'a-propos'"
        >A propos</a
      >
    </nav>
  </div>
</template>
<script>
import LogoThreejs from "@/components/LogoThreejs.vue";
export default {
  name: "NavBar",
  props: {
    // toggleNavbar: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
  data() {
    return {
      link: "accueil",
    };
  },

  components: {
    LogoThreejs,
  },
  methods: {
    // toggle() {
    //   this.$emit("toggle", !this.toggleNavbar);
    // },
  },
};
</script>
<style scoped lang="scss">
.navbar {
  position: sticky;
  top: 0;
  z-index: 4;
  background-color: rgb(0, 0, 0, 0.4);
}
.nav-mobile {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 8px;
  font-weight: $light-weight;
  font-size: 12px;
  border-radius: $border-radius;
  position: sticky;
  top: 100vh;
  @media (min-width: $tablet) {
    display: none;
  }

  &__link {
    font-weight: $light-weight;
    text-decoration: none;
    font-weight: 20px;
    border-bottom: 2px solid transparent;
    display: flex;
    flex-direction: column;
    color: $tertiary-color;
    align-items: center;
    &--active {
      color: darken($tertiary-color, 40%);
    }

    &__icon {
      width: 44px;
    }
  }
}
.nav-desktop {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 8px 24px 0 24px;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: $tablet) {
    display: flex;
    gap: 16px;
  }
  @media (min-width: $desktop) {
    gap: 24px;
  }

  &__logo {
    width: 80px !important;
    height: 70px !important;
    @media (min-width: 424px) {
      display: none;
    }
    @media (min-width: 540px) {
      display: initial;
    }
  }
  &__link {
    font-weight: $light-weight;
    text-decoration: none;
    font-size: 20px;
    border-bottom: 2px solid transparent;
    color: $tertiary-color;
    &--active {
      color: darken($tertiary-color, 40%);
    }
  }
}
</style>
