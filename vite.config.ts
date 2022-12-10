import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react(), eslint()],
    envDir: './env',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    /**
     * dev config
     */
    server: {
        open: true,
    },
    /**
     * build config
     */
});
