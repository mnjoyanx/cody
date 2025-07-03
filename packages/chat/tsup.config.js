import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  splitting: false,
  clean: true,
  minify: false,
  target: 'es2019',
  external: ['react', 'react-dom'],
  jsx: 'automatic',
  treeshake: true,
  outDir: 'dist',
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js'
    };
  },
  esbuildOptions(options) {
    options.bundle = true;
    options.loader = {
      ...options.loader,
      '.css': 'css'
    };
  }
});
