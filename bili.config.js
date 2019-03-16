module.exports = {
  plugins: {
    vue: true,
  },
  output: {
    format: ['umd', 'cjs', 'es'],
    moduleName: 'VueModal',
    minify: true,
    fileName: 'vue-modal.[format].js',
    sourceMap: false,
  },
};
