<template>
  <header class="flex flex-col">
    <figure class="flex justify-between items-center mt-1 mb-6">
      <img src="@/assets/logo.png" alt="" class="w-9 h-10 object-contain" />
      <figcaption class="text-lg font-semibold">{{ storeName }}</figcaption>
    </figure>
    <div class="flex flex-col my-3 text-center">
      <h1 class="text-xl font-extrabold">{{ title }}</h1>
      <h4 class="text-gray-500">{{ subtitle }}</h4>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppHeader",
  props: ["storeName", "title", "subtitle"]
});
</script>
