<template>
  <div id="app">
    <img
      class="nav-displayer"
      src="@/assets/dots-horizontal.svg"
      @click="toggleNavbar = true"
    />
    <NavBar />
    <FooterComponent v-show="toggleFooter" />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  data() {
    return {
      toggleNavbar: false,
      toggleFooter: true,
    };
  },
  components: {
    NavBar,
    FooterComponent,
  },
};
</script>
<style lang="scss">
.nav-displayer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  @media (min-width: $tablet) {
    display: none;
  }
}
</style>
