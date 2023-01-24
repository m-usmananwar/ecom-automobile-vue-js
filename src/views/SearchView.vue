<script setup>
import axios from "axios";
import { ref } from "vue";
import Card from "@/components/Card.vue";
import SearchBar from "@/components/SearchBar.vue";
const emits = defineEmits(["search"]);
const adData = ref([]);
const BASE_URL = "http://127.0.0.1:8000/api/search";
async function getData(formData) {
  const params = {
    params: {
      model: formData.model,
      city: formData.city,
      color: formData.color,
      millage_from: formData.millage_from,
      millage_to: formData.millage_to,
      year_from: formData.year_from,
      year_to: formData.year_to,
    },
  };
  const response = await axios.get(`${BASE_URL}`, params);
  console.log(response);
  const data = await response.data.ads;
  adData.value = data;
  console.log("response data", data.ads);
}
</script>
<template>
  <div class="container">
    <div class="search-bar">
      <SearchBar @search="getData" />
    </div>
    <div class="cards">
      <Card :ads="adData" />
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
@media screen and (max-width: 900px) {
  .container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
