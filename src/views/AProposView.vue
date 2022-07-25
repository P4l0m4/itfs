<template>
  <div id="a-propos">
    <div class="title-container"><h2>A propos</h2></div>
    <div class="horizontal-block">
      <canvas></canvas>
      <div class="horizontal-block__text">
        <h3 class="horizontal-block__text__title">Qui sommes nous ?</h3>
        <p class="horizontal-block__text__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi animi
          modi doloribus veritatis repudiandae earum aliquid corporis, ex
          tempore, adipisci unde magni voluptate eos eligendi corrupti. Quidem
          libero architecto alias!
        </p>
      </div>
    </div>
    <div class="vertical-blocks-container">
      <div class="vertical-block">
        <canvas></canvas>

        <h3 class="vertical-block__title">Qualité</h3>
      </div>
      <div class="vertical-block">
        <canvas></canvas>

        <h3 class="vertical-block__title">Passion</h3>
      </div>
      <div class="vertical-block">
        <canvas></canvas>

        <h3 class="vertical-block__title">Bienveillance</h3>
      </div>
    </div>
    <div class="references-block">
      <h3 class="references-block__title">Références</h3>
      <div class="references-block__images">
        <img src="@/assets/references/AEC2.png" />
        <img src="@/assets/references/aries.png" />
        <img src="@/assets/references/cevoz.png" />
        <img src="@/assets/references/ciat.gif" />
        <img src="@/assets/references/csp-beillon.jpg" />
        <img src="@/assets/references/egc.gif" />
        <img src="@/assets/references/gabeaute.png" />
        <img src="@/assets/references/gobelin.png" />
        <img src="@/assets/references/ingeos.jpg" />
        <img src="@/assets/references/inseec.png" />
        <img src="@/assets/references/ipac.png" />
        <img src="@/assets/references/logo_eurometa.jpg" />
        <img src="@/assets/references/Logo_La_Teppe.png" />
        <img src="@/assets/references/logo-sp-formation.png" />
        <img src="@/assets/references/logo-uga.png" />
        <img src="@/assets/references/opinel_logobleu.jpg" />
        <img src="@/assets/references/Photowatt_LogoCouleur.png" />
        <img src="@/assets/references/pizza-savoyarde.png" />
        <img src="@/assets/references/sup2i.png" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#a-propos {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  gap: 64px;
  justify-content: center;
  align-items: center;
  .title-container {
    width: 100%;
    display: flex;
    width: clamp(240px, 100%, 384px);

    @media (min-width: $tablet) {
      width: clamp(240px, 100%, 800px);
    }
  }

  .horizontal-block {
    width: clamp(240px, 100%, 384px);
    display: flex;
    gap: 24px;
    flex-direction: column;

    @media (min-width: $tablet) {
      flex-direction: row;
      width: clamp(240px, 100%, 800px);
    }

    canvas {
      background-color: black;
      width: 100%;
      height: 360px;

      @media (min-width: $tablet) {
        width: 200px;
        height: 240px;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: flex-end;

      &__title {
        font-size: 20px;
        font-weight: $medium-weight;
      }

      &__subtitle {
        font-weight: $light-weight;
        text-align: justify;
      }
    }
  }
  .vertical-blocks-container {
    width: clamp(240px, 100%, 384px);
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (min-width: $tablet) {
      width: clamp(240px, 100%, 800px);
    }

    .vertical-block {
      width: 100%;
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      canvas {
        background-color: black;
        width: 100%;
        height: 110px;
        @media (min-width: $tablet) {
          height: 190px;
        }
        @media (min-width: $desktop) {
          width: 100%;
          height: 240px;
        }
      }

      &__title {
        font-size: 20px;
        font-weight: $medium-weight;
        text-align: center;
      }
    }
  }

  .references-block {
    &__title {
      font-size: 20px;
      font-weight: $medium-weight;
      width: 100%;
      padding: 0 170px;
    }
    &__images {
      width: 100%;
      border: purple solid 5px;
      background-color: $tertiary-color;
      display: grid;
      grid-auto-rows: minmax(100px, auto);
      grid-template-columns: repeat(1, 1fr);
      gap: 8px;
      padding: 16px 170px;

      @media (min-width: $tablet) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (min-width: $desktop) {
        grid-template-columns: repeat(8, 1fr);
      }

      & img {
        border: green solid 2px;
        width: 100%;
      }
    }
  }
}
</style>
