module.exports = {
  extends: ['next/core-web-vitals', 'next'],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
