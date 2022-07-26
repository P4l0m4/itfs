<template>
  <div class="scene">
    <div class="scene__land"></div>
    <div class="scene__sprite"></div>
    <infinite-slide-bar
      duration="40s"
      :barStyle="{ background: '#ffff', padding: '16px 0' }"
    >
      <div class="infinite-slide-bar">
        <img src="@/assets/references/opinel_logobleu.jpg" />
        <img src="@/assets/references/inseec.png" />
        <img src="@/assets/references/ipac.png" />
        <img src="@/assets/references/gobelin.png" />
        <img src="@/assets/references/logo-uga.png" />
        <img src="@/assets/references/sup2i.png" />
        <img src="@/assets/references/egc.gif" />
        <img src="@/assets/references/AEC2.png" />
        <img src="@/assets/references/aries.png" />
        <img src="@/assets/references/cevoz.png" />
        <img src="@/assets/references/ciat.gif" />
        <img src="@/assets/references/csp-beillon.jpg" />
        <img src="@/assets/references/ikea.png" />
        <img src="@/assets/references/gabeaute.png" />
        <img src="@/assets/references/duval.jpg" />
        <img src="@/assets/references/logo-LFA.png" />
        <img src="@/assets/references/trigone.png" />
        <img src="@/assets/references/vicat.png" />
        <img src="@/assets/references/logo_imail_code.png" />
        <img src="@/assets/references/ingeos.jpg" />
        <img src="@/assets/references/areva.png" />
        <img src="@/assets/references/13bca_blason.png" />
        <img src="@/assets/references/logo_eurometa.jpg" />
        <img src="@/assets/references/Logo_La_Teppe.png" />
        <img src="@/assets/references/logo-sp-formation.png" />
        <img src="@/assets/references/Photowatt_LogoCouleur.png" />
      </div>
    </infinite-slide-bar>
  </div>
</template>
<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";

export default {
  name: "InfiniteSlider",
  components: {
    InfiniteSlideBar,
  },
};
</script>
<style lang="scss" scoped>
.scene {
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &__land {
    background-image: url("@/assets/landscape.png");
    height: 75px;
    width: 100%;
    position: absolute;
    top: 15px;
    z-index: 2;
    background-repeat: repeat-x;
    animation: slide 30s linear infinite;

    @keyframes slide {
      to {
        background-position: -1804px;
      }
    }
  }
  &__sprite {
    width: 35px;
    height: 65px;
    background-image: url("@/assets/mario.png");
    z-index: 3;
    animation: move 0.4s infinite steps(3);
    @keyframes move {
      from {
        background-position: 0px;
      }
      to {
        background-position: -100px;
      }
    }
  }
}
.infinite-slide-bar {
  display: flex;
  gap: 16px;

  & img {
    width: 80px;
    height: 50px;
    object-fit: contain;
  }
}
</style>
