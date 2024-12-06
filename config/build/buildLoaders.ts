import {RuleSetRule} from 'webpack'

export function buildLoaders(): RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/, // обрабатываем файлы ts и tsx
        use: 'ts-loader', // 
        exclude: /node_modules/ // исключаем node_modules
    } // обработка не js файлов

    return [
        typescriptLoader,
        cssLoader
    ] // порядок имеет значение
}