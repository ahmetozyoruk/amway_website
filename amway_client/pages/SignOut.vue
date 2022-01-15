<template>
  
</template>

<script>
export default {
  asyncData() {
    $nuxt.$fire.auth.signOut()
  }
}
</script>

<style>
/* stylelint-disable no-empty-source */
</style>
