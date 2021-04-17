<template>
  <div>
    <congruencial-cuadratico-algo
      msg="Welcome to Quadratic Congruential Algorithm"
      class="back-degree"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import CongruencialCuadraticoAlgo from "@/components/CongruencialCuadraticoAlgo.vue";

export default {
  name: "CongruencialCuadratico",
  components: {
    CongruencialCuadraticoAlgo
  }
};
</script>
<style lang="scss" scoped>
@import '@/scss/_component_layout.scss';
</style>