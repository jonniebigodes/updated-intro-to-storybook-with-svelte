module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    //require.resolve('./addons/example-addon.js')
    './.storybook/addons/register.js'
  ]
};
