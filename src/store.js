import Vue from "vue";
import Vuex from "vuex";

import products from "./assets/js/products.js";
import upgrades from "./assets/js/upgrades.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countTotal: 0,
    products: products,
    upgrades: upgrades
  },
  mutations: {
      COOKIE_CLICK(state) {
          state.countTotal++
      },
      COOKIE_PRODUCED(state, { cookies }){
          state.countTotal += parseInt(cookies)
      },
      BUY_PRODUCT(state, { productId }) {
          state.products = state.products.map(product => {
              //console.log("product id" + product.id + " / " + productId)
              if (product.id === productId && state.countTotal>= product.price)
              {
                  state.countTotal -= product.price
                  product.purchased++
                  product.price = Math.round(1.1 * product.price)
              }
              return product
          })
      },
      BUY_UPGRADE(state, { upgradeId }){
          state.upgrades = state.upgrades.map(upgrade =>{
              if(upgrade.id === upgradeId && state.countTotal >= upgrade.price && upgrade.purchased === false)
              {
                  state.countTotal -= upgrade.price
                  upgrade.purchased = true
              }
              return upgrade
          })
      },
      UPDATE_PRODUCT(state, { upgId, upgValue }){
          state.products = state.products.map(product =>{
              if(product.id === upgId)
              {
                  product.cps = Math.round(product.cps * upgValue)
                  console.log(product)
              }
              return product
          })
      }
  },
});