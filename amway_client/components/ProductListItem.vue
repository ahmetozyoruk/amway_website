<template>
  <v-card
    :loading="loading"
    class="mx-auto"
    height="100%"
    max-width="374"
     @click="$router.push({ path: `/ProductDetail/${product.id}`})"
  >
  
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="d-flex pt-5">
      <v-spacer></v-spacer>
      <v-img
        :src="product.Url" 
        height="200"
        width="200"
      ></v-img>
      <v-spacer></v-spacer>
    </div>

    <v-card-title>{{product.name}}</v-card-title>

    <v-card-text class="mt-15">
      <div>
        <span class="my-4 text-subtitle-1">Guest price:</span>
        <span class="font-weight-bold"> {{product.GuestPrice}}</span>
      </div>
      <div>
        <span class="my-4 text-subtitle-1">Ordering number: {{product.OrderingNumber}}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
   props: {
    product: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        GuestPrice: '',
        OrderingNumber: '',
        Url: ''
      })
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  // computed: {
  //   productPath() {
  //     return `/ProductDetail/${this.products.id} `
  //   }
  // },
  // methods: {
  //   reserve() {
  //     this.loading = true

  //     setTimeout(() => (this.loading = false), 2000)
  //   },
  // },
  

}
</script>
