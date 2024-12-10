import {RuleSetRule} from 'webpack'

export function buildLoaders(): RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "i18next-extract", 
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

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
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ] // порядок имеет значение
}