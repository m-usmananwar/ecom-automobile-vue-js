<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  ads: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="card" v-for="ad in props.ads" :key="ad.id">
    <div class="image">
      <img :src="ad.media[0].original_url" alt="Image_Here" />
    </div>
    <div class="details">
      <h2>{{ ad.car_make }}</h2>
      <h3>{{ ad.user.city }}</h3>
      <div class="inline-headings">
        <h3>{{ ad.car_model }}</h3>
        <h3>{{ ad.car_color }}</h3>
        <h3>{{ ad.car_millage }}KM</h3>
      </div>
      <h3><span>Updted:</span> {{ ad.created_diff }}</h3>
    </div>
    <div class="featured">
      <h5 v-if="ad.is_featured">Featured</h5>
      <RouterLink
        :to="{
          name: 'AdminAdDetails',
          params: { id: ad.id },
        }"
      >
        <h5>Details</h5></RouterLink
      >
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
      border-radius: 3px;
      border: 1px solid;
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
