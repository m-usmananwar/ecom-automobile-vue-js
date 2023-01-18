<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="Contact No" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?
      <RouterLink to="/login"><span>Login</span></RouterLink>
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
</style>
