<script setup>
import QuizHeader from '@/components/Quiz/QuizHeader.vue';
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue';
import QuizFooter from '@/components/Quiz/QuizFooter.vue';
import { provide } from 'vue';

let props = defineProps({
    quiz: Object
});

provide('quiz', props.quiz);

</script>

<template>
    <QuizHeader />
    <QuizQuestion />
    <QuizFooter />
</template>