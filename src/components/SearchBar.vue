<script setup></script>
<template>
  <div class="container">
    <h3>SEARCH HERE</h3>
    <form>
      <div class="keyword">
        <h4>Search By Keyword</h4>
        <input type="text" placeholder="Honda" />
      </div>
      <h4>Filter By City</h4>
      <div class="city">
        <div class="city-radio">
          <input type="radio" id="lhr" />
          <input type="radio" id="kar" />
          <input type="radio" id="isl" />
          <input type="radio" id="fsd" />
        </div>
        <div class="city-labels">
          <label for="lhr">Lahore</label>
          <label for="kar">Karachi</label>
          <label for="isl">Islamabad</label>
          <label for="fsd">Faislabad</label>
        </div>
      </div>
      <h4>Filter By Color</h4>
      <div class="color">
        <div class="color-radio">
          <input type="radio" id="wh" />
          <input type="radio" id="bl" />
          <input type="radio" id="gr" />
        </div>
        <div class="color-labels">
          <label for="wh">White</label>
          <label for="bl">Black</label>
          <label for="gr">Gray</label>
        </div>
      </div>
      <div class="millage">
        <h4>Filter By Millage</h4>
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
      <div class="year">
        <h4>Filter By Year</h4>
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
      <button type="submit">Go</button>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&family=Pacifico&display=swap");
// Sass Variables
$logoFontFamily: Pacifico, cursive;
$baseYellowColor: #ca8a04;
$baseDarkBlueColor: #001d3d;
$baseFontColor: #94a3b8;
@mixin input($color, $bgColor) {
  outline-color: $baseYellowColor;
  background: $bgColor;
  color: $color;
  border-radius: 5px;
  padding: 9px;
}
@mixin heading() {
  background: $baseYellowColor;
  color: $baseDarkBlueColor;
  text-align: center;
  padding: 7px;
  border-radius: 4px;
}
@mixin flex($dir) {
  display: flex;
  flex-direction: $dir !important;
  justify-content: space-evenly;
}
.container {
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border: 1px solid;
  h3 {
    color: $baseYellowColor;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    h4 {
      @include heading();
    }
    input {
      @include input($baseDarkBlueColor, $baseFontColor);
      border: 1px solid $baseYellowColor;
      &::placeholder {
        color: $baseDarkBlueColor;
      }
    }
    button {
      @include input($baseDarkBlueColor, $baseYellowColor);
      border: none;
      font-weight: bold;
      cursor: pointer;
    }
    .city {
      @include flex(row);
      .city-radio {
        @include flex(column);
      }
      .city-labels {
        @include flex(column);
        align-items: flex-start;
        cursor: pointer;
      }
    }
    .color {
      @include flex(row);
      .color-radio {
        @include flex(column);
      }
      .color-labels {
        @include flex(column);
        align-items: flex-start;
        cursor: pointer;
      }
    }
    .year {
      @include flex(column);
      gap: 7px;
    }
    .millage {
      @include flex(column);
      gap: 7px;
    }
    .keyword {
      @include flex(column);
      gap: 7px;
    }
  }
}
</style>
