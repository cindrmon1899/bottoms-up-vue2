<template>
  <div class="form container">
    <b-form @submit="onConfirm">
      <b-form-group id="name" label="Name: " label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Name here..."
          required
        />
      </b-form-group>
      <b-form-group id="email" label="Email: " label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="email@example.com"
          required
        />
      </b-form-group>
      <b-form-group
        id="message"
        label="Message (Optional): "
        label-for="message"
      >
        <b-form-textarea
          id="message"
          v-model="form.message"
          placeholder="Enter Message Here..."
          rows="3"
        />
      </b-form-group>
      <b-form-group id="category" label="Category: " label-for="category">
        <b-form-radio v-model="form.category" value="coffee" required
          >Coffee</b-form-radio
        >
        <b-form-radio v-model="form.category" value="tea" required
          >Tea</b-form-radio
        >
        <b-form-radio v-model="form.category" value="shake" required
          >Shake</b-form-radio
        >
      </b-form-group>
      <b-form-group id="drink" label="Select Drinks: " label-for="drink">
        <b-form-select
          id="drink"
          v-model="form.drink"
          :options="drinkOptions"
          required
        />
      </b-form-group>
      <b-form-group id="quantity" label="Quantity: " label-for="quantity">
        <b-form-input
          id="quantity"
          v-model="form.quantity"
          type="number"
          required
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Confirm Order</b-button>

      <!-- Modal Confirm before submitting -->

      <b-modal
        v-model="confirm"
        title="Confirm Order?"
        body-bg-variant="dark"
        header-bg-variant="dark"
        footer-bg-variant="dark"
      >
        <h2>Your Current Transaction:</h2>
        <h3>Name: {{ form.name }}</h3>
        <h3>Email: {{ form.email }}</h3>
        <h6 v-show="form.message != ''">Message:</h6>
        <p v-show="form.message != ''">{{ form.message }}</p>
        <h5>Drink Category: {{ form.category }}</h5>
        <h5>Drink Ordered: {{ form.drink }}</h5>
        <h5>Quantity: {{ form.quantity }}</h5>
        <template #modal-footer>
          <b-button
            type="button"
            variant="secondary"
            @click="confirm = !confirm"
            >Cancel</b-button
          >
          <b-button @click="onSubmit" variant="primary">Submit</b-button>
        </template>
      </b-modal>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: this.generatedID,
        name: "",
        email: "",
        message: "",
        category: "",
        drink: null,
        quantity: null
      },
      confirm: false,
      coffeeDrinks: [
        { value: null, text: "Select Coffee" },
        "Cafe au Lait",
        "Mocha",
        "Mazagran"
      ],
      teaDrinks: [
        { value: null, text: "Select Tea" },
        "Black Tea",
        "Matcha Tea",
        "Chai Tea"
      ],
      shakesDrinks: [
        { value: null, text: "Select Shake" },
        "Watermelon Shake",
        "Mango Shake",
        "Milkshake"
      ]
    };
  },
  methods: {
    onConfirm(event) {
      event.preventDefault();
      this.confirm = !this.confirm;
    },
    onSubmit() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.category = "";
      this.drink = null;
      this.quantity = 0;
      alert("Order has been Submitted!");
      this.confirm = !this.confirm;
      this.$router.push("/");
    },
    resetDrink() {
      this.form.drink = null;
    }
  },
  computed: {
    drinkOptions() {
      let defaultOption = {
        value: null,
        text: "Select From Above First"
      };
      let returnOptions = [defaultOption];
      if (this.form.category.toLowerCase() === "coffee") {
        this.resetDrink();
        returnOptions = this.coffeeDrinks.slice();
      } else if (this.form.category.toLowerCase() === "tea") {
        this.resetDrink();
        returnOptions = this.teaDrinks.slice();
      } else if (this.form.category.toLowerCase() === "shake") {
        this.resetDrink();
        returnOptions = this.shakesDrinks.slice();
      }

      return returnOptions;
    },
    generatedID() {
      return this.CryptoJS.MD5(this.name + this.email);
    }
  }
};
</script>
