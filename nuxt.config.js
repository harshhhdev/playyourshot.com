export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "YourShot",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "YourShot is an upcoming 2D top-down shooter with RPG elements, with a unique and hand-crafted world."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/fonts/Baracade.ttf", "~/assets/style/main.style.css"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxt/typescript-build"],
  fontawesome: {
    icons: {
      brands: ["faTwitter", "faYouTube", "faSteam", "faDiscord"]
    }
  },

  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],

  generate: {
    fallback: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
