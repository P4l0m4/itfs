<template>
  <div id="a-propos">
    <div class="title-container"><h2>A propos</h2></div>
    <div class="horizontal-block">
      <ThreejsPicture class="canvas" />
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

    <div class="values-block">
      <!-- <h3 class="values-block__title">Nos valeurs</h3> -->
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
      <p>Nos partenaires</p>
      <div class="partners-block__frames">
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/inseec.jpeg" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/cesni.png" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/ipac.png" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/logo-uga.png" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/aries.png" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/sup2i.png" />
        </div>
        <div class="partners-block__frames__frame">
          <img src="@/assets/partners/sp-formation.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ThreejsPicture from "@/components/ThreejsPicture.vue";
export default {
  components: {
    ThreejsPicture,
  },
  // mounted() {
  //   this.rotation();
  // },
  // methods: {
  //   rotation() {
  //     const cube = document.querySelectorAll(".values-block__cubes__cube");
  //     console.log("function rotation is running");
  //     window.addEventListener("scroll", function (event) {
  //       console.log(window.scrollY);
  //       cube.style.transform = "rotateX(" + window.scrollY + "deg)";
  //       console.log(event);
  //     });
  //   },
  // },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY);
    },
  },
};
</script>

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

    .canvas {
      width: 100%;
      height: 360px;
      background-color: black;

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

  .values-block {
    width: 100%;
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
        // animation: spin 10s linear infinite;

        &__face {
          border: $secondary-color solid 2px;
          background-color: rgba(6, 6, 6, 0.8);
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
        background-size: 60px;

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

// @keyframes spin {
//   from {
//     transform: rotateX(0deg);
//   }
//   23% {
//     transform: rotateX(0deg);
//   }
//   25% {
//     transform: rotateX(90deg);
//   }
//   48% {
//     transform: rotateX(90deg);
//   }
//   50% {
//     transform: rotateX(180deg);
//   }
//   73% {
//     transform: rotateX(180deg);
//   }
//   75% {
//     transform: rotateX(270deg);
//   }
//   98% {
//     transform: rotateX(270deg);
//   }
//   to {
//     transform: rotateX(360deg);
//   }
// }
</style>
