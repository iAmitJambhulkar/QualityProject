const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: process.env.NODE_ENV === 'production' ? [
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 1024,
          minRatio: 0.8,
        }),
      ] : [],
    },
    configure: (webpackConfig) => {
      if (process.env.NODE_ENV === 'production') {
        // Aggressive optimization for production
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          minimize: true,
          usedExports: true,
          sideEffects: false,
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: 5,
            maxAsyncRequests: 5,
            minSize: 20000,
            maxSize: 244000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
                name: 'vendors',
              },
              react: {
                test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                name: 'react-vendor',
                priority: 20,
              },
              commons: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
                name: 'common',
              },
            },
          },
          runtimeChunk: 'single',
        };

        // Minimize CSS
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer || [];
        
        // Remove source maps in production
        webpackConfig.devtool = false;
      }
      return webpackConfig;
    },
  },
};
