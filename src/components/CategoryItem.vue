<template>
  <figure
    class="flex flex-col flex-shrink-0 w-24 h-28 mx-2 justify-evenly items-center border border-gray-100 rounded-xl shadow-lg overflow-hidden"
  >
    <img
      :src="setFilePath(category.iconFile)"
      :alt="category.title"
      class="object-contain w-12 h-12"
    />
    <figcaption class="text-sm font-medium">{{ category.title }}</figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CategoryItem",
  props: ["category"],
  methods: {
    setFilePath(fileName: string) {
      return require(`@/assets/categoriesIcons/${fileName}`);
    }
  }
});
</script>
