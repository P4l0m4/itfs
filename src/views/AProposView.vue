<template>
  <div id="a-propos">
    <div class="title-container"><h2>A propos</h2></div>
    <div class="horizontal-block">
      <canvas></canvas>
      <div class="horizontal-block__text">
        <h3 class="horizontal-block__text__title">Qui suis-je ?</h3>
        <p class="horizontal-block__text__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          placeat, architecto omnis iure, voluptatum illum ratione enim culpa
          nihil repudiandae deserunt ex porro possimus? Maiores temporibus ipsa
          autem error nihil repudiandae deserunt ex porro possimus? Maiores
          temporibus ipsa autem error nihil repudiandae deserunt ex porro
          possimus? Maiores temporibus ipsa autem error
        </p>
      </div>
    </div>
    <div class="vertical-blocks-container">
      <div class="vertical-block">
        <canvas></canvas>

        <h3 class="vertical-block__title">Texte du block</h3>
      </div>
      <div class="vertical-block">
        <canvas></canvas>

        <h3 class="vertical-block__title">Texte du block</h3>
      </div>
      <div class="vertical-block">
        <canvas></canvas>

        <h3 class="vertical-block__title">Texte du block</h3>
      </div>
    </div>
    <div class="horizontal-block">
      <div class="horizontal-block__text">
        <h3 class="horizontal-block__text__title second-block">
          Texte du block
        </h3>
        <p class="horizontal-block__text__subtitle second-block">
          Lorem ipsum dolor sit amet con sectetur adipis icing elit. Nulla
          placeat, archi tecto omnis iure, volu ptatum illum rati one enim culpa
          nihil repu dian dae des erunt ex porro poss imus? Maiores temp oribus
          ipsa autem error nihil repudi andae dese runt ex porro poss imus? Maio
          res tempor ibus ipsa autem error nihil repud iandae dese runt ex porro
          autem error nihil repud ian dae dese runt ex porro poss imus? Maiores
          tempo ribus ipsa autem error nihil repud iandae dese runt ex porro
        </p>
      </div>
      <canvas></canvas>
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
      .second-block {
        text-align: right;
      }

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
        // width: clamp(80px, 100%, 200px);
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
}
</style>
