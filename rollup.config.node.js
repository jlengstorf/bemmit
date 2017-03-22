import config from './rollup.config';

export default Object.assign({}, config, {
  dest: 'dist/bemmit.umd.js',
  format: 'umd',
});
