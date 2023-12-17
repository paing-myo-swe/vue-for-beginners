<script setup>
import { state } from '@/stores/quizStore.js';
</script>

<template>
    <div class="quiz-header">
        <h1>{{ state.name }}</h1>
        <p>Welcome to you first quiz, How do you think you'll do?</p>
    </div>
</template>

<style>
.quiz-header {
    margin: 10px auto;
}
</style>