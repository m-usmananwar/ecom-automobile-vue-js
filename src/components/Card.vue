<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="card">
    <div class="image">
      <img src="/public/images/Audi1.jpg" alt="Image_Here" />
    </div>
    <div class="details">
      <RouterLink to="/"><h2>Honda City</h2></RouterLink>
      <h3>Lahore</h3>
      <div class="inline-headings">
        <h3>2022</h3>
        <h3>White</h3>
        <h3>89090KM</h3>
      </div>
      <h3><span>Updted:</span> 9 Days ago</h3>
    </div>
    <div class="featured">
      <h5>Featured</h5>
      <RouterLink :to="{ name: 'details' }"><h5>Details</h5></RouterLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
.card {
  display: flex;
  width: 80%;
  max-width: 900px;
  margin: 1rem auto;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  .image {
    img {
      height: 200px;
      width: 100%;
      border-radius: 2px;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      cursor: pointer;
      &:hover {
        color: $baseYellowColor;
      }
    }
    .inline-headings {
      display: flex;
      gap: 9px;
    }
    span {
      color: $baseYellowColor;
    }
  }
  .featured {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h5 {
      color: $baseDarkBlueColor;
      background: $baseYellowColor;
      padding: 4px 10px;
      border-radius: 3px;
      text-align: center;
    }
  }
}
@media screen and (max-width: 620px) {
  .card {
    flex-direction: column;
    gap: 10px;
    border: 1px solid;
    border-radius: 5px;
    .inline-headings {
      flex-direction: column;
    }
    .image {
      img {
        border-radius: 50%;
      }
    }
  }
}
</style>
