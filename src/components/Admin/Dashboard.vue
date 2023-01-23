<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import AdminCard from "@/components/Admin/AdminCard.vue";
const adData = ref([]);
const token = localStorage.getItem("token");
console.log(token);
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
onBeforeMount(async function () {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/admin/ads",
    config
  );
  const data = await response.data;
  adData.value = data.ads;
  console.log(adData.value);
});
</script>
<template>
  <AdminCard :ads="adData"></AdminCard>
</template>
<style scoped lang="scss"></style>
