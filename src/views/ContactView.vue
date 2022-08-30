<template>
  <div id="contact" class="container">
    <div class="contact-text">
      <div class="contact-text__frame"></div>
      <h2>Contacter ITFS</h2>
      <ul>
        <li>06 17 03 34 30</li>
        <li>
          Route des Vaisselets 73170
          <br />
          SAINT-PAUL
        </li>
        <li>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44605.85605461652!2d5.76116571660767!3d45.67359025047067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b0f4ebc787b7b%3A0xaeff75bea9c6a6b7!2sITFS!5e0!3m2!1sfr!2sfr!4v1661859500624!5m2!1sfr!2sfr"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
  flex-direction: column;
  @media (min-width: $desktop) {
    flex-direction: row;
    padding: 64px 16px;
  }

  .contact-text {
    width: clamp(240px, 100%, 384px);
    height: 535px;
    position: relative;
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    gap: 32px;
    border-radius: $border-radius;
    @media (min-width: $tablet) {
      padding: 24px;
    }
    & ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
      & li {
        font-size: 16px;
        font-weight: 100;
        list-style: none;
        & iframe {
          width: 100%;
          height: 290px;
          border-radius: $border-radius;
        }
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
