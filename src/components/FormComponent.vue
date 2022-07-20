<template>
  <div class="container">
    <form class="form" @submit.prevent="submit">
      <!-- CHAMP NOM -->
      <div
        class="form__group"
        :class="{ 'form__group--error': $v.name.$error }"
      >
        <label class="form__group__label">Nom</label>
        <input
          class="form__group__input"
          placeholder="Michel"
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

        <p class="form__error" v-if="isSubmitting">Sending...</p>
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

        <p class="form__error" v-if="isSubmitting">Sending...</p>
      </div>

      <!-- CHAMP EMAIL -->
      <div
        class="form__group"
        :class="{ 'form__group--error': $v.email.$error }"
      >
        <label class="form__group__label">Email</label>
        <input
          class="form__group__input"
          placeholder="michel.dupont@gmail.com"
          v-model.trim="email"
        />

        <div class="form__error" v-if="$v.email.$error && !$v.email.required">
          Ce champ est requis
        </div>
        <div class="form__error" v-if="$v.email.$error && !$v.email.minLength">
          Minimum de caractères : {{ $v.email.$params.minLength.min }}
        </div>
        <div class="form__error" v-if="$v.email.$error && !$v.email.maxLength">
          Maximum de caractères : {{ $v.email.$params.maxLength.max }}
        </div>

        <p class="form__error" v-if="isSubmitting">Sending...</p>
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
          v-model.trim="message"
        />

        <div
          class="form__error"
          v-if="$v.message.$error && !$v.message.required"
        >
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

        <p class="form__error" v-if="isSubmitting">Sending...</p>
      </div>

      <!-- CHAMP RGPD -->
      <div
        class="form__group"
        :class="{ 'form__group--error': $v.rgpd.$error }"
      >
        <div class="form__group__checkbox-container">
          <input
            type="checkbox"
            class="form__group__input"
            v-model.trim="rgpd"
          />
          <p class="form__group__checkbox-container__text">
            Vous acceptez que les informations saisies dans ce formulaire soient
            transmises par mail à Informatique Technologie Formation Savoie
            (ITFS).
          </p>
        </div>
        <div class="form__error" v-if="$v.rgpd.$error && !$v.email.sameAs">
          Ce champ est requis
        </div>
      </div>
      <button class="form__button" type="submit" :disabled="isSubmitting">
        Envoyer
      </button>
      <p class="form__error" v-if="isSubmitting">Sending...</p>
    </form>
  </div>
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

export default {
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
      minLength: minLength(4),
      maxLength: maxLength(40),
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
    submit() {
      console.log("submit!");
      this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.submitStatus = "ERROR";
      // } else {
      //   // do your submit logic here
      //   this.submitStatus = "PENDING";
      //   setTimeout(() => {
      //     this.submitStatus = "OK";
      //   }, 500);
      // }
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  width: 100vw;
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: $primary-color;

  .form {
    width: clamp(300px, 100%, 450px);
    gap: 16px;
    display: flex;
    flex-direction: column;

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
        }
        &[type="checkbox"] {
          width: 100px;
          height: 40px;
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
      background: linear-gradient(
        90deg,
        rgba(236, 159, 5, 1) 0%,
        rgba(236, 86, 5, 1) 100%
      );
      border-radius: $border-radius;
      color: $tertiary-color;
      font-weight: $button-weight;
    }

    &__error {
      font-weight: $light-weight;
      font-size: 12px;
    }
  }
}
</style>
