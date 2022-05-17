import type { StorybookConfig } from '@storybook/core-common'
import path from 'path'

import jsConfig from '../tsconfig.json'

const createAliasesFromPaths = () => {
  const prefixRegExp = new RegExp('src/.*')
  const aliases = {}
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
const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react',
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
        controls: false,
        docs: false,
      },
    },
    'storybook-addon-next-router',
  ],
  staticDirs: ['../packages/web/public'],
  core: { builder: 'webpack5' },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...createAliasesFromPaths(),
    }
    // Return the altered config
    return config
  },
  // features: {
  //   babelModeV7: true,
  // },
}

module.exports = config
