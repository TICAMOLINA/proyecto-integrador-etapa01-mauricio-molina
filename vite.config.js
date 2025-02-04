import { resolve } from 'path' /* node */

export default {

    css: {
        devSourcemap: true 
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    }
}

