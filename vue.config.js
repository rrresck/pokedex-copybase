import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
})
