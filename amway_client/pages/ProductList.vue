<template>
  <div>
    <v-row>
      <NavigatePageTree></NavigatePageTree>
    </v-row>
    <ProductFiltering></ProductFiltering>

    <v-item-group>
      <v-container class="d-flex">
        <v-col cols="3">
          <CategoriProductList></CategoriProductList>
        </v-col>
        <v-col cols="9">
          <v-row v-if="products">
            <!-- <v-col
              v-for="(product,index) in products"
              :key="index"
              cols="12"
              md="3"
            > -->
            <v-col 
              v-for="product in products"
              :key="product.id"
              cols="12"
              md="3"
            >
              <v-item v-slot="{ active}">
                <ProductListItem
                  :key="product.id"
                  :color="active ? 'primary' : ''"
                  :product="product"

                >
                  <v-scroll-y-transition>
                    <div v-if="active" class="text-h2 flex-grow-1 text-center">
                      Active
                    </div>
                  </v-scroll-y-transition>
                </ProductListItem>
              </v-item>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import ProductListItem from '~/components/ProductListItem.vue'
import NavigatePageTree from '~/components/NavigatePageTree.vue'
import CategoriProductList from '~/components/CategoriProductList.vue'
import gql from 'graphql-tag'

export default {
  components: {
    ProductListItem,
    NavigatePageTree,
    CategoriProductList,
  },
  
  computed : {
    // products(){
    //   return this.$store.getters.getProducts
    // }
  },
  
  apollo:{
    products: gql`
      query getProducts{
        products {
          id
          name
          GuestPrice
          OrderingNumber
          Url
        }
      }
    `
  }

//   created(){
//     // this.$store.dispatch( 'getProduct', {
//     //   id: this.$route.params.product
//     // });
//       this.product= this.$store.getters.getProduct;
// },

 
}  
</script>
