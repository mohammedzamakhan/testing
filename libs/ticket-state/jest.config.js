module.exports = {
  name: 'ticket-state',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ticket-state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
