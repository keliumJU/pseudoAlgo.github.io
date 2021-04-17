<template>
  <div class="lineal-algo">
    <CongruencialMultiplicativoAlgo
      msg="Welcome to Congruencial Multiplicativo Algorithm"
      class="back-degree"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import CongruencialMultiplicativoAlgo from "@/components/CongruencialMultiplicativoAlgo.vue";

export default {
  name: "Lineal",
  components: {
    CongruencialMultiplicativoAlgo
  }
};
</script>
<style lang="scss" scoped>
@import '@/scss/_component_layout.scss';
</style>