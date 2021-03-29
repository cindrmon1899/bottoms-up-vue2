<template>
  <div class="about container">
    <Jumbotron title="About Us!" />
    <hr class="splitter" />
    <community-block
      title="Who we are"
      content="We are a small and passionate people who aim to deliver the best quality drinks to our customers. Our goal is to produce the best of the best drinks that is proudly made local with love for every customer who buys from us! Even though we are just a small number, we deliver most on bringing the best and not through mass quantities with our products, and everything we sell is indeed, fresh!"
      image-name="business.jpeg"
      image-alt="a team of people doing something they're passionate about"
      content-location="left"
    />
    <community-block
      title="Fresh and Proud"
      content="Our ingredients are not imported, in fact, we support the local growth of our own agricultural economy by buying only local ingredients for our drinks. We belive that we can help our country by delivering the finest quality through our own country and its vast riches in resources and to pay off the toils of every Filipino's hard work in the field."
      image-name="farmer.jpeg"
      image-alt="Just some farmer"
      contentLocation="right"
    />
  </div>
</template>

<script>
import Jumbotron from "@/components/objects/Jumbotron";
import CommunityBlock from "@/components/objects/CommunityBlock.vue";
export default {
  name: "About",
  metaInfo: {
    title: "About",
    meta: [
      {
        name: "description",
        content: "About our coffee shop!"
      }
    ]
  },
  components: {
    Jumbotron,
    CommunityBlock
  }
};
</script>

<style scoped>
.splitter {
  margin: 1rem;
}
</style>
