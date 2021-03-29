<template>
  <div class="shakes container">
    <jumbotron
      title="Shakes"
      subtitle="Shakes are blended drinks that at most contain crushed ice, to give a shake its distict cold blend. It is usually mixed with fruits to get that healthy and tropical vibe, or the otherwise known milkshakes, which contain milk and other ingredients, to have it a bit more texture. Either way, it can be enjoyed with or without milk."
    />
    <b-tabs content-class="mt-3" nav-class="navbar-dark" fill>
      <b-tab v-for="(drink, index) in coffeeDrinks" :key="index">
        <template #title>
          <i class="fas fa-blender" aria-hidden="true"></i>
          {{ drink.drinkName }}
        </template>
        <drinks-block
          :header="drink.drinkName"
          :description="drink.drinkDesc"
          :image="drink.drinkImg"
          :imageAlt="drink.drinkImgAlt"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Jumbotron from "@/components/objects/Jumbotron";
import DrinksBlock from "@/components/objects/DrinksBlock";
export default {
  name: "Shakes",
  metaInfo: {
    title: "Shakes",
    meta: [
      {
        name: "description",
        content: "This is just grounded-up stuff mixed with ice, btw"
      }
    ]
  },
  components: {
    Jumbotron,
    DrinksBlock
  },
  data() {
    return {
      coffeeDrinks: [
        {
          drinkName: "Watermelon Shake",
          drinkDesc:
            "Now you may be wondering, why did I include 2 kinds of the same fruit shake? Well, these are entirely different fruits prepared the same way, but in taste, they are completely different. Watermelon shake has that distinct sweet flavour that comes from the watermelon itself. The flavour of watermelon is really well-known and can really represent a refreshing scent and taste that makes you feel like you're on a holiday, and it can be served up as a shake or you can just enjoy the juicy fruit on your own while sitting on the beach, staring at the sun or whatever. This is one of the shakes that deserve an umbrella.",
          drinkImg: "watermelon_shake.jpg",
          drinkImgAlt: "watermelon shake"
        },
        {
          drinkName: "Mango Shake",
          drinkDesc:
            "Again, watermelon shake and mango shake are similar fruit shakes, but the only difference with them is on how they taste. While watermelon is more on that very notable sweet flavour, the mango also has that sort of sweet and soury flavour that is more distinct than the watermelon. Now don't get me wrong, they both can be very sweet, but the sweetness of the watermelon is unprecedented. Mango has a zesty sour taste to it, making it unique. It is also more tropical than the watermelon, since besides being the national fruit of the Philippines, it is mostly found on tropical countries, and its really best found when its ripe.",
          drinkImg: "mango_shake.jpg",
          drinkImgAlt: "mango shake"
        },
        {
          drinkName: "Milkshake",
          drinkDesc:
            "Milkshake, or simply shake, is a drink that is traditionally made by blending cow's milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture. It may also be made using other types of milk such as almond milk, coconut milk, or hemp milk. (Wikipedia) It is simply blending vanilla ice cream with milk, in other words. Fruits optional.",
          drinkImg: "milkshake.png",
          drinkImgAlt: "milkshake"
        }
      ]
    };
  }
};
</script>
