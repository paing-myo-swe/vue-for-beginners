<script setup>
import { state } from '@/stores/quizStore.js';
</script>

<template>
    <div>
        <h5>{{ state.name }}</h5>
        <button @click="state.name = 'New Quiz'">{{ state.name }}</button>
        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>