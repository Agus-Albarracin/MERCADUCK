module.exports = {
  root: true,
  env: { node: true, es2017: true }, // Ajustado para un entorno de Node.js
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'], // Eliminado el plugin 'react-refresh'
  rules: {
    indent: ['error', 2],
    semi: ['error', 'never'],
    quotes: ['error', 'single']
    // Eliminado la regla específica de React
  }
}
