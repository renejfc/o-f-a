<template>
  <div>
    <app-header
      storeName="Foodbolous"
      title="Food. From home. To you."
      subtitle="Our mission? Make your belly happier 😋"
    />
    <main>
      <section>
        <categories-list />
      </section>
      <section>
        <products-list />
      </section>
    </main>
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
