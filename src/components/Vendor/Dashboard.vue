<script setup>
import axios from "axios";
import VendorCard from "@/components/vendor/VendorCard.vue";
import { ref, onBeforeMount, onMounted } from "vue";
const BASE_URL = "http://127.0.0.1:8000/api/vendor/ads";
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
console.log("Token Here", token);
const adData = ref([]);
onBeforeMount(async function () {
  try {
    const response = await axios.get(`${BASE_URL}`, config);
    const data = response.data;
    console.log("Response from Apis", data.ads);
    adData.value = data.ads;
  } catch (err) {
    console.log("Failed", err);
  }
});
</script>
<template>
  <VendorCard :ads="adData"></VendorCard>
</template>
<style scoped lang="scss">
.no-post {
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
