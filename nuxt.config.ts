// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            charset: 'utf-8',
            title: 'lunarsolar',
            meta: [
                { name : 'description', content: '양력 음력 변환하기' }
            ]
        }
    },

})
