import antfu from '@antfu/eslint-config';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    vue: true,
    typescript: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: 'single',
    },
  }, {
    rules: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'node/no-process-env': ['off'],
      'perfectionist/sort-imports': ['error', {
        tsconfigRootDir: '.',
      }],
      'unicorn/filename-case': ['error', {
        cases: {
          kebabCase: true,
          snakeCase: true,
        },
        ignore: ['README.md'],
      }],
    },
  }),
);
