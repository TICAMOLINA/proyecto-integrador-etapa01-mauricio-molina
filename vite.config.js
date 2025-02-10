import { resolve } from 'path' /* node */

export default {

    css: {
        devSourcemap: true 
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/pages/about/about.html'),
                contact: resolve(__dirname, 'src/pages/contact/contact.html')
            }
        }
    }
}

