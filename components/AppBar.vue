<template>
  <v-sheet>
    <v-app-bar height="75" class="pt-3" dense dark color="#034580" style="padding-left: 18em;padding-right: 18em;">
      <v-container class="d-flex flex-row">
        <v-app-bar-nav-icon class="ml-15">
          <NuxtLink to="/">
            <img
              title="Amway logo"
              alt="Amway logo"
              style="width: 10em"
              src="@/static/logo-amway_white.svg"
            />
          </NuxtLink>
        </v-app-bar-nav-icon>

        <v-text-field solo light class="ml-15">
          <v-icon slot="append"> {{ icons.mdiMagnify }} </v-icon>
        </v-text-field>

        <v-spacer></v-spacer>
        <v-menu
        left
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
          >
            EN
            <v-icon large onmouseover=""> {{ icons.mdiChevronDown }} </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

        <v-divider vertical light></v-divider>

        <v-btn text to="SingIn"> Sign in </v-btn>
        <v-divider vertical light></v-divider>
        <v-btn text to="Register"> Register </v-btn>
        <v-divider vertical light></v-divider>
        <v-btn icon to="/Basket">
          <v-icon large> {{ icons.mdiCart }} </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </v-sheet>
</template>

<script>
import { mdiCart, mdiChevronDown, mdiMagnify } from '@mdi/js'
export default {
  data() {
    return {
      icons: {
        mdiCart,
        mdiChevronDown,
        mdiMagnify,
      },
    }
  },
}
</script>
