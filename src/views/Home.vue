<template>
  <div class="home">
    <categories-list />
    <products-list />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductsList from "@/components/ProductsList.vue";
import CategoriesList from "@/components/CategoriesList.vue";
export default Vue.extend({
  name: "Home",
  components: {
    CategoriesList,
    ProductsList
  }
});
</script>
