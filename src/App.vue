<template>
  <section id="navbar-wrapper">
    <nav-bar></nav-bar>
  </section>

  <!-- Only show on Home Page -->
  <feed-content v-if="ifRouteIsHome"></feed-content>

  <div id="content">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/nav/NavBar.vue";
import FeedContent from "@/components/feed/FeedContent.vue";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();

const ifRouteIsHome = computed(() => {
  if (route.path == "/") {
    return true;
  } else {
    return false;
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f5f5f1;
}

body {
  font-family: "Merriweather", serif;
}

p {
  line-height: 2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Noto Sans", sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

a {
  color: #2e34e8;
  text-decoration: none;
}

a:hover {
  color: #272a9c;
  text-decoration: underline;
}

a:visited,
a:active {
  color: #50009c;
}

img {
  object-fit: scale-down;
  -o-object-fit: scale-down;
  max-height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

#navbar-wrapper {
  background: rgb(151, 156, 11);
  background: rgb(151, 156, 11);
  background: linear-gradient(
    90deg,
    rgba(151, 156, 11, 1) 0%,
    rgba(249, 255, 64, 1) 100%
  );
}

#content {
  margin: 0 auto;
  width: 1200px;
}
</style>
