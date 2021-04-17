<template>
  <div>
    <ProductosMediosAlgo 
      msg="Welcome to Product Mid"
      class="back-degree" 
     />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductosMediosAlgo from "@/components/ProductosMediosAlgo.vue";

export default {
  name: "ProductosMedios",
  components: {
    ProductosMediosAlgo
  }
};
</script>


<style lang="scss" scoped>
  @import '@/scss/_component_layout.scss';
</style>