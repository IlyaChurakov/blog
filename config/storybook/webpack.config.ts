import path from 'path';
import { BuildPaths } from './../build/types/config';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  if (!config.resolve) config.resolve = {};
  if (!config.resolve.alias) config.resolve.alias = {};

  config.resolve.alias['entities'] = path.resolve(paths.src, 'entities');
  config.resolve.alias['shared'] = path.resolve(paths.src, 'shared');

  const fileLoaderRule = config.module?.rules?.find(
    (rule) =>
      rule &&
      (rule as RuleSetRule).test instanceof RegExp &&
      // @ts-expect-error test
      (rule as RuleSetRule).test.test('.svg'),
  );
  if (fileLoaderRule) {
    (fileLoaderRule as RuleSetRule).exclude = /\.svg$/;
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoader(true));

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
