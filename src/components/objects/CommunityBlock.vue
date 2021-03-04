<template>
  <section>
    <!-- Header -->
    <div class="row">
      <Jumbotron :title="title" />
    </div>
    <!-- If Text Location is on the Left -->
    <div class="row" v-show="!isTextLocationRight">
      <div class="col-md-6">
        <p>{{ content }}</p>
      </div>
      <div class="col-md-6">
        <img
          :src="require(`@/assets/images/${imageName}`)"
          :alt="imageAlt"
          class="img-fluid mx-auto d-block"
        />
      </div>
    </div>
    <!-- If Text Location is on the Right -->
    <div class="row" v-show="isTextLocationRight">
      <div class="col-md-6">
        <img
          :src="require(`@/assets/images/${imageName}`)"
          :alt="imageAlt"
          class="img-fluid mx-auto d-block"
        />
      </div>
      <div class="col-md-6">
        <p>{{ content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Jumbotron from "@/components/objects/Jumbotron";
export default {
  name: "CommunityBlock",
  components: {
    Jumbotron
  },
  props: {
    title: String,
    content: String,
    imageName: String,
    imageAlt: String,
    contentLocation: String
  },
  computed: {
    isTextLocationRight() {
      return this.contentLocation.toLowerCase() === "right" ? true : false;
    }
  }
};
</script>
