<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import Card from "@/components/Card.vue";
const BASE_URL = "http://127.0.0.1:8000/api/ads";
const adData = ref([]);
onBeforeMount(async function () {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const data = await response.data;
    adData.value = data.ads;
    console.log("Inside the Home View", data.ads);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <Card :ads="adData" :index="true" />
</template>
