 import axios from "axios"

// state
export const state = () => ({
    products: [],
    product: {},
})

// getters
export const getters = {
    getProducts(state) {
        return state.products
    } ,

    getProduct(state){
        return state.product;
    }
}

// actions

export const actions = {
    initApp(context){
      axios.get("http://localhost:3004/products")
      .then(Response => {
          context.commit("initProducts", Response.data)
      })      
    },
    getProduct(context, id){
        axios.get("http://localhost:3004/products/", id )
        .then((response) => {
            context.commit("updateProduct", {
               response
            });
        })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
}
// mutations

 export const mutations = {
    initProducts(state, products){
        state.products = products
    },
    updateProduct(state, payload){
        state.product = payload;
    }
} 


  


