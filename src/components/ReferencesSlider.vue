<template>
  <div class="scene">
    <div class="scene__sprite"></div>
    <div class="scene__land"></div>
    <infinite-slide-bar
      duration="50s"
      :barStyle="{ background: 'rgb(55, 55,55, 0.8)', padding: '16px 0' }"
    >
      <div class="infinite-slide-bar">
        <img src="@/assets/references/opinel_logobleu.jpg" alt="logo opinel" />
        <img src="@/assets/references/inseec.png" alt="logo inseec" />
        <img src="@/assets/references/ipac.png" alt="logo ipac" />
        <img src="@/assets/references/gobelin.png" alt="logo gobelins" />
        <img
          src="@/assets/references/logo-uga.png"
          alt="logo université grenoble"
        />
        <img src="@/assets/references/sup2i.png" alt="logo sup2i" />
        <img src="@/assets/references/egc.gif" alt="logo egc" />
        <img src="@/assets/references/AEC2.png" alt="logo aec2" />
        <img src="@/assets/references/aries.png" alt="logo aries" />
        <img src="@/assets/references/cevoz.png" alt="logo cevoz" />
        <img src="@/assets/references/ciat.gif" alt="logo ciat" />
        <img src="@/assets/references/csp-beillon.jpg" alt="logo csp-beillon" />
        <img src="@/assets/references/ikea.png" alt="logo ikea" />
        <img src="@/assets/references/gabeaute.png" alt="logo gabeauté" />
        <img src="@/assets/references/duval.jpg" alt="logo duval" />
        <img src="@/assets/references/logo-LFA.png" alt="logo lfa" />
        <img src="@/assets/references/trigone.png" alt="logo trigone" />
        <img src="@/assets/references/vicat.png" alt="logo vicat" />
        <img src="@/assets/references/logo_imail_code.png" alt="logo Imail" />
        <img src="@/assets/references/ingeos.jpg" alt="logo ingeos" />
        <img src="@/assets/references/areva.png" alt="logo areva" />
        <img src="@/assets/references/13bca_blason.png" alt="logo 13ème bca" />
        <img src="@/assets/references/logo_eurometa.jpg" alt="logo eurometa" />
        <img src="@/assets/references/Logo_La_Teppe.png" alt="logo la teppe" />
        <img
          src="@/assets/references/logo-sp-formation.png"
          alt="logo sp-formation"
        />
        <img
          src="@/assets/references/Photowatt_LogoCouleur.png"
          alt="logo photowatt"
        />
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
    background-image: url("@/assets/brick.png");
    background-size: 35px;
    height: 35px;
    width: 100%;
    background-repeat: repeat;
    animation: slide 30s linear infinite;

    @keyframes slide {
      to {
        background-position: -1804px;
      }
    }
  }
  &__sprite {
    width: 35px;
    height: 50px;
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
  opacity: 0.8;

  & img {
    width: 100px;
    height: 80px;
    object-fit: contain;
    border: white solid 8px;
    background-color: white;
    border-radius: $border-radius;
  }
}
</style>
