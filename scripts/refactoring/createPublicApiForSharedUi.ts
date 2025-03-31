import path, { isAbsolute } from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/shared/ui/**/*.ts');
project.addSourceFilesAtPaths('src/shared/ui/**/*.tsx');

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((dir) => {
  const indexFilePath = dir.getPath() + '/index.ts';
  const indexFile = dir.getSourceFile(indexFilePath);

  if (!indexFile) {
    const componentName = dir
      .getBaseName()
      .split('')
      .map((l, i) => (i === 0 ? l.toUpperCase() : l))
      .join('');
    const sourceCode = `export * from './${componentName}'`;
    const createdIndexFile = dir.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });
  }
});

const files = project.getSourceFiles();

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');

    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(value) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
