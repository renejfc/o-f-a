<template>
  <div :key="product.id">
    <figure>
      <img src="" :alt="product.title" />
      <figcaption>
        <ul>
          <li>{{ product.price }}€</li>
          <li>{{ product.title }}</li>
          <li>With {{ product.ingredient[1] }}</li>
        </ul>
      </figcaption>
      <form>
        <button>-</button>
        <input type="number" id="quantity" name="quantity" min="0" max="7" />
        <button>+</button>
      </form>
    </figure>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProductItem",
  props: ["product"]
});
</script>
