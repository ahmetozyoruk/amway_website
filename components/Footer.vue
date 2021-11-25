<!--<template>
  <v-footer>
      <v-card
      flat
      tile
      class="indigo white--text text-center"
      color="#008FC5"
    >
    <v-row md="3" ">

    </v-row>
    <v-row md="6"></v-row>
    <v-row md="3"></v-row>
    </v-card>

  </v-footer>
</template>-->



<template>
      <v-card
        flat
        tile
        width="100%"
        class="blue  text-start"
      >

        <v-card-title  class="white--text mx-8">
        <h6>CONNECT WITH US</h6>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-1"
          dark
          icon
        >
          <v-icon size="30px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

        <v-divider></v-divider>
        <v-card color="white" class="black--text">
        <v-card-text >
          <v-row md="1">

           <v-col md="2" >
             <h2 >SHOP WITH US</h2>
             <h4 class="mx-5">Nutrition</h4>
             <h4 class="mx-5">Beauty</h4>
             <h4 class="mx-5">Home</h4>
           </v-col>
           <v-col md="2">
             <h2>ABOUT AMWAY</h2>
             <h4 class="mx-5">Who we are</h4>
             <h4 class="mx-5">Vision and values</h4>
             <h4 class="mx-5">Video Library</h4>
             <h4 class="mx-5">Amway newsroom</h4>
           </v-col>
           <v-col md="3">
             <h2>BUSINESS OPPORTUNITY</h2>
             <h4 class="mx-10">Business</h4>
             <h4 class="mx-10">Benefits</h4>
           </v-col>
           <v-col md="2">
             <h2>SECURE SHOPPING</h2>
             <h4 class="mx-5">Privavcy Policy</h4>
             <h4 class="mx-5">Return Policy</h4>
             <h4 class="mx-5">Paytment Delivery Options</h4>
             <h4 class="mx-5">How to Buy Amway Products</h4>
             <h4 class="mx-5">Electronic Signature</h4>
             <h4 class="mx-5">Terms of use</h4>
           </v-col>
           <v-col md="1"><v-spacer></v-spacer></v-col>
           <v-col md="2">
             <h3>NEED HELP</h3>
             <v-row md="3">
             <v-col md="2" class="my-5" >
               <v-btn icon>
               <v-icon small>mdi-help</v-icon>
              </v-btn>
              </v-col>
             <v-col md="10" class="my-5">How to use the website</v-col>
             </v-row>
             <h3>AMWAY CONTACT CENTER</h3>
            <v-row md="3">
               <v-col md="2" small class="my-5"><v-icon >mdi-email</v-icon></v-col>
               <v-col md="10" class="my-5">infoTR@amway.com</v-col>
            </v-row>
            <v-row md="3">
               <v-col md="2" small  class="my-5"><v-icon >mdi-phone</v-icon></v-col>
               <v-col md="10"  class="my-5">+902324554444</v-col>
            </v-row>
            <v-row md="3">
               <v-btn
              rounded
              color="primary"
              dark
            >
              Contact us
            </v-btn>
            </v-row>
            </v-col>
           </v-row>
        </v-card-text>
        </v-card>
      </v-card>
</template>

<script>
  export default {
    data: () => ({
     icons: [
        'mdi-youtube',
        'mdi-facebook',
        'mdi-instagram',
        'mdi-HelpCircle',
      ],

    }),

  }
</script>




