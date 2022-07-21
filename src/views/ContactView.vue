<template>
  <div id="contact" class="container">
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
<style lang="scss">
.container {
  width: 100vw;
  gap: 32px;
  padding: 64px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: red solid 2px;
}
</style>
