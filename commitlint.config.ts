export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'header-trim': [2, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['sentence-case']],
    'type-case': [1, 'always', ['lower-case']],
    'type-empty': [2, 'never'],
    'type-enum': [1, 'always', [
      'build',
      'chore',
      'ci',
      'deps',
      'docs',
      'feat',
      'feat!',
      'fix',
      'fix!',
      'perf',
      'perf!',
      'refactor',
      'refactor!',
      'revert',
      'style',
      'test'
    ]]
  }
}
