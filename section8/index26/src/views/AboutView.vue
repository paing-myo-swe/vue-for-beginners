<script setup>
import { useFlash } from '@/composables/useFlash.js';
import { useCounterStore } from "@/stores/CounterStore.js";

let counter = useCounterStore();
</script>

<template>
  <div class="about">
    <p>Current Count is {{ counter.count }}</p>
  </div>
</template>

<style>

</style>