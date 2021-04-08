<template>
  <div class="lineal-algo">
    <LinealAlgo msg="Welcome to Lineal Algorithm" style="background-color:blueviolet;"/>
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

<style scoped>
.lienal-algo{
  background-color:blueviolet;
}
</style>