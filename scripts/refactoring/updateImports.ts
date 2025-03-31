import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const imports = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
    const start = moduleSpecifier.split('/')[0];

    if (imports.includes(start)) {
      importDeclaration.setModuleSpecifier('@/' + moduleSpecifier);
    }
  });
});

project.save();
