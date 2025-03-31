import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/shared/ui/**/*.ts');
project.addSourceFilesAtPaths('src/shared/ui/**/*.tsx');

const dirExceptions = ['popups', 'stack'];

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((dir) => {
  const indexFilePath = dir.getPath() + '/index.ts';
  const indexFile = dir.getSourceFile(indexFilePath);

  if (!dirExceptions.includes(dir.getBaseName())) {
    indexFile?.delete();
  }
});

project.save();
