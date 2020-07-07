import sourcemaps from 'rollup-plugin-sourcemaps';

// since rollup plugins cant be enabled from the command-line
export default {
  plugins: [sourcemaps()],
};