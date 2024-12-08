import { BuildOptions } from './types/config';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import {DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance} from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html // подключаем наш html
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
}