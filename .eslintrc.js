module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['standard', 'react', 'react-hooks'],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": [2, { skipUndeclared: true }]
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8 // optional, recommended 6+
  },
  settings: {
    react: {
      version: '16.8'
    }
  },
  env: {
    browser: true
  }
}
