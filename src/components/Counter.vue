<template>
    <div class="col-md-8">
        <span>Cookies : {{ cookieCounter }}</span>
        <button @click="increment" class="cookieButton"><img src="../assets/PerfectCookie.png" alt="Erreur img"></button>
    </div>
</template>

<script>
export default {
  name: "counter",
  computed:{
    cookieCounter:{
        get:function(){
            return Math.round(this.$store.state.countTotal)
        }
    }
  },
  methods: {
    increment() {
      this.$store.commit("COOKIE_CLICK")
    }
  }
};
</script>

<style lang="scss">
    .cookieButton{
        background: transparent;
        border: none;
    }
</style>