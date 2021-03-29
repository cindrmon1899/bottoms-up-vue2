<template>
  <div class="home container-fluid">
    <jumbotron
      title="Welcome!"
      subtitle="Buy some drinks from us, Everyone Welcome!"
    />
    <div id="cafeCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/images/cafe1-patrick-tomasso.jpg"
            class="d-block w-100"
            alt="cafe1"
          />
        </div>

        <div class="carousel-item">
          <img
            src="@/assets/images/cafe2-kari-shea.jpg"
            class="d-block w-100"
            alt="cafe2"
          />
        </div>

        <div class="carousel-item">
          <img
            src="@/assets/images/cafe3-drew-coffman.jpg"
            class="d-block w-100"
            alt="cafe3"
          />
        </div>

        <div class="carousel-item">
          <img
            src="@/assets/images/cafe4-jonathan-borba.jpg"
            class="d-block w-100"
            alt="cafe4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/objects/Jumbotron";
export default {
  name: "Home",
  metaInfo: {
    title: "Welcome!",
    meta: [
      {
        name: "description",
        content:
          "Drink up, it's drinking time! WARNING!: Non-Alcoholic, but pure caffeine"
      }
    ]
  },
  components: {
    Jumbotron
  }
};
</script>

<style scoped>
/* Carousel */
.carousel-item {
  text-align: center;
}

.carousel-item > img {
  height: 700px;
  /* width: 500px; */
}

@media only screen and (max-width: 767px) {
  .carousel-item > img {
    height: 250px;
    /* width: 200px; */
  }
}
</style>
