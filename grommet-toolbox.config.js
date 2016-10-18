import path from 'path';
import webpack from 'webpack';

export default {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],
  scssAssets: ['src/scss/**/*.scss'],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, './node_modules')
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        'fetch': 'exports?self.fetch!whatwg-fetch'
      })
    ]
  },
  devServerPort: 8019,
  devServerProxy: {
    "/rest/*": 'http://localhost:8119'
  },
  websocketHost: 'localhost:8119',
  scsslint: true,
  sync: {
    hostname: 'grommet.us.rdlabs.hpecorp.net',
    username: 'ligo',
    remoteDestination: '/var/www/html/examples/chat/dist'
  },
  alias: {
    'grommet-templates': path.resolve(__dirname, '../grommet-templates/src/js'),
    'grommet-addons': path.resolve(__dirname, '../grommet-addons/src/js'),
    'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    'grommet': path.resolve(__dirname, '../grommet/src/js')
  },
  devPreprocess: ['set-webpack-alias'],
  distPreprocess: ['set-webpack-alias']
};
