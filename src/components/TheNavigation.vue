<script setup>
import { RouterLink, useRouter } from "vue-router";
import axios from "axios";
import { ref } from "vue";
const router = useRouter();
const token = ref(localStorage.getItem("token"));
console.log("FromNavigataion", token.value);
const BASE_URL = "http://127.0.0.1:8000/api/logout";
const config = {
  headers: {
    Authorization: "Bearer " + token.value,
  },
};
async function logout() {
  try {
    const response = await axios.get(`${BASE_URL}`, config);
    const data = await response;
    if (data.status == 200) {
      localStorage.removeItem("token");
      router.push("/");
    }
    console.log("Something went wrong in API ");
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <header>
    <div class="nav-heading">
      <RouterLink :to="{ name: 'Home' }"><h1>Ninja Garage</h1></RouterLink>
    </div>
    <div class="navlinks">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li v-if="!token"><RouterLink to="/login">Login</RouterLink></li>
        <li v-if="token"><button @click="logout">Logout</button></li>
      </ul>
    </div>
    <div class="search">
      <RouterLink to="/search" class="search-item">Search</RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&family=Pacifico&display=swap");
// Sass Variables
$logoFontFamily: Pacifico, cursive;
$baseFontColor: #94a3b8;
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
header {
  border-bottom: 1px solid;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .nav-heading {
    h1 {
      font-family: $logoFontFamily !important;
      color: $baseYellowColor;
    }
  }
  .navlinks {
    ul {
      display: flex;
      gap: 3rem;
      justify-content: space-between;
      button {
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
        border: none;
        color: $baseYellowColor;
      }
    }
  }
  .search {
    .search-item {
      color: $baseDarkBlueColor !important;
      background: $baseYellowColor;
      padding: 4px 1rem;
      border-radius: 5px;
    }
  }
}
@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 1rem;
  }
}
@media screen and (max-width: 400px) {
  ul {
    flex-direction: column;
  }
}
</style>
