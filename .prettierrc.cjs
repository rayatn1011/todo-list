module.exports = {
  trailingComma: 'es5',
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: ['*.html'],
      options: {
        tabWidth: 2,
      },
    },
  ],
}
