<template>
  <figure
    :key="product.id"
    class="flex h-32 my-5 rounded-xl bg-transparent overflow-hidden"
  >
    <img
      :src="setFilePath(product.picFile)"
      :alt="product.title"
      class="object-cover w-32 h-full mr-4 shadow-2xl rounded-xl"
    />
    <figcaption class="flex flex-col justify-between">
      <ul class="flex flex-col h-3/4 my-1 mr-2 justify-between">
        <li class="text-yellow-500 font-bold">{{ product.price }}€</li>
        <li class="font-bold truncate">{{ product.title }}</li>
        <li class="text-gray-400 text-sm font-medium truncate">
          With {{ product.ingredients.toString() }}
        </li>
      </ul>
      <form
        class="flex justify-center items-center w-28 h-9 mt-1 mb-2 text-center shadow-sm"
      >
        <button type="button" class="btn-quantity">-</button>
        <input
          type="number"
          name="quantity"
          default="0"
          min="0"
          max="7"
          class="w-9 h-9 bg-gray-200"
        />
        <button type="button" class="btn-quantity">+</button>
      </form>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductItem",
  props: ["product"],
  methods: {
    setFilePath(fileName: string) {
      return require(`@/assets/productsPics/${fileName}`);
    }
  }
});
</script>
