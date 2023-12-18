<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView class="m-2 p-2" />
</template>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a.router-link-exact-active {
  color: var(--color-text);
}

.topnav a.router-link-exact-active:hover {
  background-color: transparent;
}

.topnav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:first-of-type {
  border: 0;
}
</style>
