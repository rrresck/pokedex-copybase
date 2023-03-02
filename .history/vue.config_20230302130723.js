const { defineConfig } = require('@vue/cli-service')
import Vue from 'vue';

export default defineConfig({
  base: "/pokedex-copybase/",
  plugins: [Vue()],
  transpileDependencies: [
    'vuetify'
  ],
})
