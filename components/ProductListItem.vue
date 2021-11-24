<template>
  <v-card
    :loading="loading"
    class="mx-auto"
    height="100%"
    max-width="374"
    @click="$router.push('/ProductDetail/Product')"
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
        height="200"
        width="200"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-spacer></v-spacer>
    </div>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text class="mt-15">
      <div>
        <span class="my-4 text-subtitle-1">Guest price:</span>
        <span class="font-weight-bold"> TL281.40 </span>
      </div>
      <div>
        <span class="my-4 text-subtitle-1">Ordering number: 124364</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
