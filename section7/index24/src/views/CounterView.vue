<script setup>
import { counter } from "@/stores/counterStore.js";

</script>

<template>
  <div class="counter">
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increase()">Increase</button>
  </div>
</template>

<style>

</style>