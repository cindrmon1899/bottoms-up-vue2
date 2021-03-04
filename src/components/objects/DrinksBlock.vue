<template>
  <div class="container row">
    <div class="col-md-6">
      <div class="row">
        <h1 class="primary-4">{{ header }}</h1>
      </div>
      <div class="row">
        <p>{{ description }}</p>
      </div>
      <div class="row">
        <router-link class="btn btn-primary btn-md" to="/order"
          >Order Now</router-link
        >
      </div>
    </div>
    <div class="col-md-6">
      <img
        :src="require(`@/assets/images/${image}`)"
        :alt="imageAlt"
        class="img-fluid"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DrinksBlock",
  props: {
    header: String,
    description: String,
    image: String,
    imageAlt: String
  }
};
</script>
