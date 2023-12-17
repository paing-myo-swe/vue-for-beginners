<script setup>
import { useCounterStore } from "@/stores/CounterStore.js";

let counter = useCounterStore();

</script>

<template>
  <div class="counter">
    <h1>{{ counter.count }}</h1>
    <button 
      @click="counter.increment()"
      :disabled="!counter.remainings"
    >Increase</button>
    <p>{{ counter.remainings }}</p>
  </div>
</template>

<style>

</style>