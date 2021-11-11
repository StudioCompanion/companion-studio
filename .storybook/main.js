const path = require('path')

const jsConfig = require('../packages/web/jsconfig.json')

const createAliasesFromPaths = () => {
  const prefixRegExp = new RegExp('src/.*')
  const aliases = {}
  console.log(jsConfig.compilerOptions.paths)
  Object.entries(jsConfig.compilerOptions.paths).forEach(([key, entry]) => {
    const [value] = entry
    const [newKey] = key.split('/')
    const pathMatches = value.match(prefixRegExp)

    /**
     * Check if TS Config is looking for src
     */
    if (pathMatches && pathMatches.length > 0) {
      const [localPath] = pathMatches
      const aliasPath = localPath
        .split('/')
        .filter((x) => x !== '*')
        .join('/')

      aliases[newKey] = path.resolve(__dirname, `../packages/web/${aliasPath}`)
    }
  })

  return aliases
}

module.exports = {

  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...createAliasesFromPaths(),
    }
    // Return the altered config
    return config
  },
}
