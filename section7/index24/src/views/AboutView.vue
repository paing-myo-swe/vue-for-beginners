<script setup>
import { useFlash } from '@/composables/useFlash.js';
import { counter } from "@/stores/counterStore.js";

let { flash } = useFlash();
</script>

<template>
  <div class="about">
    <p>Current Count is {{ counter.count }}</p>
  </div>
</template>

<style>

</style>