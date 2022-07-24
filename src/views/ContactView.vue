<template>
  <div id="contact" class="container">
    <div class="contact-text">
      <div class="contact-text__frame"></div>
      <h2>Contacter ITFS</h2>
      <ul>
        <li>
          Poppins Extra Light 16px Poppins ExtraLight 16px Poppins Extra Light
        </li>
        <li>
          Poppins Extra Light 16px Poppins Extra Light 16px Poppins Extra Light
        </li>
        <li>
          Poppins Extra Light 16px Poppins Extra Light 16px Poppins Extra Light
        </li>
        <li>
          Poppins Extra Light 16px Poppins Extra Light 16px Poppins Extra Light
        </li>
        <li>
          Poppins Extra Light 16px Poppins Extra Light 16px Poppins Extra Light
        </li>
        <li>
          Poppins Extra Light 16px Poppins Extra Light 16px Poppins Extra Light
        </li>
      </ul>
    </div>

    <FormComponent />
  </div>
</template>
<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: "ContactView",
  components: {
    FormComponent,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  gap: 32px;
  padding: 64px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  @media (min-width: $desktop) {
    flex-direction: row;
    padding: 64px 24px;
  }

  .contact-text {
    width: clamp(240px, 100%, 384px);
    height: 535px;
    position: relative;
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 32px;
    border-radius: $border-radius;
    & ul {
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      & li {
        font-size: 16px;
        font-weight: 100;
      }
    }
    &__frame {
      z-index: -1;
      width: clamp(240px, 100%, 384px);
      position: absolute;
      height: 100%;
      top: 16px;
      left: 16px;
      border: 2px solid $primary-color;
      border-radius: $border-radius;
      display: none;
      @media (min-width: $desktop) {
        display: block;
      }
    }
  }
}
</style>
