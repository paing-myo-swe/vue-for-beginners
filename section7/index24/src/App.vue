<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header>
      <nav class="topnav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
      </nav>
    </header>
    
    <RouterView />
  </div>
  
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
