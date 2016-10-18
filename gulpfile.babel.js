import gulp from 'gulp';
import { argv } from 'yargs';
import grommetToolbox, { getOptions } from 'grommet-toolbox';

const options = getOptions();

gulp.task('set-webpack-alias', function () {
  if (options.alias && argv.useAlias) {
    options.webpack.resolve.alias = options.alias;
  }
});

grommetToolbox(gulp);
