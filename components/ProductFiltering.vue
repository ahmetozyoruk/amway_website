<template>
<div style="border-bottom: 0.01em solid gray;">
    <v-row md="1">
      <v-col md="2" class="my-5" >
        <p style="font-size: small">Viewing 29 of 29 results</p>
      </v-col>
      <v-spacer></v-spacer>

      <v-col md="3" class="d-flex">
        <p class="mx-3 my-5" style="width: 4em;">Sort by</p>
        <v-select
          :items="items"
          label="Price Low - High"
          outlined
          class="my-1"
          small
          :append-icon="icons.mdiChevronDown"
          :menu-props="{ bottom: true, offsetY: true }"
        ></v-select>
      </v-col>
      <v-col md="2" class="ml-15">
        <v-row class="my-4 ">
          <p class="mr-3 my-auto" style="display: inline-block">View</p>
          <v-btn
            style="background-color: white; display: inline-block;"
            class="mx=1"
          >
            <p class="my-2">12</p>
          </v-btn>
          <v-btn style="background-color: #F2F9FC; display: inline-block;">
            <p class="my-2">48</p>
          </v-btn>
        </v-row>
      </v-col>
      <v-divider class="mx-2 my-7" vertical></v-divider>
      <v-col md="2">
        <v-row class="my-4">
          <v-btn style="background-color: #d6ffff; display: inline-block">
            <img src="@/static/wid.svg" />
          </v-btn>
          <v-btn style="background-color: white; display: inline-block">
            <img src="@/static/menu.svg" />
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
</div>
</template>


<script>
import { mdiChevronDown } from '@mdi/js';
export default {
  data() {
    return {
      icons : {
        mdiChevronDown
      },
      items: ['Name(A-Z)', 'Price Low-High', 'Brand(A-Z)', 'Oldest'],
      rating1: 5,
      page: 1,
    }
  },
}
</script>
