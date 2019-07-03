module.exports = {
  extract: true,
  sourceMap: false,
  plugins: [
    require('@csstools/postcss-sass')({ outputStyle: "compressed" }),
    require("postcss-preset-env")({ stage: 4 }),
    require('cssnano')({
      preset: 'advanced',
    }),
  ],
  parser: 'postcss-scss',
}