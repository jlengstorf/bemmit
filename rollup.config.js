// eslint-disable-next-line import/no-extraneous-dependencies
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'dist/bemmit.es2015.js',
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
