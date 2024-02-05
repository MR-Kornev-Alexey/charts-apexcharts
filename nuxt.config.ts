// https://v3.nuxtjs.org/api/configuration/nuxt.config
import colors from 'vuetify/es5/util/colors'
export default defineNuxtConfig({
    modules: ['@nuxt/ui',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    buildModules: [
        '@nuxtjs/vuetify'
    ],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },
});
