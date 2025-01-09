import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: colors.purple.lighten4,
                        secondary: colors.red.lighten4,
                    }
                },
            },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})
