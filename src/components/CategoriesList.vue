<template>
  <div>
    <category-item
      v-for="category in categories"
      :key="category.id"
      :category="category"
    ></category-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { categories } from "@/data/categoriesData";
import CategoryItem from "./CategoryItem.vue";

export default Vue.extend({
  name: "CategoriesList",
  components: {
    CategoryItem
  },
  data() {
    return {
      categories
    };
  }
});
</script>
