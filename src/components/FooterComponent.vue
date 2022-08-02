<template>
  <div class="footer">
    <a class="footer__link" href="https://docdro.id/w6THdQB"
      >Mentions légales</a
    >
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
.footer {
  font-weight: $light-weight;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: black;
  margin-bottom: 80px;

  @media (min-width: $tablet) {
    justify-content: flex-end;
    gap: 16px;
    margin-bottom: unset;
    padding-right: 100px;
  }
  &__link {
    text-decoration: underline;
    color: $tertiary-color;
  }
}
</style>
