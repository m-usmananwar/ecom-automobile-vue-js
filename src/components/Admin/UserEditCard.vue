<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";
import axios from "axios";
import { reactive, onBeforeMount } from "vue";
const router = useRouter();
const route = useRoute();
const id = route.params.id;
const formData = reactive({
  name: "",
  email: "",
  contact_number: "",
  company_name: "",
  address: "",
  city: "",
  image: "",
});
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};
onBeforeMount(async function () {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/admin/users/${id}`,
      config
    );
    const data = await response.data.user;
    console.log("Api Response", data);
    formData.name = data.name;
    formData.email = data.email;
    formData.city = data.city;
    formData.company_name = data.company_name;
    formData.contact_number = data.contact_number;
    formData.address = data.address;
  } catch (err) {
    console.log(err);
  }
});
function fileUpload(e) {
  console.log(e.target.files[0]);
  const file = [e.target.files[0]];
  formData.image = file;
  console.log("Uplaoding Image", formData.image);
}
async function register() {
  console.log("Requesting to Api", formData);
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/admin/users/${id}`,
      formData,
      config
    );
    const data = response.data;
    console.log("Response From Api", data);
    router.push("/dashboard/admin");
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="register">
      <input type="text" placeholder="Name" v-model="formData.name" />
      <input type="email" placeholder="Email" v-model="formData.email" />
      <input
        type="text"
        placeholder="Company"
        v-model="formData.company_name"
      />
      <input
        type="text"
        placeholder="Contact No"
        v-model="formData.contact_number"
      />
      <input type="text" placeholder="Address" v-model="formData.address" />
      <input type="file" placeholder="Profile Image" @change="fileUpload" />
      <input type="text" placeholder="City" v-model="formData.city" />
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
}
</style>
