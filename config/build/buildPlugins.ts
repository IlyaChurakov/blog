import { BuildOptions } from './types/config';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import {ProgressPlugin, WebpackPluginInstance} from 'webpack'

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html // подключаем наш html
        }),
        new ProgressPlugin()
    ]
}