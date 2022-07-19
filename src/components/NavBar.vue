<template>
  <div>
    <div
      class="mobile-background"
      v-show="toggleNavbar"
      @click="toggleNavbar = false"
    ></div>
    <nav class="nav-mobile" v-show="toggleNavbar">
      <router-link
        class="nav-mobile__link"
        to="/"
        exact
        @click="toggleNavbar = false"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/home.svg"
        />Accueil</router-link
      >
      <router-link
        class="nav-mobile__link"
        to="/prestations"
        exact
        @click="toggleNavbar = false"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/school-outline.svg"
        />Prestations</router-link
      >
      <router-link
        class="nav-mobile__link"
        to="/contact"
        exact
        @click="toggleNavbar = false"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/send-outline.svg"
        />Contact</router-link
      >
      <router-link
        class="nav-mobile__link"
        to="/a-propos"
        exact
        @click="toggleNavbar = false"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/information-outline.svg"
        />A propos</router-link
      >
    </nav>

    <nav class="nav-desktop">
      <router-link to="/"
        ><canvas class="nav-desktop__logo"></canvas
      ></router-link>
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
export default {
  name: "NavBar",
};
</script>
<style scoped lang="scss">
//A VIRER :
@import "@/styles/_variables.scss";
//

.mobile-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: $primary-color;
  opacity: 0.8;
  @media (min-width: $tablet) {
    display: none;
  }
}
.nav-mobile {
  position: fixed;
  inset: 0;
  margin: auto;
  border: 2px solid $tertiary-color;
  width: fit-content;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  font-weight: $thin;
  font-size: 12px;
  border-radius: $border-radius;
  @media (min-width: $tablet) {
    display: none;
  }

  &__link {
    font-weight: $light;
    text-decoration: none;
    font-weight: 20px;
    border-bottom: 2px solid transparent;
    display: flex;
    flex-direction: column;
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
    font-weight: $light;
    text-decoration: none;
    font-size: 20px;
    border-bottom: 2px solid transparent;
  }
  .router-link-exact-active {
    color: darken($tertiary-color, 40%);
  }
}
</style>
