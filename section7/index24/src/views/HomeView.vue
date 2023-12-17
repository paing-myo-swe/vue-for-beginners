<script setup>
import Quiz from '@/components/Quiz/Quiz.vue';
import { state } from '@/stores/quizStore.js';

</script>

<template>
  <div class="home">
    <Quiz :quiz="state" />
  </div>
</template>

<style>
</style>
