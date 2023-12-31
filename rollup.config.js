import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/index.js',
	output: {
    name: 'TinyHelper',
		file: 'dist/bundle.js',
		format: 'umd',
	},
  plugins: [resolve(), babel({ babelHelpers: 'bundled' }), terser()]
};
