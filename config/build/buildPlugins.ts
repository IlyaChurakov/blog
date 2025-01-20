import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import {DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance} from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html // подключаем наш html
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
  }

  return plugins
}