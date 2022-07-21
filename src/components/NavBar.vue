<template>
  <div>
    <nav class="nav-mobile">
      <router-link class="nav-mobile__link" to="/" exact
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/home.svg"
        />Accueil</router-link
      >
      <router-link class="nav-mobile__link" to="/prestations" exact
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/school-outline.svg"
        />Prestations</router-link
      >
      <router-link class="nav-mobile__link" to="/contact" exact
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/send-outline.svg"
        />Contact</router-link
      >
      <router-link class="nav-mobile__link" to="/a-propos" exact
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/information-outline.svg"
        />A propos</router-link
      >
    </nav>

    <nav class="nav-desktop">
      <router-link to="/"
        ><LogoThreejs />
        <!-- <canvas class="nav-desktop__logo"></canvas
      > -->
      </router-link>
      <router-link class="nav-desktop__link" to="/" exact>Accueil</router-link>
      <router-link class="nav-desktop__link" to="/prestations" exact
        >Prestations</router-link
      >
      <router-link class="nav-desktop__link" to="/contact" exact
        >Contact</router-link
      >
      <router-link class="nav-desktop__link" to="/a-propos" exact
        >A propos</router-link
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

    &__icon {
      width: 44px;
    }
  }
  .router-link-exact-active {
    color: darken($tertiary-color, 40%);
  }
}
.nav-desktop {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
  white-space: nowrap;

  @media (min-width: $tablet) {
    display: flex;
    gap: 16px;
  }
  @media (min-width: $desktop) {
    display: flex;
    gap: 24px;
  }

  &__logo {
    border: orange solid 2px;
    width: 60px;
    height: 60px;
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
  }
  .router-link-exact-active {
    color: darken($tertiary-color, 40%);
  }
}
</style>
