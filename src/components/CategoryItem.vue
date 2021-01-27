<template>
  <div>
    <figure>
      <img src="" :alt="category.title" />
      <figcaption>{{ category.title }}</figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CategoryItem",
  props: ["category"]
});
</script>
