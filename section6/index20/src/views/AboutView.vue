<script setup>
import { useFlash } from '@/composables/useFlash.js';

let { flash } = useFlash();
</script>

<template>
  <div class="about">
    <button @click="flash('Info', 'hello', 'info')">Click Me</button>
  </div>
</template>

<style>

</style>
