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
      <div class="parts__part"></div>
      <div class="parts__part"></div>
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

  &__part {
    width: 100%;
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
  flex-direction: column;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &__letter {
    width: fit-content;
  }
}
</style>
