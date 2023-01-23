<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const token = localStorage.getItem("token");
const router = useRouter();
const config = {
  headers: {
    Authorization: "Bearer " + token,
    "content-type": "multipart/form-data",
  },
};
const userData = ref([]);
const BASE_URL = "http://127.0.0.1:8000/api/admin/users";
onBeforeMount(async function () {
  try {
    const response = await axios.get(`${BASE_URL}`, config);
    const data = await response.data;
    console.log("Response from api", data);
    userData.value = data.users;
  } catch (err) {
    console.log(err);
  }
});
async function deleteUser(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, config);
    router.push("/dashboard/admin");
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <div class="container" v-for="user in userData" :key="user.id">
    <div class="image">
      <img :src="user.media[0].original_url" alt="" />
    </div>
    <div class="details">
      <h2>{{ user.name }}</h2>
      <h4>{{ user.contact_number }}</h4>
      <div class="inline-headings">
        <h4>{{ user.company_name }}</h4>
        <h4>{{ user.address }}</h4>
      </div>
      <h4><span>Member Since:</span> {{ user.created_diff }}</h4>
    </div>
    <div class="actions-buttons">
      <RouterLink
        :to="{
          name: 'AdminUserEditCard',
          params: { id: user.id },
        }"
        ><button>Edit</button></RouterLink
      >
      <button @click="deleteUser(user.id)">Delete</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
.container {
  width: 80%;
  max-width: 900px;
  margin: 1rem auto;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .image {
    img {
      height: 100px;
      width: 100%;
      border-radius: 3px;
      border: 1px solid;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
      color: $baseYellowColor;
    }
    h4 {
      span {
        color: $baseYellowColor;
      }
    }
    .inline-headings {
      display: flex;
      gap: 9px;
    }
  }
  .actions-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      width: 80px;
      border: none;
      border-radius: 3px;
      color: $baseDarkBlueColor;
      background: $baseYellowColor;
      padding: 5px 7px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    border: 1px solid;
    gap: 10px;
    padding: 10px;
    .image {
      img {
        border-radius: 50%;
      }
    }
  }
}
</style>
