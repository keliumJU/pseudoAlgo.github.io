<template>
  <div class="cuad-medios">
    <ProductosMediosAlgo msg="Welcome to Product Mid" />
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