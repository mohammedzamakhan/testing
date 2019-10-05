module.exports = {
  name: 'ticker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ticker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
