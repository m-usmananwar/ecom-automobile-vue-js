<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <div class="nav-heading">
      <RouterLink :to="{ name: 'Home' }"><h1>Ninja Garage</h1></RouterLink>
    </div>
    <div class="navlinks">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/vendors">Vendors</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/vendors">Vendors</RouterLink></li>
        <li><RouterLink to="/post-ad">Post Ad</RouterLink></li>
      </ul>
    </div>
    <div class="search">
      <RouterLink to="/" class="search-item">Search</RouterLink>
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
</style>
