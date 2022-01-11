module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat:\tAdding a new feature.' },
    { value: ':bug: fix', name: '🐛 fix:\tFixing a bug.' },
    { value: ':memo: docs', name: '📝 docs:\tWriting docs.' },
    {
      value: ':lipstick: style',
      name: '💄 style:\tAdd or update styles, ui or ux.',
    },
    {
      value: ':dizzy: anims',
      name: '💫 anims:\tAdd or update animations and transitions.',
    },
    {
      value: ':art: feat',
      name: '🎨 cosmetic:\tImproving structure/format of the code.',
    },
    {
      value: ':recycle: refactor',
      name: '♻️ refactor:\tCode change that neither fixes a bug nor adds a feature.',
    },
    {
      value: ':ambulance: hotfix',
      name: '🚑 hotfix:\tCritical hotfix.',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance.',
    },
    {
      value: ':lock: security',
      name: '🔒 security:\tFix security issues.',
    },
    {
      value: ':wheelchair: accessibility',
      name: '♿️ accessibility:\tAccessibility improvements.',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:\tAdding tests cases',
    },
    {
      value: ':mag: seo',
      name: '🔎 seo:\tImprove SEO.',
    },
    {
      value: ':pencil: typo',
      name: '✏️ typo:\tFix typo.',
    },
    {
      value: ':clown_face: mocks',
      name: '🤡 mocks:\tMocks things.',
    },
    {
      value: ':speech_baloon: text',
      name: '💬 text:\tAdd or update text and literals.',
    },
    {
      value: ':globe_with_meridians: translation',
      name: '🌐 translation:\tInternationalization and localization.',
    },
    {
      value: ':camera_flash: snapshots',
      name: '📸 snapshots:\tAdd or update snapshots.',
    },
    {
      value: ':tada: init',
      name: '🎉 init:\tBegin a project.',
    },
    {
      value: ':package: package',
      name: '📦 package:\tAdd or update compiled files or packages.',
    },
    {
      value: ':hammer: chore',
      name: '🔨 chore:\tAdd or update development scripts.',
    },
    {
      value: ':wrench: config',
      name: '🔧 config:\tConfiguration files.',
    },
    {
      value: ':truck: move',
      name: '🚚 move:\tMove/rename repository.',
    },
    { value: ':fire: chore', name: '🔥️ delete:\tRemoving code or file.' },
    { value: ':arrow_up: chore', name: '⬆️  add:\tAdding a dependency.' },
    { value: ':arrow_down: chore', name: '⬇️️  remove:\tRemove a dependency.' },
    { value: ':ok_hand: review', name: '👌 review:\tCode review change.' },
    { value: ':rewind: revert', name: '⏪️ revert:\tRevert to a commit.' },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: '🔀️ merge:\tMerge branches.',
    },
    { value: ':construction: wip', name: '🚧 wip:\tWork in progress.' },
    { value: ':boom: breaking', name: '💥 breaking:\tBreaking changes.' },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tAdd or update regards to build process.',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci:\tAdd or update regards to build process.',
    },
    {
      value: ':rotating_light: lint',
      name: '🚨 lint:\tFix compiler/linter warnings.',
    },
  ],

  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'test' },
      { name: 'hotfix' },
    ],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  subjectLimit: 100,
};
