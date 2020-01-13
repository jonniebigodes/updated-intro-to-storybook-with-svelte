module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    require.resolve('./addons/register.js')
  ]
};
