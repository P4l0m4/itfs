<template>
  <!-- <div class="container"> -->
  <form class="form" ref="form" @submit.prevent="submit">
    <div class="form__frame"></div>
    <!-- CHAMP NOM -->
    <div class="form__group" :class="{ 'form__group--error': $v.name.$error }">
      <label class="form__group__label">Nom</label>
      <input
        class="form__group__input"
        placeholder="Michel"
        name="name"
        v-model.trim="name"
      />

      <div class="form__error" v-if="$v.name.$error && !$v.name.required">
        Ce champ est requis
      </div>

      <div class="form__error" v-if="$v.name.$error && !$v.name.maxLength">
        Maximum de caractères :
        {{ $v.name.$params.maxLength.max }}.
      </div>

      <div class="form__error" v-if="$v.name.$error && !$v.name.alpha">
        Ce champ ne peut contenir que des lettres
      </div>
    </div>
    <!-- CHAMP PRENOM -->
    <div
      class="form__group"
      :class="{ 'form__group--error': $v.firstName.$error }"
    >
      <label class="form__group__label">Prénom</label>
      <input
        class="form__group__input"
        placeholder="Dupont"
        name="firstName"
        v-model.trim="firstName"
      />

      <div
        class="form__error"
        v-if="$v.firstName.$error && !$v.firstName.required"
      >
        Ce champ est requis
      </div>

      <div
        class="form__error"
        v-if="$v.firstName.$error && !$v.firstName.maxLength"
      >
        Maximum de caractères :
        {{ $v.firstName.$params.maxLength.max }}
      </div>

      <div
        class="form__error"
        v-if="$v.firstName.$error && !$v.firstName.alpha"
      >
        Ce champ ne peut contenir que des lettres
      </div>
    </div>

    <!-- CHAMP EMAIL -->
    <div class="form__group" :class="{ 'form__group--error': $v.email.$error }">
      <label class="form__group__label">Email</label>
      <input
        class="form__group__input"
        placeholder="michel.dupont@gmail.com"
        name="email"
        v-model.trim="email"
      />

      <div class="form__error" v-if="$v.email.$error && !$v.email.required">
        Ce champ est requis
      </div>

      <div class="form__error" v-else-if="$v.email.$error && !$v.email.eùaom">
        Veuillez renseigner un email valide
      </div>
    </div>

    <!-- CHAMP MESSAGE -->
    <div
      class="form__group"
      :class="{ 'form__group--error': $v.message.$error }"
    >
      <label class="form__group__label">Message</label>
      <textarea
        class="form__group__textarea"
        placeholder="Bonjour..."
        name="message"
        v-model.trim="message"
      />

      <div class="form__error" v-if="$v.message.$error && !$v.message.required">
        Ce champ est requis
      </div>
      <div
        class="form__error"
        v-if="$v.message.$error && !$v.message.minLength"
      >
        Minimum de caractères :
        {{ $v.message.$params.minLength.min }}
      </div>
      <div
        class="form__error"
        v-if="$v.message.$error && !$v.message.maxLength"
      >
        Minimum de caractères :
        {{ $v.message.$params.maxLength.max }}
      </div>
    </div>

    <!-- CHAMP RGPD -->
    <div class="form__group" :class="{ 'form__group--error': $v.rgpd.$error }">
      <div class="form__group__checkbox-container">
        <input
          type="checkbox"
          class="form__group__input"
          v-model.trim="rgpd"
          id="rgpd"
        />
        <label for="rgpd" class="form__group__checkbox-container__text">
          Vous acceptez que les informations saisies dans ce formulaire soient
          transmises par mail à Informatique Technologie Formation Savoie
          (ITFS).
        </label>
      </div>
      <div class="form__error" v-if="$v.rgpd.$error && !$v.email.sameAs">
        Ce champ est requis
      </div>
    </div>
    <!-- <button class="form__button" type="submit" :disabled="isSubmitting">
      Envoyer
    </button> -->

    <invisible-recaptcha
      sitekey="	
6Ley-iUhAAAAAOrgByxPYeJODGtgyN-xUhbk6CVA "
      class="form__button"
      type="submit"
      :disabled="isSubmitting"
      :callback="submit"
    >
      Do something!
    </invisible-recaptcha>
    <p class="form__error" v-if="isSubmitting">Message envoyé</p>
  </form>
  <!-- </div> -->
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alpha,
} from "vuelidate/lib/validators";
import emailjs from "@emailjs/browser";
import InvisibleRecaptcha from "vue-invisible-recaptcha";

export default {
  name: "FormComponent",
  components: {
    "invisible-recaptcha": InvisibleRecaptcha,
  },
  data() {
    return {
      name: "",
      firstName: "",
      email: "",
      message: "",
      rgpd: false,
      age: 0,
      isSubmitting: false,
      // submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(40),
      alpha,
    },
    firstName: {
      required,
      maxLength: maxLength(40),
      alpha,
    },
    email: {
      required,
      email,
    },
    message: {
      required,
      minLength: minLength(50),
      maxLength: maxLength(2000),
    },
    rgpd: {
      sameAs: sameAs(() => true),
    },
  },
  methods: {
    async submit() {
      console.log("submit!");
      this.$v.$touch();

      if (!this.$v.$invalid) {
        await emailjs.sendForm(
          "service_f0ns79q",
          "template_w7w5617",
          this.$refs.form,
          "ZAG2PeOHvH8fTwjpW"
        );
        this.isSubmitting = false;
        this.name = "";
        this.firstName = "";
        this.email = "";
        this.message = "";
        this.rgpd = false;
        this.$v.$reset();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  padding: 16px;
  display: flex;
  justify-content: center;

  .form {
    width: clamp(240px, 100%, 384px);
    background-color: $primary-color;
    padding: 24px;
    gap: 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: $border-radius;

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

    &__group {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 4px;

      &__input,
      &__textarea {
        border: 2px solid $secondary-color;
        border-radius: $border-radius;
        height: 44px;
        width: 100%;
        caret-color: $secondary-color;
        padding: 12px;
        color: $secondary-color;
        font-weight: $light-weight;

        &::placeholder {
          color: $secondary-color;
          font-weight: $light-weight;
          opacity: 0.4;
        }
        &[type="checkbox"] {
          width: 50px;
          height: 20px;
          cursor: pointer;
          accent-color: $secondary-color;
        }
      }
      &__textarea {
        resize: none;
        height: 140px;
      }

      &__label {
        font-weight: $medium-weight;
        color: $secondary-color;
        position: absolute;
        background-color: $primary-color;
        padding: 0 6px;
        top: -12px;
        left: 8px;
      }
      &__checkbox-container {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;

        &__text {
          font-weight: $light-weight;
          font-size: 12px;
        }
      }
    }
    &__button {
      width: 100%;
      padding: 8px;
      background: rgb(236, 159, 5);
      // background: linear-gradient(
      //   90deg,
      //   rgba(236, 159, 5, 1) 0%,
      //   rgba(236, 86, 5, 1) 100%
      // );
      border-radius: $border-radius;
      color: $tertiary-color;
      font-weight: $button-weight;
      position: relative;

      &:hover {
        background: linear-gradient(
          90deg,
          rgba(236, 159, 5, 1) 40%,
          rgba(236, 86, 5, 1) 100%
        );
      }
    }

    &__error {
      font-weight: $light-weight;
      font-size: 12px;
    }
  }
}
</style>
