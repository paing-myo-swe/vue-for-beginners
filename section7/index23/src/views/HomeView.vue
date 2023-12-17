<script setup>
import Quiz from '@/components/Quiz/Quiz.vue';
import { state } from '@/stores/quizStore.js';

</script>

<template>
  <main>
    <div class="home">
      <Quiz :quiz="state" />
    </div>
  </main>
</template>

<style>
</style>
