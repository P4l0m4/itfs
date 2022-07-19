<template>
  <div class="footer">
    <a class="footer__link" href="#">Mentions légales</a>
    <p>©ITFS 2022</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {},
};
</script>
<style scoped lang="scss">
//A VIRER :
@import "@/styles/_variables.scss";
//

.footer {
  font-weight: $thin;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 12px 16px;

  @media (min-width: $tablet) {
    justify-content: flex-end;
    gap: 16px;
  }
  &__link {
    text-decoration: underline;
  }
}
</style>
