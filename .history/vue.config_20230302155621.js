const { defineConfig } = require('@vue/cli-service')

module.exports = {
  baseUrl: "/pokedex-database"
}

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/pokedex-database/" : "/",
  transpileDependencies: [
    'vuetify'
  ],
})
