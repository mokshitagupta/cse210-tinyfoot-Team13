import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'Tinyfoot',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true
    }),
    terser()
  ]
};