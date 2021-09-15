module.exports = {
    // settings: {
    //   'import/resolver': {
    //     typescript: {
    //       config: path.resolve(__dirname, 'config/webpack.config.js'),
    //       alwaysTryTypes: true
    //     },
    //   },
    // },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      // tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      // 'airbnb',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: [
      '.eslintrc.js',
      // 'webpack.config.ts',
      // 'postcss.config.ts',
      // 'tailwind.config.ts',
      'config/*',
      'scripts/*'
    ],
    rules: {
      "react-hooks/rules-of-hooks": 'error',
      "react-hooks/exhaustive-deps": 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 2,
    },
  };
  