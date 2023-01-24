<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function home() {
  router.push("/");
}
</script>
<template>
  <div class="container">
    <h2>Not Found</h2>
    <p>Oops we could not find this page, try looking</p>
    <button @click="home">Home</button>
  </div>
</template>

<style scoped lang="scss">
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
.container {
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  button {
    border: none;
    border-radius: 3px;
    padding: 7px 12px;
    width: 10%;
    text-align: center;
    font-weight: bold;
    color: $baseDarkBlueColor;
    background: $baseYellowColor;
    cursor: pointer;
  }
}
</style>
