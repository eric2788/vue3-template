<template>
  <v-app>
    <v-main>
      <router-view />
      <v-row class="text-center">
        <v-col>
          <router-link to="/">Home</router-link>
          <br>
          <router-link to="/about">About</router-link>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
