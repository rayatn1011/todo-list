import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    // dev
    server: {
        open: true,
    },
})
