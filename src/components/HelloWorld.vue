<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 text-focus-in">
          Welcome to the Vuetify 3 Beta
        </h1>
      </v-col>

      <v-col cols="12">
        <confirm-btn color="primary" @confirm="confirm" icon="delete" label="delete">
          <template v-slot:message>
            <p class="text-h5">
              Are you sure you want to delete this item?
            </p>
          </template>
        </confirm-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import logo from '../assets/logo.svg';
import confirmBtn from './ConfirmBtn.vue';
const confirm = () => {
  alert('confirm click!');
}
</script>
<style>
.text-focus-in {
  animation: text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.2s both;
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
</style>





