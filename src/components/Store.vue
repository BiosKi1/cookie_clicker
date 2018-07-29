<template>
    <div class="store">
        <div v-for="product in products" @click="buy(product.id)">
                <h4>{{ product.name }}</h4>
                <p>Acquis: {{ product.purchased }}</p>
                <p>Prix: {{ product.price }}</p>
                <p>CPS: {{ product.cps }}</p>
            <hr>
        </div>
        <div v-for="upg in upgrades" @click="upgradeP(upg.id, upg.boost)">
            <h4>{{ upg.name }}</h4>
            <p>Prix: {{ upg.price }}</p>
            <p>Acquis: {{ upg.purchased == true ? "Acheté" : "Disponible" }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Store",
        props: ['product', 'upgrade'],
        computed: {
            products: function ()  {
                return this.$store.state.products
            },
            upgrades: function(){
                return this.$store.state.upgrades
            }
        },
        methods: {
            buyUpg(upgId){
                this.$store.commit("BUY_UPGRADE", { upgradeId: upgId })
            },
            updProduct(upgId, upgVal){
                this.$store.commit("UPDATE_PRODUCT", { upgId: upgId, upgValue: upgVal })
            },
            upgradeP(upgradeId, upgradeVal){
                this.buyUpg(upgradeId)
                this.updProduct(upgradeId, upgradeVal)
            },
            buy(pId) {
                this.$store.commit("BUY_PRODUCT", { productId: pId})
            },

            cookieProduce() {
                setInterval(() => {
                    let cookieP = 0
                    for(let p of this.products)
                    {
                        cookieP += p.cps * p.purchased
                    }
                    this.$store.commit("COOKIE_PRODUCED", { cookies : cookieP })
                }, 1000)
            }
        },
        mounted() {
            this.cookieProduce()
        },

    }
</script>

<style scoped>
    .store{
        background-color: aquamarine;
    }
</style>