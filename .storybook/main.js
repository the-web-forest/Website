const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-scss'],
  presets: [path.resolve(__dirname, './next-preset.js')],
  framework: "@storybook/react"
};

