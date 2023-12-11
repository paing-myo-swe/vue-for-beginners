<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import { ref } from 'vue';

let message = ref("Hello World");

setTimeout(() => {
  message.value = "Changed";
},3000);

</script>

<template>
  <main>
    <TheWelcome />
    {{ message }}
    <input type="text" v-model="message"/>
  </main>
</template>
