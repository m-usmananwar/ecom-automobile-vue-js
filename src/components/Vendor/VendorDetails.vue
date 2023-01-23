<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import axios from "axios";
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const BASE_URL = "http://127.0.0.1:8000/api/vendor/ads";
const adData = ref([]);
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
onBeforeMount(async function () {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, config);
    const data = await response.data;
    adData.value = data.ad;
    console.log("Calling", data);
  } catch (err) {
    console.log(err.message);
    console.log(err);
  }
});
async function deleteAd() {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, config);
    const data = await response.data;
    router.push("/dashboard/vendor");
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <div class="details">
    <div class="images-grid">
      <img
        v-for="media in adData.media"
        :key="media.id"
        :src="media.original_url"
        alt="Image_Here"
      />
    </div>
    <div class="details-card">
      <h2>{{ adData.car_make }}</h2>
      <h4>{{ adData.user.city }}</h4>
      <div class="inline-headings">
        <h4>{{ adData.car_model }}</h4>
        <h4>{{ adData.car_color }}</h4>
        <h4>{{ adData.car_millage }}KM</h4>
      </div>
      <h4><span>Updated:</span> {{ adData.created_diff }}</h4>
      <p>
        {{ adData.description }}. Repudiandae commodi dolore debitis a
        recusandae, quidem ipsam impedit blanditiis neque facilis eveniet,
        nesciunt ex. Tempora laborum itaque quo aspernatur dicta sint!
      </p>
    </div>
    <div class="action-buttons">
      <RouterLink
        :to="{
          name: 'VendorAdEdit',
          params: {
            id: adData.id,
          },
        }"
        class="btn"
      >
        Edit
      </RouterLink>

      <button @click="deleteAd()">Delete</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
.details {
  width: 80%;
  margin: 1rem auto;
  .images-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px 1rem;
    img {
      height: 250px;
      width: 100%;
      border-radius: 3px;
      object-fit: cover;
      border: 2px solid;
    }
  }
  .details-card {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .inline-headings {
      display: flex;
      gap: 9px;
    }
    span {
      color: $baseYellowColor;
    }
    p {
      width: 70%;
      max-width: 600px;
      text-align: justify;
    }
  }
  .action-buttons {
    display: flex;
    gap: 7px;
    button,
    .btn {
      font-weight: bold;
      text-align: center;
      width: 10%;
      padding: 7px 12px;
      border: none;
      border-radius: 3px;
      background: $baseYellowColor;
      color: $baseDarkBlueColor;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 950px) {
  .images-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media screen and (max-width: 750px) {
  .images-grid {
    grid-template-columns: 1fr !important;
  }
  .action-buttons {
    button {
      width: 23% !important;
    }
  }
}
</style>
