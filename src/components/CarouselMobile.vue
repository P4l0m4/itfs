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
          <p class="slide__clickable" @click="scroll('#details', 'data')"></p>
          <p class="slide__text">Big Data</p>
        </div></slide
      >
      <slide :index="1"
        ><div class="slide slide--1">
          <p
            class="slide__clickable"
            @click="scroll('#details2', 'audits')"
          ></p>
          <p class="slide__text">Audits sécurité</p>
        </div></slide
      >
      <slide :index="2"
        ><div class="slide slide--2">
          <p class="slide__clickable" @click="scroll('#details2', 'dev')"></p>
          <p class="slide__text">Développement Web</p>
        </div></slide
      >
      <slide :index="3"
        ><div class="slide slide--3">
          <p class="slide__clickable" @click="scroll('#details2', 'seo')"></p>
          <p class="slide__text">Web Marketing et SEO</p>
        </div></slide
      >
      <slide :index="4"
        ><div class="slide slide--4">
          <p class="slide__clickable" @click="scroll('#details3', 'bdd')"></p>
          <p class="slide__text">Base de Données</p>
        </div></slide
      >
      <slide :index="5"
        ><div class="slide slide--4">
          <p
            class="slide__clickable"
            @click="scroll('#details4', 'reseaux')"
          ></p>
          <p class="slide__text">Réseaux et maintenance</p>
        </div></slide
      >
      <slide :index="6"
        ><div class="slide slide--4">
          <p
            class="slide__clickable"
            @click="scroll('#details2', 'infographie')"
          ></p>
          <p class="slide__text">Infographie</p>
        </div></slide
      >
      <slide :index="7"
        ><div class="slide slide--4">
          <p
            class="slide__clickable"
            @click="scroll('#details', 'bureautique')"
          ></p>
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
<style lang="scss" scoped></style>
