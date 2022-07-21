<template>
  <div class="container">
    <!-- CAROUSEL ALLERGIQUE AU DISPLAY FLEX ET GRID -->
    <div class="carousel-mobile">
      <CarouselMobile />
    </div>
    <div class="carousel-desktop">
      <CarouselDesktop />
    </div>

    <a class="button" href="#contact">Contacter ITFS</a>
  </div>
</template>

<script>
import CarouselMobile from "@/components/CarouselMobile.vue";
import CarouselDesktop from "@/components/CarouselDesktop.vue";
export default {
  name: "PrestationsView",
  components: {
    CarouselMobile,
    CarouselDesktop,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  gap: 32px;
  padding: 64px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: rgb(43, 255, 0) solid 2px;
}
.carousel-mobile {
  width: 100%;
  @media (min-width: $tablet) {
    display: none;
  }
}
.carousel-desktop {
  display: none;
  width: 100%;
  @media (min-width: $tablet) {
    display: block;
  }
}
.button {
  text-decoration: none;
  text-align: center;
  width: 240px;
  height: 47px;
  padding: 8px;
  border: 2px solid $tertiary-color;
  background: transparent;
  border-radius: $border-radius;
  color: $tertiary-color;
  font-weight: $button-weight;
}
</style>
