<template>
  <header>
    <img src="" alt="" />
    <p>{{ hd.storeName }}</p>
    <h1>{{ hd.title }}</h1>
    <h4>{{ hd.subtitle }}</h4>
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
