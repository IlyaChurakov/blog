import { Configuration as DevServerCOnfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerCOnfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
