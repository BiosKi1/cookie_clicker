<template>
  <div id="app">
    <div class="row">
      <counter></counter>
      <store></store>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Store from "./components/Store.vue";

export default {
  name: "app",
  components: {
    Counter,
    Store
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
