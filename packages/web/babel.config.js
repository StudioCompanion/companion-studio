module.exports = function (api) {
  return {
    presets: ['next/babel'],
    plugins: [
      [
        'babel-plugin-styled-components',
        { ssr: true, displayName: api.env() === 'development' },
      ],
    ],
  }
}
