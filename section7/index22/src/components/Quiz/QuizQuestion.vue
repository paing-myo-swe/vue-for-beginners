<script setup>
import { ref } from 'vue'

const answer = ref('Quiz question')
</script>

<template>
    <div style="margin-top: 5rem;">
      <form>
        <textarea :placeholder="answer" style="width: 100%; height: 300px;" disabled />
      </form>
    </div>
</template>