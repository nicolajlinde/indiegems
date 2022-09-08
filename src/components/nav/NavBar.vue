<template>
  <nav>
    <div class="nav-logo">
      <h1>Logo</h1>
    </div>
    <ul class="nav-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 10px 25px;
}

.nav-logo {
}

.nav-menu {
}

.nav-menu li {
  list-style: none;
  display: inline;
  margin: 5px;
  padding: 10px 15px;
}
</style>
