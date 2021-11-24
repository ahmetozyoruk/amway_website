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
          <v-row>
            <v-col
              v-for="(item, index) in Productlist"
              :key="index"
              cols="12"
              md="3"
            >
              <v-item v-slot="{ active}">
                <ProductListItem
                  :color="active ? 'primary' : ''"
                  :product="item"

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
export default {
  components: {
    ProductListItem,
    NavigatePageTree,
    CategoriProductList,
  },
  data: () => ({
    model: null,
    Productlist: [
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
      {
        id: 0,
        image: 'https://picsum.photos/200/300',
        title: 'asdasdasd',
        price: 15,
        order_number: 15651,
        quantity: 0,
      },
    ],
  }),
}
</script>
