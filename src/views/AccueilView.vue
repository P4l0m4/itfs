<template>
  <div id="accueil">
    <ParticlesComponent class="particles" />
    <div class="title">
      <p class="title__letter">I</p>
      <p class="title__letter">T</p>
      <p class="title__letter">F</p>
      <p class="title__letter">S</p>
    </div>
    <div class="parts">
      <div class="parts__part">
        <a class="button" href="#prestations"
          >Formations et Prestations
          <div class="button__frame"></div
        ></a>
      </div>
      <div class="parts__part">
        <a class="button" href="#contact"
          >Contacter ITFS
          <div class="button__frame"></div
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import ParticlesComponent from "@/components/ParticlesComponent.vue";
export default {
  components: {
    ParticlesComponent,
  },
};
</script>
<style lang="scss" scoped>
#accueil {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.parts {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media (min-width: $desktop) {
    flex-direction: row;
  }

  &__part {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(236, 159, 5);
    background: linear-gradient(
      90deg,
      rgba(236, 159, 5, 0.6) 0%,
      rgba(236, 86, 5, 0.6) 100%
    );

    &:nth-child(2) {
      background: rgb(30, 30, 30);
      background: linear-gradient(
        180deg,
        rgba(30, 30, 30, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
      & .button {
        background-color: #000000;
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
      background-color: #945009;

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
}
.particles {
  z-index: -1;
  position: absolute;
}
.title {
  font-family: "Anurati";
  position: absolute;
  inset: 0 0 0 0;
  margin: auto;
  font-size: 96px;
  flex-direction: row;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  &__letter {
    width: fit-content;
  }
  @media (min-width: $desktop) {
    flex-direction: column;
    gap: 0;
  }
}
</style>
