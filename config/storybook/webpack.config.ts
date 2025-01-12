import path from 'path';
import { BuildPaths } from './../build/types/config';
import { Configuration, DefinePlugin, RuleSetRule } from "webpack";
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({config}: {config: Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // config.plugins?.push(
    //     new DefinePlugin({
    //         __IS_DEV__: true
    //     })
    // );
    
    const fileLoaderRule = config.module?.rules?.find(
        // @ts-expect-error test
        (rule ) => rule && (rule as RuleSetRule).test instanceof RegExp && (rule as RuleSetRule).test.test('.svg')
    );
    if (fileLoaderRule) {
        (fileLoaderRule as RuleSetRule).exclude = /\.svg$/;
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.module?.rules?.push(buildCssLoader(true))

    return config
}