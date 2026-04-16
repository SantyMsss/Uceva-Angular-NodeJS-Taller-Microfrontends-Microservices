const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-Inventory',
  filename: "remoteEntry.js",
  exposes: {
    './InventoryPage': './src/app/pages/inventory/inventory.page',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
