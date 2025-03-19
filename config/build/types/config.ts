export type BuildMode = 'production' | 'development';
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
  project: 'storybook' | 'frontend' | 'jest';
}
