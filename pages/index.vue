<template>
  <div class="mt-5,width:100%,height:100%" >

      <v-carousel show-arrows-on-hover >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item> 
        
      </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/photos/1.jpeg',
          },
          {
            src: '/photos/2.jpeg',
          },
          {
            src: '/photos/3.jpeg',
          },
          {
            src: '/photos/4.jpeg',
          },
          {
            src: '/photos/5.jpeg',
          },
        ],
      }
    },
  }
</script>
