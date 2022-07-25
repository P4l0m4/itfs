<template>
  <div class="container" id="prestations">
    <div class="title-container">
      <h2>Formations certifiantes et Audits</h2>
    </div>

    <div class="carousel-mobile">
      <CarouselMobile />
    </div>
    <div class="carousel-desktop">
      <CarouselDesktop />
    </div>
    <div class="catalogue">
      <details class="catalogue__card" open>
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/monitor.svg"
          />Bureautique
        </summary>
        <ul>
          <li>Excel</li>
          <li>Powerpoint</li>
          <li>Word</li>
        </ul>
      </details>
      <details class="catalogue__card" open>
        <summary>
          <img class="catalogue__card__icon" src="@/assets/database.svg" />Big
          Data
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details class="catalogue__card" open>
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/code-tags.svg"
          />Développement Web
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details class="catalogue__card" open>
        <summary>
          <img class="catalogue__card__icon" src="@/assets/lock.svg" />Audits
          sécurité
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details class="catalogue__card">
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/draw.svg"
          />Infographie
        </summary>
        <ul>
          <li>Photoshop</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details class="catalogue__card">
        <summary>
          <img class="catalogue__card__icon" src="@/assets/magnify.svg" />Web
          marketing et SEO
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details class="catalogue__card">
        <summary>
          <img class="catalogue__card__icon" src="@/assets/database.svg" />Base
          de données
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details class="catalogue__card">
        <summary>
          <img class="catalogue__card__icon" src="@/assets/wifi.svg" />Réseaux
          et maintenance
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
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

  .title-container {
    padding: 64px 0 24px;
    width: 100%;
    display: flex;
    width: clamp(240px, 100%, 384px);
    justify-content: center;
    @media (min-width: $tablet) {
      width: clamp(240px, 100%, 800px);
    }
    & h2 {
      text-transform: uppercase;
    }
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
  .catalogue {
    width: 100%;
    display: grid;
    padding: 16px;
    gap: 24px;
    justify-content: center;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: $desktop) {
      grid-template-columns: repeat(4, 1fr);
      padding: 24px 170px;
    }
    &__card {
      width: clamp(250px, 100%, 500px);
      background-color: $primary-color;
      padding: 16px;
      border-radius: $border-radius;
      cursor: pointer;
      height: fit-content;

      &__icon {
        width: 20px;
        margin-right: 8px;
      }
      & summary {
        display: flex;
        align-items: center;
      }
      & ul {
        padding: 8px;
        list-style: inside url("@/assets/check.svg");
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: $light-weight;
      }
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
