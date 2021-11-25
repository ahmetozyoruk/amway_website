<template>
  <v-sheet>
    <v-app-bar height="75" dense light style="padding-left: 18em;padding-right: 18em;">
      <v-container class="d-flex flex-row">
        <v-menu left bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon large color="#ff5d76"> {{ icons.mdiMenu }} </v-icon>
              SHOPP
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(menuitem, n) in menu"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>
                <div class="text-center">
                  <v-menu offset-x>
                    <template v-slot:activator="{ on, attrs }">
                      <v-list-item-title v-bind="attrs" v-on="on">
                        {{ menuitem.head }}
                      </v-list-item-title>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in menuitem.item"
                        :key="index"
                      >
                        <NuxtLink style="color: black; text-decoration: none;"  to="/ProductList">
                          <div>
                          <v-list-item-title>
                            {{ item }}
                          </v-list-item-title>
                          </div>
                        </NuxtLink>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-tabs
          background-color="transparent"
          center-active
          dark
        >
        <v-tabs-slider color="red"></v-tabs-slider>
        <v-tab>
        <v-btn text color="black" class="my-10"> ABOUT AMWAY </v-btn>
        </v-tab>
        <v-tab>
        <v-btn text color="black" class="my-10"> BUSINESS OPPORTUNITY </v-btn>
        </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
  </v-sheet>
</template>

<script>
import { mdiMenu } from '@mdi/js'
export default {
  data() {
    return {
      icons: {
        mdiMenu,
      },
      menu: [
        {
          head: 'NUTRIRION',
          item: [
            'Amway Home',
            'Artistry Studio',
            'Artistry Signature',
            'Glister',
            'Artistry Supreme LX',
          ],
        },
        {
          head: 'BEAUTY',
          item: {},
        },
        {
          head: 'HOME',
          item: {},
        },
        {
          head: 'PERSONEL CATE',
          item: {},
        },
      ],
    }
  },
}
</script>
