<template>
  <div class="home">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col"></div>
        <div class="col">
          <img
            alt="Vue logo"
            src="../assets/logoalgo.png"
            width="300"
            height="300"
          />
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          <HelloWorld msg="Welcome to PseudoAlgo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>

</style>