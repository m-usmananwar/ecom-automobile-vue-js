<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api/login";
const formData = reactive({
  email: "",
  password: "",
});
const router = useRouter();
async function login() {
  try {
    const response = await axios.post(`${BASE_URL}`, formData);
    const data = response.data;
    localStorage.setItem("token", data.token);
    if (data.user.role === "vendor") {
      router.push("/dashboard/vendor");
    } else {
      router.push("/dashboard/admin");
    }
    console.log(data.token);
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="login">
      <input type="email" placeholder="Email" v-model="formData.email" />
      <input
        type="password"
        placeholder="Password"
        v-model="formData.password"
      />
      <button type="submit">Login</button>
    </form>
    <p>
      Don't have an account?
      <RouterLink to="/register"><span>Register</span></RouterLink>
    </p>
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
  height: 70vh;
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
