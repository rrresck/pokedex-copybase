const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  base: "/pokedex-copybase/",
  transpileDependencies: [
    'vuetify'
  ],
})
