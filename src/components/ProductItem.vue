<template>
  <div :key="product.id">
    <figure>
      <img src="" :alt="product.title" />
      <figcaption>
        <ul>
          <li>{{ product.price }}€</li>
          <li>{{ product.title }}</li>
          <li>With {{ product.ingredients }}</li>
        </ul>
      </figcaption>
      <button>-</button>
      <input type="number" name="quantity" min="0" max="7" />
      <button>+</button>
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
