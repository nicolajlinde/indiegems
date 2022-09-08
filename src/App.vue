<template>
  <section id="navbar-wrapper">
    <nav-bar></nav-bar>
  </section>
  <div id="content">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/nav/NavBar.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
}

#navbar-wrapper {
  border-bottom: 1px solid black;
}

#content {
  margin: 0 auto;
  width: 1200px;
}
</style>
