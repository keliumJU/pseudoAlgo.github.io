<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoalgo.png" width="300" height="300"/>
    <HelloWorld msg="Welcome to PseudoAlgo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
