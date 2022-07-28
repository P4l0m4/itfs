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
          <p
            class="slide__clickable"
            @click="scroll('#details', 'data')"
            aria-label="voir les détails sur la formation big data"
          ></p>
          <p class="slide__text">Big Data</p>
        </div>
      </slide>
      <slide :index="1"
        ><div class="slide slide--1">
          <p
            class="slide__clickable"
            @click="scroll('#details2', 'audits')"
            aria-label="voir les détails sur les audits sécurité"
          ></p>
          <p class="slide__text">Audits sécurité</p>
        </div></slide
      >
      <slide :index="2"
        ><div class="slide slide--2">
          <p
            class="slide__clickable"
            @click="scroll('#details', 'dev')"
            aria-label="voir les détails sur la formation développement web"
          ></p>
          <p class="slide__text">Développement Web</p>
        </div></slide
      >
      <slide :index="3"
        ><div class="slide slide--3">
          <p
            class="slide__clickable"
            @click="scroll('#details', 'seo')"
            aria-label="voir les détails sur la formation web marketing et S.E.O"
          ></p>
          <p class="slide__text">Web Marketing et SEO</p>
        </div></slide
      >
      <slide :index="4"
        ><div class="slide slide--4">
          <p
            class="slide__clickable"
            @click="scroll('#details2', 'bdd')"
            aria-label="voir les détails sur la formation base de données"
          ></p>
          <p class="slide__text">Base de Données</p>
        </div></slide
      >
      <slide :index="5"
        ><div class="slide slide--5">
          <p
            class="slide__clickable"
            @click="scroll('#details2', 'reseaux')"
            aria-label="voir les détails sur la formation réseaux et maintenance"
          ></p>
          <p class="slide__text">Réseaux et maintenance</p>
        </div></slide
      >
      <slide :index="6"
        ><div class="slide slide--6">
          <p
            class="slide__clickable"
            @click="scroll('#catalogue', 'infographie')"
            aria-label="voir les détails sur la formation infographie"
          ></p>
          <p class="slide__text">Infographie</p>
        </div></slide
      >
      <slide :index="7"
        ><div class="slide slide--4">
          <p
            class="slide__clickable"
            @click="scroll('#details', 'bureautique')"
            aria-label="voir les détails sur la formation bureautique"
          ></p>
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
  data() {
    return {
      opened: "all",
    };
  },

  methods: {
    scroll(anchor, name) {
      document.querySelector(anchor).scrollIntoView({
        behavior: "smooth",
      });
      this.opened = name;

      this.$emit("toggle", this.opened);
    },
  },
};
</script>
