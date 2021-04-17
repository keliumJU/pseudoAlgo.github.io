<template>
  <div class="congruencial-algo">
    <CongruencialAditivoAlgo 
    msg="Welcome to Congruencial Aditivo Algorithm" 
    class="back-degree"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import CongruencialAditivoAlgo from "@/components/CongruencialAditivoAlgo.vue";

export default {
  name: "CongruencialAditivo",
  components: {
    CongruencialAditivoAlgo
  }
};
</script>
<style lang="scss" scoped>
@import '@/scss/_component_layout.scss';
</style>