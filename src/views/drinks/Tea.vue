<template>
  <div class="shakes container">
    <jumbotron
      title="Tea"
      subtitle="Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis, an evergreen shrub native to East Asia. After water, it is the most widely consumed drink in the world (Wikipedia)."
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
  name: "Tea",
  metaInfo: {
    title: "Tea",
    meta: [
      {
        name: "description",
        content:
          "Infusing the contents of dried-up leaves since the dawn of time"
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
          drinkName: "Black Tea",
          drinkDesc:
            'Black tea is a type of tea that is more oxidized than oolong, yellow, white and green teas. Black tea is generally stronger in flavor than other teas. All four types are made from leaves of the shrub (or small tree) Camellia sinensis. Two principal varieties of the species are used – the small-leaved Chinese variety plant (C. sinensis var. sinensis), used for most other types of teas, and the large-leaved Assamese plant (C. sinensis var. assamica), which was traditionally mainly used for black tea, although in recent years some green and white teas have been produced. In China, where black tea was developed, the beverage is called 紅茶 "red tea", due to the color of the oxidized leaves when processed appropriately. (Wikipedia).',
          drinkImg: "black_tea.jpg",
          drinkImgAlt: "black tea"
        },
        {
          drinkName: "Matcha Tea",
          drinkDesc:
            "Matcha is finely ground powder of specially grown and processed green tea leaves, traditionally consumed in East Asia. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine. The powdered form of matcha is consumed differently from tea leaves or tea bags, as it is suspended in a liquid, typically water or milk.",
          drinkImg: "matcha_tea.jpg",
          drinkImgAlt: "matcha tea"
        },
        {
          drinkName: "Chai Tea",
          drinkDesc:
            "Masala Chai, otherwise known as Chai Tea, is a tea beverage made by boiling black tea in milk and water with a mixture of aromatic herbs and spices. Originating in India, the beverage has gained worldwide popularity, becoming a feature in many coffee and tea houses. Although traditionally prepared as a decoction of green cardamom pods, cinnamon sticks, ground cloves, ground ginger, and black peppercorn together with black tea leaves, retail versions include tea bags for infusion, instant powdered mixtures, and concentrates. (Wikipedia).",
          drinkImg: "chai_tea.jpg",
          drinkImgAlt: "milkshake"
        }
      ]
    };
  }
};
</script>
