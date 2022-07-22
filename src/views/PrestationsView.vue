<template>
  <div class="container" id="prestations">
    <!-- CAROUSEL ALLERGIQUE AU DISPLAY FLEX ET GRID -->
    <div class="carousel-mobile">
      <CarouselMobile />
    </div>
    <div class="carousel-desktop">
      <CarouselDesktop />
    </div>

    <a class="button" href="#contact"
      >Contacter ITFS
      <div class="button__frame"></div
    ></a>
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
  width: 100%;
  gap: 32px;
  padding: 0 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    position: relative;
    background-color: $primary-color;
    &:hover > .button__frame {
      z-index: -1;
      width: 240px;
      height: 47px;
      position: absolute;
      top: 8px;
      left: 8px;
      border: 2px solid $tertiary-color;
      border-radius: $border-radius;
    }
  }
}
</style>
