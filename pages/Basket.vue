<template>
  <v-container>
    <div
      class="px-auto mx-auto"
      style="width: 100%; border-color: #008fc5; border-style: solid"
    >
      <div
        class="d-flex"
        style="background-color: #008fc5; height: 4em; width: 100%"
      >
        <v-icon color="white">{{ icons.mdiChevronDown }}</v-icon>
        <div class="my-auto text-h6" style="color: white">My Products</div>
        <v-spacer></v-spacer>
        <v-text-field solo light class="mt-2 mr-15">
          <v-icon slot="append"> {{ icons.mdiPlusBoxMultiple }} </v-icon>
        </v-text-field>
        <v-divider vertical></v-divider>
        <v-icon class="mx-5" color="white">{{ icons.mdiTrashCan }}</v-icon>
      </div>
      <v-row>
        <span class="d-flex justify-center pa-5">
        <span style="width: 50%" class="d-flex justify-center pa-5">
          <v-col>
              <div>
            <div class="text-h6">
              Artistry Studio™ Los Angeles Edition Lights, Camera, Face Stick
            </div>
            <div class="text-h6 mt-5">TL131.180</div>
            <div class="text-Subtitle-2" style="color: #731472">
              Registered Customer price:
            </div>
            <NuxtLink to="/">Home page -></NuxtLink>
            <div class="text-subtitle-1">Ordering number: 124678</div>
            <div class="text-subtitle-1" >Size:5,5gr</div>
            <div
              class="ml-10"
              style="width: 40; height: 100; color: #f7f7f7"
            ></div>
             </div>
          </v-col>
        </span>
        <div style="width: 15em;"></div>

          <span class="d-flex justify-end">
            <v-card
              style="background-color: transparent"
              flat
              class="py-12 my-auto"
            >

              <v-card-text >
               <v-row>
                  <v-btn-toggle v-model="toggle_exclusive" mandatory>
                   <v-btn class="mr-1"> - </v-btn>
                   <v-btn class="mr-1"> 1 </v-btn>
                   <v-btn class="mr-1"> + </v-btn>
                   </v-btn-toggle>
                </v-row>
              </v-card-text>
            </v-card>
            <div class="text-subtitle-1 my-auto mx-10">Size: 5,5gr</div>
            <v-icon color="red">{{ icons.mdiTrashCan }}</v-icon>
          </span>
        </span>
      </v-row>

        <v-divider style="background-color: red" class="ma-1 mb-5"></v-divider>

        <div class="d-flex justify-end pa-8">
        <div style="width: 35%; height: 100">
          <v-row>
            <span class="text-subtitle-1">Subtotal</span>
            <v-spacer></v-spacer>
            <span class="text-subtitle-1">18 items</span>
            <v-spacer></v-spacer>
            <span class="text-subtitle-1">TL2,372,40</span>
          </v-row>
          <v-row class="mt-10">
            <span class="text-h6">Subtotal</span>
            <v-spacer></v-spacer>
            <span class="text-h6">18 items</span>
            <v-spacer></v-spacer>
            <span class="text-h6">TL2,372,40</span>
          </v-row>
          <div class="d-flex justify-end mt-3">
            <NuxtLink to="/">(incl. Total Tax=TL361.89)</NuxtLink>
          </div>
         </div>
       </div>
      </div>

    <div
    class="px-auto mx-auto d-flex mt-10"
          style="background-color: #034580;width: 80%; height: 4em;"
        >
          <div class="my-auto text-h6 ml-3" style="color: white">Order total</div>
          <div class="my-auto text-body ml-3" style="color: white">(excluding delivery)</div>
          <v-spacer></v-spacer>
          <div class="d-flex my-auto mx-5" >
            <div class="mr-3" style="color: white">18 items</div>
            <div class="mr-3" style="color: white">TL2,372,40</div>
          </div>
   </div>
          <div class="d-flex justify-end mt-5" style="width: 90%;">
              <v-btn to="/Basket" rounded color="#034580" class="px-15" dark large> Checkout </v-btn>
          </div>
  </v-container>
</template>



<script>
import { mdiTrashCan, mdiChevronDown, mdiPlusBoxMultiple } from '@mdi/js'
export default {
  data() {
    return {
      icons: { mdiTrashCan, mdiChevronDown, mdiPlusBoxMultiple },
      toggle_exclusive: undefined,
    }
  },
}
</script>
