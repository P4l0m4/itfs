<template>
  <div>
    <carousel-3d
      :autoplay="true"
      :autoplayHoverPause="true"
      :perspective="80"
      :width="304"
      :height="450"
      :space="300"
    >
      <slide :index="0"> Slide 1 </slide>
      <slide :index="1"> Slide 2</slide>
      <slide :index="2"> Slide 3</slide>
      <slide :index="3"> Slide 4</slide>
      <slide :index="4"> Slide 5</slide>
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
