// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            charset: 'utf-8',
            title: '양력음력 변환',
            meta: [
                { name : 'description', content: '양력 음력 변환하기' }
            ]
        }
    },
    css: ['ant-design-vue/dist/antd.css'],
    build: {
        loaders: {
            less: {
            }
        }
    }
})
