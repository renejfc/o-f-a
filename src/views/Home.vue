<template>
  <div class="home">
    <app-header />
    <categories-list />
    <products-list />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";
import ProductsList from "@/components/ProductsList.vue";
import CategoriesList from "@/components/CategoriesList.vue";
export default Vue.extend({
  name: "Home",
  components: {
    AppHeader,
    CategoriesList,
    ProductsList
  }
});
</script>
