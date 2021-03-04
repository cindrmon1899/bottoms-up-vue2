<template>
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4">{{ title }}</h1>
    <p class="lead">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  props: {
    title: String,
    subtitle: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
.jumbotron {
  background-color: #333;
  color: #ffebcd;
  padding: 1rem;
  margin-bottom: 0;
}
.display-4 {
  font-weight: 500;
}
</style>
