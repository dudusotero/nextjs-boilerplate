module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to call the new component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/template.stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/template.styles.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/template.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/template.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'templates/template.types.ts.hbs'
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        separator: '',
        templateFile: 'templates/export.components.ts.hbs'
      },
      {
        type: 'append',
        path: '../src/components/types.ts',
        separator: '',
        templateFile: 'templates/export.types.ts.hbs'
      }
    ]
  })
}
