const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials', 
    '@storybook/preset-scss',
  ],
  presets: [path.resolve(__dirname, './next-preset.js')],
  staticDirs: [
    { from: '../public/icons', to: '/icons' },
    { from: '../public', to: './' }
  ]
};
