<template>
<div>
  <div class="d-flex flex-column ">
    <v-card class="pa-2 d-flex noneBorder" outlined tile>
      <v-card-title >FILTER</v-card-title>
      <v-spacer></v-spacer>
    </v-card>
  </div>
  <div class="d-flex flex-column ">
    <v-card class="pa-2 d-flex noneBorder" outlined tile>
      <v-card-title >CATEGORY</v-card-title>
      <v-spacer></v-spacer>
      <v-icon class="mx-2" color="red"> {{ icons.mdiPlus }} </v-icon>
    </v-card>
  </div>
  <div class="d-flex flex-column">
    <v-card class="pa-2 d-flex noneBorder" outlined tile>
      <v-card-title >FEATUREED</v-card-title>
      <v-spacer></v-spacer>
      <v-icon class="mx-2" color="red"> {{ icons.mdiPlus }} </v-icon>
    </v-card>
  </div>
  <div class="d-flex flex-column noneBorder">
    <v-card class="pa-2 d-flex" outlined tile>
      <v-card-title >PRICE</v-card-title>
      <v-spacer></v-spacer>
      <v-icon class="mx-2" color="red"> {{ icons.mdiPlus }} </v-icon>
    </v-card>
  </div>

</div>


</template>

<script>
import { mdiPlus } from '@mdi/js';
export default {
  data() {
    return {
      icons : {
        mdiPlus
      },
    }
  },
}
</script>

<style>
.noneBorder
{
  border-left: 1px none;
  border-right: 1px none;

}
</style>
