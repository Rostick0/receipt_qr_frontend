// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/scss/index.scss"],
  modules: ["composable-ui", "@nuxtjs/device", "@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/@component-ui/components",
      pathPrefix: true,
      prefix: "CuiUi",
    },
    "~/components",
  ],
  devServer: {
    port: 3030,
  },
});
