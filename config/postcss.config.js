const path = require("path");
module.exports = {
    syntax: 'postcss-scss',
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      autoprefixer: {},
      tailwindcss: { config: path.resolve(__dirname, './tailwind.config.js' )},
    }
}