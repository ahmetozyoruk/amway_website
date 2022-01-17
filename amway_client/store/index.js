 import axios from "axios"

// state
export const state = () => ({
    products: [],
    product: {},
    user: null,
})

// getters
export const getters = {
    getProducts(state) {
        return state.products
    } ,

    getProduct(state){
        return state.product;
    },
    getUser(state) {
        return state.user
    },
    
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
    },
    async onAuthStateChangedAction(state, { authUser, claims }) {
        if (!authUser) {
          // remove state
          state.commit('SET_USER', null)
    
          //redirect from here
          this.$router.push({
            path: '/SingIn',
          })
        } else {
          const { uid, email } = authUser
          state.commit('SET_USER', {
            uid,
            email,
          })
        }
      },
    
}
// mutations

 export const mutations = {
    initProducts(state, products){
        state.products = products
    },
    updateProduct(state, payload){
        state.product = payload;
    },
    SET_USER(state, user) {
        state.user = user
    },
    
} 


  


