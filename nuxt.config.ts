// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  pages: true,

  build: {
    transpile: ["vue-toastification"],
  },
  css: ["~/assets/scss/index.scss"],
  modules: [
    "composable-ui",
    "@nuxtjs/device",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
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
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Titan+One&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
