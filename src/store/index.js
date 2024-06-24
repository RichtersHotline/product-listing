import { createStore } from 'vuex'
const productsURL = "http://localhost:3000/Products"
export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {

  },
  mutations: {
    setProducts(state, products) {
    state.products = product
  },
  setProduct(state, product) {
state.product = product
  }
},
  actions: {
   
    async fetchProducts(context) {
      try {
    let res = await fetch(productsURL)
    let data = await res.json()
    context.commit("setProducts", data) 

    } catch (e) {

      console.log(e.message)

    }

    
  }
},

  modules: {


  }

})