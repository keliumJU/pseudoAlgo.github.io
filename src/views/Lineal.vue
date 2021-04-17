<template>
  <div>
    <LinealAlgo
      msg="Welcome to Lineal Algorithm"
      class="back-degree" 
    />
  </div>
</template>
<script>
// @ is an alias to /src
import LinealAlgo from "@/components/LinealAlgo.vue";

export default {
  name: "Lineal",
  components: {
    LinealAlgo
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/_component_layout.scss';
</style>
