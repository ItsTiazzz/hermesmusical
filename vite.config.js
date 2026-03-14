import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    publicDir: resolve(__dirname, 'src/assets'),
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                discord: resolve(__dirname, 'src/discord.html'),
                about: resolve(__dirname, 'src/about.html'),
                rehearsals: resolve(__dirname, 'src/rehearsals.html'),
            }
        }
    },
    server: {
        port: 8080
    },
    // Optional: Silence Sass deprecation warnings. See note below.
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                ],
            },
        },
    },
}