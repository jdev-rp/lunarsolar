// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    head: {
        script: [
            {
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2015887020918613",
                async: true,
                crossorigin: "anonymous"
            }
        ]
    },
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
