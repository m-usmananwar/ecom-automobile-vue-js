<script setup>
import Card from "@/components/Card.vue";
import SearchBar from "@/components/SearchBar.vue";
</script>
<template>
  <div class="container">
    <div class="search-bar">
      <SearchBar />
    </div>
    <div class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 90%;
  max-width: 1200px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  .cards {
    width: 90%;
  }
}
</style>
