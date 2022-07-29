<template>
  <div class="container" id="prestations">
    <div class="title-container">
      <h2>Formations certifiantes et Audits</h2>
    </div>

    <div class="carousel-mobile">
      <CarouselMobile @toggle="openCard" />
    </div>
    <div class="carousel-desktop">
      <CarouselDesktop @toggle="openCard" />
    </div>
    <a class="button" href="#contact" id="details"
      >Contacter ITFS
      <div class="button__frame"></div
    ></a>
    <div class="catalogue" id="catalogue">
      <details
        class="catalogue__card"
        :open="opened === 'all' || opened === 'bureautique' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'bureautique' }"
        aria-label="voir les détails sur la formation bureautique"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/monitor.svg"
            alt="icone bureautique"
          />Bureautique
        </summary>
        <ul>
          <li>Excel</li>
          <li>Powerpoint</li>
          <li>Word</li>
          <li>Access</li>
        </ul>
      </details>
      <details
        class="catalogue__card"
        :open="opened === 'all' || opened === 'data' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'data' }"
        aria-label="voir les détails sur la formation big data"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/database.svg"
            alt="icone base de données"
          />Big Data
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>

      <details
        class="catalogue__card"
        id="details2"
        :open="opened === 'all' || opened === 'dev' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'dev' }"
        aria-label="voir les détails sur la formation développement web"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/code-tags.svg"
            alt="icone développement web"
          />Développement Web
        </summary>
        <ul>
          <li>HTML / CSS / JS</li>
          <li>WordPress</li>
          <li>PrestaShop</li>
          <li>UX design</li>
        </ul>
      </details>
      <details
        class="catalogue__card"
        :open="opened === 'all' || opened === 'seo' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'seo' }"
        aria-label="voir les détails sur la formation web marketing et S.E.O"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/magnify.svg"
            alt="icone seo"
          />Web marketing et SEO
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>

      <details
        class="catalogue__card"
        id="details3"
        :open="opened === 'all' || opened === 'infographie' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'infographie' }"
        aria-label="voir les détails sur la formation infographie"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/draw.svg"
            alt="icone infographie"
          />Infographie
        </summary>
        <ul>
          <li>PhotoShop</li>
          <li>InDesign</li>
          <li>Illustrator</li>
          <li>After Effects</li>
          <li>Première Pro</li>
        </ul>
      </details>
      <details
        class="catalogue__card"
        :open="opened === 'all' || opened === 'audits' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'audits' }"
        aria-label="voir les détails sur les audits sécurité"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/lock.svg"
            alt="icone cadenas"
          />Audits sécurité
        </summary>
        <ul>
          <li>Matériel Cisco</li>
          <li>Test d'intrusion</li>
          <li>Système d'information</li>
          <li>Configuration sans-fil</li>
          <li>ESX et VOIP (Voix sur IP)</li>
        </ul>
      </details>

      <details
        class="catalogue__card last-wrapper"
        id="details4"
        :open="opened === 'all' || opened === 'bdd' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'bdd' }"
        aria-label="voir les détails sur la formation base de données"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/database.svg"
            alt="icone base de données"
          />Base de données
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
      <details
        id="reseaux"
        class="catalogue__card"
        :open="opened === 'all' || opened === 'reseaux' ? true : null"
        :class="{ 'catalogue__card--opened': opened === 'reseaux' }"
        aria-label="voir les détails sur la formation réseaux et maintenance"
      >
        <summary>
          <img
            class="catalogue__card__icon"
            src="@/assets/icons/wifi.svg"
            alt="icone réseau wifi"
          />Réseaux et maintenance
        </summary>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
      </details>
    </div>
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
  data() {
    return {
      opened: "all",
    };
  },
  methods: {
    openCard(value) {
      this.opened = value;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  gap: 32px;
  padding: 0 16px;
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
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    gap: 16px;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(100px, auto);

    @media (min-width: $tablet) {
      padding: 24px 170px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $desktop) {
      padding: 24px 170px;
      grid-template-columns: repeat(4, 1fr);
    }
    &__card {
      width: 100%;
      background-color: $primary-color;
      padding: 16px;
      border-radius: $border-radius;
      cursor: pointer;
      height: fit-content;
      max-width: 500px;

      &__icon {
        width: 20px;
        margin-right: 8px;
      }
      & summary {
        display: flex;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        // overflow-wrap: nowrap;
        white-space: nowrap;
      }
      & ul {
        padding: 8px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: $light-weight;
        white-space: nowrap;
      }
      &--opened {
        border: $secondary-color solid 2px;
      }
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

// .last-wrapper {
//   @media (min-width: $desktop) {
//     flex-direction: row;
//     max-width: 400px !important;
//   }
// }
</style>
