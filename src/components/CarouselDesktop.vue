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
          <p class="slide__text">Text of the paragraph</p>
        </div></slide
      >
      <slide :index="1"
        ><div class="slide slide--1">
          <div class="slide__line"></div>
          <p class="slide__text">Text of the paragraph</p>
        </div></slide
      >
      <slide :index="2"
        ><div class="slide slide--2">
          <div class="slide__line"></div>
          <p class="slide__text">Text of the paragraph</p>
        </div></slide
      >
      <slide :index="3"
        ><div class="slide slide--3">
          <div class="slide__line"></div>
          <p class="slide__text">Text of the paragraph</p>
        </div></slide
      >
      <slide :index="4"
        ><div class="slide slide--4">
          <div class="slide__line"></div>
          <p class="slide__text">Text of the paragraph</p>
        </div></slide
      >
    </carousel-3d>
  </div>
</template>

<style lang="scss">
.slide {
  // &--0 {
  //   background-image: url("");
  // }
  // &--1 {
  //   background-image: url("");
  // }
  // &--2 {
  //   background-image: url("");
  // }
  // &--3 {
  //   background-image: url("");
  // }
  // &--4 {
  //   background-image: url("");
  // }
}
</style>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
