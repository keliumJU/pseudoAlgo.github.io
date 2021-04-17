<template>
  <div>
    <bbsa msg="Welcome to Blum Blum y Shub Algorithm" 
      class="back-degree" 
    />
  </div>
</template>
<script>
// @ is an alias to /src
import bbsa from "@/components/BlumBlumYshubAlgo.vue";

export default {
  name: "bbs",
  components: {
    bbsa
  }
};
</script>
<style lang="scss" scoped>
@import '@/scss/_component_layout.scss';
</style>