<template>
  <div>
    <CuadradosMediosAlgo 
        msg="Welcome to Scuare Mid" 
        class="back-degree"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CuadradosMediosAlgo from "@/components/CuadradosMediosAlgo.vue";

export default {
  name: "CuadradosMedios",
  components: {
    CuadradosMediosAlgo
  }
};
</script>
<style lang="scss" scoped>
  @import '@/scss/_component_layout.scss';
</style>