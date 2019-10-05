module.exports = {
  name: 'tickets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/tickets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
