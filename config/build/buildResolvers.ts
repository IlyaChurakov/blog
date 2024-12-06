import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'] // файлы для которых не нужно указывать расширение при импорте
    }
}