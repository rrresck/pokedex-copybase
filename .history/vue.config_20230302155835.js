const { defineConfig } = require('@vue/cli-service')

module.exports = {
  baseUrl: "/pokedex-copybase"
}

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/pokedex-copybase/" : "/",
  transpileDependencies: [
    'vuetify'
  ],
})
