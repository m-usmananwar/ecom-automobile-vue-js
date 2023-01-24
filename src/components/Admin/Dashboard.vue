<script setup>
import { RouterLink } from "vue-router";
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
  <TheNavigation></TheNavigation>
  <div class="new-ad">
    <RouterLink to="/dashboard/admin/vendors">Vendors</RouterLink>
  </div>
  <AdminCard :ads="adData"></AdminCard>
</template>
<style scoped lang="scss">
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
.new-ad {
  margin: 1rem !important;
  a {
    color: $baseDarkBlueColor;
    background: $baseYellowColor;
    width: 10%;
    padding: 7px 10px;
    border: none;
    border-radius: 3px;
  }
}
</style>
