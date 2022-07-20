<template>
  <div id="app">
    <NavBar />
    <AccueilView />
    <PrestationsView />
    <ContactView />
    <AProposView />
    <FooterComponent />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import AccueilView from "./views/AccueilView.vue";
import PrestationsView from "./views/PrestationsView.vue";
import ContactView from "./views/ContactView.vue";
import AProposView from "./views/AProposView.vue";
export default {
  components: {
    NavBar,
    FooterComponent,
    AccueilView,
    PrestationsView,
    ContactView,
    AProposView,
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
