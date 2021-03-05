<template>
  <div class="order container">
    <jumbotron title="Order Now!" subtitle="Submit your orders here!" />
    <order-form />
  </div>
</template>

<script>
import Jumbotron from "@/components/objects/Jumbotron";
import OrderForm from "@/components/widgets/OrderForm";
export default {
  components: {
    Jumbotron,
    OrderForm
  }
};
</script>
