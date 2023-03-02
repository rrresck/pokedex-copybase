const { defineConfig } = require('@vue/cli-service')

export default defineConfig({
  base: "/pokedex-copybase/",
  transpileDependencies: [
    'vuetify'
  ],
})
