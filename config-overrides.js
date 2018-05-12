/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  // ts-import-plugin
  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [tsImportPluginFactory({
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'true',
      })]
    })
  };

  // customize theme
  config = rewireLess.withLoaderOptions({
    // brand-primary if antd-mobile
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);

  // less-modules
  config.module.rules[1].oneOf.unshift(
    {
      test: /\.less$/,
      // exclude: /node_modules|antd-mobile\.css/,
      exclude: /node_modules|antd\.less/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            minimize: true,
            // sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]'
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              })
            ]
          }
        },
        {
          loader: require.resolve('less-loader')
        }
      ]
    }
  );

  return config;
}