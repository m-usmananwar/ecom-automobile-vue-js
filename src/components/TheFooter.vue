<script setup></script>
<template>
  <footer>
    <div class="footer-heading">
      <h1>Ninja Garage</h1>
    </div>
    <div class="footer-content">
      <h1>Follow Us</h1>
      <p>Follow us on our media handle to get latest news about us</p>
    </div>
    <div class="footer-icons">
      <ul>
        <li>
          <a href="#" target="_blank"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
        </li>
        <li>
          <a href="#" target="_blank"
            ><i class="fa-brands fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="#" target="_blank"><i class="fa-brands fa-github"></i></a>
        </li>
        <li>
          <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&family=Pacifico&display=swap");
// Sass Variables
$logoFontFamily: Pacifico, cursive;
$baseYellowColor: #ca8a04;
$baseFontColor: #94a3b8;
footer {
  border-top: 1px solid;
  width: 80%;
  padding: 7px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .footer-heading {
    h1 {
      color: $baseYellowColor;
      font-family: $logoFontFamily !important;
    }
  }
  .footer-icons {
    ul {
      display: flex;
      gap: 30px;
      a {
        padding: 7px;
        background-color: $baseYellowColor;
        border-radius: 4px;
        i {
          width: 20px;
          text-align: center;
          background: $baseYellowColor;
          color: $baseFontColor;
        }
      }
    }
  }
}
</style>
