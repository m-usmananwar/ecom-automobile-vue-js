<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";
import axios from "axios";
import { onBeforeMount, reactive, ref } from "vue";
const router = useRouter();
const route = useRoute();
const formData = reactive({
  car_make: "",
  car_model: "",
  car_color: "",
  car_millage: "",
  description: "",
});
function fileChange(e) {
  let files = [];
  for (var key in e.target.files) {
    console.log(e.target.files[key]);
    files.push(e.target.files[key]);
  }
  formData.images = files;
}

//Requests Code
const BASE_URL = "http://127.0.0.1:8000/api/vendor/ads";
const token = localStorage.getItem("token");
console.log("Token", token);
const config = {
  headers: {
    Authorization: "Bearer " + token,
    "content-type": "multipart/form-data",
  },
};
const id = route.params.id;
onBeforeMount(async function () {
  const response = await axios.get(`${BASE_URL}/${id}`, config);
  const data = await response.data.ad;
  formData.car_make = data.car_make;
  formData.car_color = data.car_color;
  formData.car_model = data.car_model;
  formData.car_millage = data.car_millage;
  formData.description = data.description;
});
async function postData() {
  console.log("posting", formData);
  try {
    const response = await axios({
      method: "put",
      url: `${BASE_URL}/${id}`,
      data: {
        car_make: formData.car_make,
        car_model: formData.car_model,
        car_color: formData.car_color,
        car_millage: formData.car_millage,
        description: formData.description,
        images: formData.images,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.data;
    console.log("Response from api", data);
    router.push("/dashboard/vendor");
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="postData">
      <input type="text" placeholder="Car Make" v-model="formData.car_make" />
      <input type="text" placeholder="Car Model" v-model="formData.car_model" />
      <input type="text" placeholder="Car Color" v-model="formData.car_color" />
      <input
        type="text"
        placeholder="Car Millage"
        v-model="formData.car_millage"
      />
      <input type="file" multiple @change="fileChange" />
      <textarea v-model="formData.description">
Add Detailed Description </textarea
      >
      <button type="submit">Update</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&family=Pacifico&display=swap");
// Sass Variables
$logoFontFamily: Pacifico, cursive;
$baseFontColor: #94a3b8;
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
@mixin colorAndBg($color, $bgColor) {
  color: $color;
  background: $bgColor;
  border-radius: 5px;
  padding: 9px;
  width: 300px;
}
.container {
  width: 80%;
  max-width: 900px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      @include colorAndBg($baseDarkBlueColor, $baseFontColor);
      border: 1px solid $baseYellowColor;
      outline-color: $baseYellowColor;
      &::placeholder {
        color: $baseDarkBlueColor;
      }
    }
    textarea {
      @include colorAndBg($baseDarkBlueColor, $baseFontColor);
      border: 1px solid $baseYellowColor;
      outline-color: $baseYellowColor;
      height: 180px;
      resize: vertical;
    }
    button {
      @include colorAndBg($baseDarkBlueColor, $baseYellowColor);
      cursor: pointer;
      font-weight: bold;
      border: none;
    }
  }
  p {
    span {
      color: $baseYellowColor;
      cursor: pointer;
      font-weight: bold;
      font-family: $logoFontFamily;
    }
  }
}
@media screen and (max-width: 400px) {
  input {
    width: 270px !important;
  }
  button {
    width: 270px !important;
  }
  textarea {
    width: 270px !important;
  }
}
</style>
