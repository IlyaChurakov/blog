import { BuildOptions } from "./types/config";
import {Configuration as DevServerCOnfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerCOnfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}