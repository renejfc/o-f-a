<template>
  <div>
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { products } from "@/data/productsData";
import ProductItem from "./ProductItem.vue";
export default Vue.extend({
  name: "ProductsList",
  components: {
    ProductItem
  },
  data() {
    return {
      products
    };
  }
});
</script>
