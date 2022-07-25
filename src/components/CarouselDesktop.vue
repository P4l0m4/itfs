<template>
  <div>
    <carousel-3d
      :autoplay="true"
      :autoplayHoverPause="true"
      :perspective="70"
      :width="304"
      :height="450"
      :space="300"
    >
      <slide :index="0"
        ><div class="slide slide--0">
          <div class="slide__line"></div>
          <p class="slide__text">Big Data</p>
        </div></slide
      >
      <slide :index="1"
        ><div class="slide slide--1">
          <div class="slide__line"></div>
          <p class="slide__text">Audits sécurité</p>
        </div></slide
      >
      <slide :index="2"
        ><div class="slide slide--2">
          <div class="slide__line"></div>
          <p class="slide__text">Développement Web</p>
        </div></slide
      >
      <slide :index="3"
        ><div class="slide slide--3">
          <div class="slide__line"></div>
          <p class="slide__text">Web Marketing et SEO</p>
        </div></slide
      >
      <slide :index="4"
        ><div class="slide slide--4">
          <div class="slide__line"></div>
          <p class="slide__text">Base de Données</p>
        </div></slide
      >
      <slide :index="5"
        ><div class="slide slide--5">
          <div class="slide__line"></div>
          <p class="slide__text">Réseaux et maintenance</p>
        </div></slide
      >
      <slide :index="6"
        ><div class="slide slide--6">
          <div class="slide__line"></div>
          <p class="slide__text">Infographie</p>
        </div></slide
      >
      <slide :index="7"
        ><div class="slide slide--4">
          <div class="slide__line"></div>
          <p class="slide__text">Bureautique</p>
        </div></slide
      >
    </carousel-3d>
  </div>
</template>

<style lang="scss"></style>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
