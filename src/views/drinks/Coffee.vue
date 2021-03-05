<template>
  <div class="coffee container">
    <jumbotron
      title="Coffee"
      subtitle="Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. (Wikipedia)"
    />
    <b-tabs content-class="mt-3" fill>
      <b-tab v-for="(drink, index) in coffeeDrinks" :key="index">
        <template #title>
          <i class="fas fa-mug-hot" aria-hidden="true"></i>
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
  components: {
    Jumbotron,
    DrinksBlock
  },
  data() {
    return {
      coffeeDrinks: [
        {
          drinkName: "Cafe Au Lait",
          drinkDesc:
            "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. (Wikipedia)",
          drinkImg: "cafe_au_lait.jpg",
          drinkImgAlt: "cafe au lait"
        },
        {
          drinkName: "Mocha",
          drinkDesc:
            "A caffè mocha, also called mocaccino, is a chocolate-flavoured variant of a caffè latte. Other commonly used spellings are mochaccino and also mochachino. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffee trade. (Wikipedia) It is also a very famous flavour wherein it is considered to be a mix of the two most famous and caffeinated beans popular around the world: coffee, and cacao. For a sense of confusion, it finds itself in an equilibrium of flavours. The strong taste of coffee, and the bassy undertone of the cacao, they are like the yin and yang of any coffee blends.",
          drinkImg: "mocha.jpg",
          drinkImgAlt: "mocha"
        },
        {
          drinkName: "Mazagran",
          drinkDesc:
            'Mazagran is a cold, sweetened coffee drink that originated in Algeria. Portuguese versions may use espresso, lemon, mint and rum, and Austrian versions are served with an ice cube and include rum. Sometimes a fast version is achieved by pouring a previously sweetened espresso in a cup with ice cubes and a slice of lemon. Mazagran has been described as "the original iced coffee". (Wikipedia)',
          drinkImg: "mazagran.jpg",
          drinkImgAlt: "mazagran"
        }
      ]
    };
  }
};
</script>
