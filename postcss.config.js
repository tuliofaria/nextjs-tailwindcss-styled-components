const NODE_ENV = process.env.NODE_ENV || 'development'
const isDev = NODE_ENV === 'development'

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    !isDev
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/*.js',
              './components/*.js',
              './atoms/*.js',
              './molecules/*.js',
              './layouts/*.js',
            ],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          },
        ]
      : null,
  ],
}
