<script setup>
import Quiz from '@/components/Quiz/Quiz.vue';
</script>

<template>
  <main>
    <div class="home">
      <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
    </div>
  </main>
</template>

<style>
</style>
