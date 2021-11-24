<template>
  <v-app light>
    <AppBar  />
    <BottomAppBar />
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <Footer />
    <!-- <v-footer app>
      <Footer/>
   </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
