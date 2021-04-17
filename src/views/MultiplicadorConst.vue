<template>
  <div class="cuad-medios">
    <CpMultiplicadorConst msg="Welcome to Multiplier Const" 
      class="back-degree" 
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CpMultiplicadorConst from "@/components/CpMultiplicadorConst.vue";

export default {
  name: "MultiplicadorConstante",
  components: {
    CpMultiplicadorConst
  }
};
</script>
<style lang="scss" scoped>
@import '@/scss/_component_layout.scss';
</style>