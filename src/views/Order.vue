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
  name: "Order",
  metaInfo: {
    title: "Order",
    meta: [
      {
        name: "description",
        content: "Do you wanna order our world famous drinks? Click Here!"
      }
    ]
  },
  components: {
    Jumbotron,
    OrderForm
  }
};
</script>
