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
    products: function ()  {
      return this.$store.state.products
    },
    cookieCounter:{
        get:function(){
            return Math.round(this.$store.state.countTotal)
        }
    }
  },
  methods: {
    increment() {
        let cookieCl = 0
        for(let p of this.products)
        {
            if(p.id == 1)
            {
                cookieCl += p.cps
            }
        }
        this.$store.commit("COOKIE_PRODUCED", { cookies : cookieCl })
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