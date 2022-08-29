<template>
  <div class="footer">
    <a
      class="footer__link"
      href="https://docdro.id/linZ1mu"
      aria-label="consulter les mentions légales"
      >Mentions légales</a
    >
    <p>©ITFS 2022</p>
    <a
      class="footer__link"
      href="https://www.linkedin.com/company/itfs73/"
      aria-label="voir notre page linkedIn"
      ><img src="@/assets/icons/linkedin.svg" alt="logo linkedin" /></a
    ><a
      class="footer__link"
      href="https://www.youtube.com/channel/UCAUlgZs6qCHZTuakfl0hWPg"
      aria-label="voir notre chaine youtube"
      ><img src="@/assets/icons/youtube.svg" alt="logo youtube"
    /></a>
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
    display: flex;
    align-items: center;
    & img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
