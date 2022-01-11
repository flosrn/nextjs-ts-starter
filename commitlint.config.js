module.exports = {
  extends: ['gitmoji'],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'anims',
        'cosmetic',
        'refactor',
        'ci',
        'test',
        'hotfix',
        'add',
        'remove',
        'delete',
        'security',
        'perf',
        'seo',
        'config',
        'snapshots',
        'accessibility',
        'translation',
        'text',
        'package',
        'security',
        'move',
        'typo',
        'revert',
        'merge',
        'review',
        'wip',
        'breaking',
        'lint',
        'init',
        'vercel',
      ],
    ],
  },
};
