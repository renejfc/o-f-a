<template>
  <div class="home">
    <h1>Hello peeps!</h1>
    <div>
      <products-list />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductsList from "@/components/ProductsList.vue";
export default Vue.extend({
  name: "Home",
  components: {
    ProductsList
  }
});
</script>
