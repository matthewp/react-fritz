import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  format: 'iife',
  plugins: [
    babel({
      exclude: process.env.BABEL_ENV === 'production' ? '' : 'node_modules/**'
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};