<template>
  <header class="flex flex-col">
    <figure class="flex justify-between items-center">
      <img src="@/assets/logo.png" alt="" class="w-9 h-10 object-contain"/>
      <figcaption class="text-lg font-semibold">{{ hd.storeName }}</figcaption>
    </figure>
    <h1 class="text-xl font-semibold">{{ hd.title }}</h1>
    <h4 class="text-base text-gray-500">{{ hd.subtitle }}</h4>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { headerData as hd } from "@/data/headerData";
export default Vue.extend({
  name: "AppHeader",
  data() {
    return {
      hd
    };
  }
});
</script>
