<template>
  <infinite-slide-bar
    duration="40s"
    :barStyle="{ background: '#ec9f05', padding: '8px 0' }"
  >
    <!-- <span style="color: #fff">Helo World, I love Vue Infinite Slide Bar</span> -->
    <div class="infinite-slide-bar">
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/vuejs (1).svg" alt="icone vuejs" />
        <p>Vue.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/react.svg" alt="icone reactjs" />
        <p>React.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/symfony.svg" alt="icone symfony" />
        <p>Symfony</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/wordpress.svg" alt="icone wordpress" />
        <p>Wordpress</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/android.svg" alt="icone android" />
        <p>Android</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/apple-ios.svg" alt="icone ios" />
        <p>IOS</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/microsoft-windows.svg" alt="icone windows" />
        <p>Windows</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/threejs-logo.svg" alt="icone threejs" />
        <p>Three.js</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/mysql-icon.svg" alt="icone mysql" />
        <p>MySql</p>
      </div>
      <div class="infinite-slide-bar__element">
        <img src="@/assets/icons/drupal.svg" alt="icone drupal" />
        <p>Drupal</p>
      </div>
      <div class="infinite-slide-bar__element">
        <p>PrestaShop</p>
      </div>
    </div>
  </infinite-slide-bar>
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
.infinite-slide-bar {
  display: flex;
  gap: 8px;
  &__element {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
    flex-direction: row;
    height: 30px;
    font-weight: $light-weight;
    & img {
      width: 20px;
    }
  }
}
</style>
