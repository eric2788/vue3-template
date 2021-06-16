<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="logo"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <div>Welcome to the Vuetify 3 Bitch</div>
        </h1>
          <v-btn color="primary" @click="increment">You clicked me {{ count }} times</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import logo from '../assets/logo.svg'

export default {
  name: 'Home',

  setup(){
    const store = useStore()
    return { 
      increment(){
        store.commit('increment')
      },
      count: computed(() => store.state.count)
     }
  },

  data: () => ({
    logo
  })


}
</script>
