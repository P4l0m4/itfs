<template>
  <div id="app">
    <NavBar />
    <AccueilView />
    <PrestationsView />
    <ContactView />
    <AProposView />
    <FooterComponent />
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
<style lang="scss"></style>
