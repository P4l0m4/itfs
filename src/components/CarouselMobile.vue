<template>
  <div>
    <carousel-3d
      :autoplay="true"
      :autoplayHoverPause="true"
      :perspective="60"
      :width="220"
      :height="360"
      :space="140"
    >
      <slide :index="0"
        ><div class="slide slide--0">
          <p class="slide__clickable" @click="scrollToDetails"></p>
          <p class="slide__text">Big Data</p>
        </div></slide
      >
      <slide :index="1"
        ><div class="slide slide--1">
          <p class="slide__clickable" @click="scrollToDetails3"></p>
          <p class="slide__text">Audits sécurité</p>
        </div></slide
      >
      <slide :index="2"
        ><div class="slide slide--2">
          <p class="slide__clickable" @click="scrollToDetails2"></p>
          <p class="slide__text">Développement Web</p>
        </div></slide
      >
      <slide :index="3"
        ><div class="slide slide--3">
          <p class="slide__clickable" @click="scrollToDetails2"></p>
          <p class="slide__text">Web Marketing et SEO</p>
        </div></slide
      >
      <slide :index="4"
        ><div class="slide slide--4">
          <p class="slide__clickable" @click="scrollToDetails4"></p>
          <p class="slide__text">Base de Données</p>
        </div></slide
      >
      <slide :index="5"
        ><div class="slide slide--4">
          <p class="slide__clickable" @click="scrollToDetails4"></p>
          <p class="slide__text">Réseaux et maintenance</p>
        </div></slide
      >
      <slide :index="6"
        ><div class="slide slide--4">
          <p class="slide__clickable" @click="scrollToDetails2"></p>
          <p class="slide__text">Infographie</p>
        </div></slide
      >
      <slide :index="7"
        ><div class="slide slide--4">
          <p class="slide__clickable" @click="scrollToDetails"></p>
          <p class="slide__text">Bureautique</p>
        </div></slide
      >
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  methods: {
    scrollToDetails() {
      document.querySelector("#details").scrollIntoView({
        behavior: "smooth",
      });
      console.log("scrolled");
    },
    scrollToCatalogue() {
      document.querySelector("#catalogue").scrollIntoView({
        behavior: "smooth",
      });
      console.log("scrolledCatalogue");
    },
    scrollToDetails2() {
      document.querySelector("#details2").scrollIntoView({
        behavior: "smooth",
      });
      console.log("scrolled2");
    },
    scrollToDetails3() {
      document.querySelector("#details3").scrollIntoView({
        behavior: "smooth",
      });
      console.log("scrolled3");
    },
    scrollToDetails4() {
      document.querySelector("#details4").scrollIntoView({
        behavior: "smooth",
      });
      console.log("scrolled4");
    },
  },
};
</script>
<style lang="scss" scoped></style>
