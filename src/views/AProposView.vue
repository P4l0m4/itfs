<template>
  <div id="a-propos">
    <div class="title-container"><h2>A propos</h2></div>
    <div class="horizontal-block">
      <div class="horizontal-block__text">
        <div class="map" src="@/assets/map.png" alt="carte itfs"></div>
        <h3 class="horizontal-block__text__title">Qui sommes nous ?</h3>
        <p class="horizontal-block__text__subtitle">
          ITFS est une entreprise française originaire de la Savoie. Notre
          objectif : permettre aux passionnés de trouver leur voie et gagner en
          compétences afin qu'ils s'intègrent durablement au marché du travail.
          Nous avons à coeur de donner une chance à ceux qui se donnent les
          moyens de leur réussite afin d'en faire des professionnels qualifiés
          et aguerris. Dans cette optique, nous proposons de nombreuses
          formations en lien avec le web et la cybersécurité. Celles-ci sont
          destinées aux débutants en reconversion professionnelle ou non, mais
          également à ceux qui souhaitent aller plus loin et développer leurs
          connaissances.
        </p>
      </div>
    </div>

    <div class="values-block">
      <div class="values-block__cubes">
        <div class="values-block__cubes__cube">
          <div class="values-block__cubes__cube__face front">Qualité</div>
          <div class="values-block__cubes__cube__face back">Passion</div>
          <div class="values-block__cubes__cube__face left"></div>
          <div class="values-block__cubes__cube__face right"></div>
          <div class="values-block__cubes__cube__face top">Bienveillance</div>
          <div class="values-block__cubes__cube__face bottom">Créativité</div>
        </div>
        <div class="values-block__cubes__cube">
          <div class="values-block__cubes__cube__face front">Créativité</div>
          <div class="values-block__cubes__cube__face back">Qualité</div>
          <div class="values-block__cubes__cube__face left"></div>
          <div class="values-block__cubes__cube__face right"></div>
          <div class="values-block__cubes__cube__face top">Passion</div>
          <div class="values-block__cubes__cube__face bottom">
            Bienveillance
          </div>
        </div>
        <div class="values-block__cubes__cube">
          <div class="values-block__cubes__cube__face front">Bienveillance</div>
          <div class="values-block__cubes__cube__face back">Créativité</div>
          <div class="values-block__cubes__cube__face left"></div>
          <div class="values-block__cubes__cube__face right"></div>
          <div class="values-block__cubes__cube__face top">Qualité</div>
          <div class="values-block__cubes__cube__face bottom">Passion</div>
        </div>
      </div>
    </div>
    <div class="partners-block">
      <h3>Nos partenaires</h3>
      <div class="partners-block__frames">
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/inseec.jpeg" alt="logo inseec" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/cesni.png" alt="logo cesni" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/ipac.png" alt="logo ipac" />
        </div>
        <div class="partners-block__frames__frame">
          <img
            src="@/assets/partners/logo-uga.png"
            alt="logo université grenoble alpes"
          />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/aries.png" alt="logo aries" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/sup2i.png" alt="logo sup2i" />
        </div>
        <div class="partners-block__frames__frame">
          <img
            src="@/assets/partners/sp-formation.jpg"
            alt="logo sp-formation"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>

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

    .map {
      width: 100%;
      height: 360px;
      background-image: url("@/assets/map.png");
      background-position: center bottom;
      background-size: cover;
      border-radius: $border-radius;

      @media (min-width: $tablet) {
        width: 100%;
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

  .values-block {
    padding: 24px;

    @media (min-width: $tablet) {
      padding: 24px 170px;
    }

    &__cubes {
      width: 100%;
      perspective: 1500px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;

      &__cube {
        width: 250px;
        height: 100px;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(0deg);

        &__face {
          border: $secondary-color solid 2px;
          background-color: rgba(11, 11, 11, 0.871);
          position: absolute;
          width: 250px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          & img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .partners-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (min-width: $desktop) {
      padding: 24px 170px;
    }

    & p {
      font-size: 20px;
    }
    &__frames {
      width: 100%;
      min-width: 100px;
      display: flex;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;

      &__frame {
        padding: 8px;
        border-radius: $border-radius;
        height: 100px;
        background-image: url("@/assets/brick.png");
        background-repeat: repeat;
        background-size: 40px;

        & img {
          border-radius: $border-radius;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

.top {
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

.right {
  transform: rotateY(90deg) translateZ(200px);
  width: 100px !important;
}
.left {
  transform: rotateY(-90deg) translateZ(50px);
  width: 100px !important;
}

.front {
  transform: rotateX(0deg) translateZ(50px);
}
.back {
  transform: rotateX(-180deg) translateZ(50px);
}
</style>
