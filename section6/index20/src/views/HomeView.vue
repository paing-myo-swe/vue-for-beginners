<script setup>
import { useStorage } from '@/composables/useStorage.js';

let food = useStorage('food', 'pizza');
let age = useStorage('age', 27);

</script>

<template>
  <main>
    <div>
      <label>What is you favourite food?</label>
      <input type="text" v-model="food" />
    </div>
    <div>
      <label>What is you age?</label>
      <input type="text" v-model="age" />
    </div>
  </main>
</template>
