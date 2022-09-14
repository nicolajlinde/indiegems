<template>
  <nav>
    <div>
      <router-link to="/">
        <!-- <img src="@/assets/logo.png" alt="logo" class="logo-img" /> -->
        Indiegems
      </router-link>
    </div>
    <ul>
      <li><router-link to="/games">Games</router-link></li>
      <li><router-link to="/reviews">Reviews</router-link></li>
      <li><router-link to="/development">Development</router-link></li>
      <li>
        <router-link to="#"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
        /></router-link>
      </li>
      <li>
        <router-link to="#"
          ><font-awesome-icon icon="fa-solid fa-user"
        /></router-link>
      </li>
      <li class="socials">
        <!-- <span class="socials-items">Socials:</span> -->
        <router-link to="#">
          <font-awesome-icon icon="fa-brands fa-github" />
          <font-awesome-icon icon="fa-brands fa-discord" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

ul li a:hover {
  font-weight: bold;
}

.router-link-exact-active {
  text-decoration: underline;
}

ul {
  margin: 15px 20px;
}

li {
  list-style: none;
  display: inline;
  margin: 0 5px;
  padding: 15px 20px;
}

li a {
  color: black;
  text-decoration: none;
}

.fa-github,
.fa-discord {
  margin: 0 0.5rem;
}

.fa-github,
.fa-discord,
.socials {
  color: rgb(224, 224, 224);
}

.socials {
  padding: 15px 10px;
  background: rgb(137, 35, 232);
  background: linear-gradient(
    90deg,
    rgba(137, 35, 232, 1) 0%,
    rgba(80, 0, 156, 1) 100%
  );
}

.social-items {
  padding: 0 5px;
}
</style>
