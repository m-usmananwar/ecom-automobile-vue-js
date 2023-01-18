<script setup></script>
<template>
  <div class="details">
    <div class="images-grid">
      <img src="/public/images/Audi1.jpg" alt="Image_Here" />
      <img src="/public/images/Audi2.jpg" alt="Image_Here" />
      <img src="/public/images/BMW1.jpg" alt="Image_Here" />
      <img src="/public/images/BMW2.jpg" alt="Image_Here" />
      <img src="/public/images/Toyota1.jpg" alt="Image_Here" />
    </div>
    <div class="details-card">
      <h2>Toyota Grande</h2>
      <h4>Lahore</h4>
      <div class="inline-headings">
        <h4>2015</h4>
        <h4>White</h4>
        <h4>2015KM</h4>
      </div>
      <h4><span>Updated:</span> 3 Weeks ago</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        commodi dolore debitis a recusandae, quidem ipsam impedit blanditiis
        neque facilis eveniet, nesciunt ex. Tempora laborum itaque quo
        aspernatur dicta sint!
      </p>
    </div>
    <div class="action-buttons">
      <button>Edit</button>
      <button>Delete</button>
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
    button {
        font-weight: bold;
      width: 10%;
      padding:  7px;
      border: none;
      border-radius: 3px;
      background: $baseYellowColor;
      color: $baseDarkBlueColor;
      cursor: pointer;
    }
  }
}
@media  screen and (max-width:950px){
  .images-grid{
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media  screen and (max-width:750px){
  .images-grid{
    grid-template-columns: 1fr !important;
  }
  .action-buttons{
    button{
      width: 23% !important;
    }
  }
}
</style>
