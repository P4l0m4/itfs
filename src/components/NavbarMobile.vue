<template>
  <div class="navbar">
    <nav class="nav-mobile">
      <a
        class="nav-mobile__link"
        href="#accueil"
        :class="{ 'nav-mobile__link--active': link === 'accueil' }"
        @click="link = 'accueil'"
      >
        <img
          class="nav-mobile__link__icon"
          src="@/assets/icons/home.svg"
        />Accueil</a
      >
      <a
        class="nav-mobile__link"
        href="#formations"
        :class="{ 'nav-mobile__link--active': link === 'formations' }"
        @click="link = 'formations'"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/icons/school-outline.svg"
        />Formations</a
      >
      <a
        class="nav-mobile__link"
        href="#contact"
        :class="{ 'nav-mobile__link--active': link === 'contact' }"
        @click="link = 'contact'"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/icons/send-outline.svg"
        />Contact</a
      >
      <a
        class="nav-mobile__link"
        href="#a-propos"
        :class="{ 'nav-mobile__link--active': link === 'a-propos' }"
        @click="link = 'a-propos'"
        ><img
          class="nav-mobile__link__icon"
          src="@/assets/icons/information-outline.svg"
        />A propos</a
      >
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavbarMobile",

  data() {
    return {
      link: "accueil",
    };
  },
};
</script>
<style lang="scss" scoped>
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
  position: fixed;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.6);
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
      width: 40px;
    }
  }
}
</style>
