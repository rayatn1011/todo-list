import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        'app-icons': FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
    }),
    eslint(),
  ],
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
