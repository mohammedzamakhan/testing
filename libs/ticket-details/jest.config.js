module.exports = {
  name: 'ticket-details',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ticket-details',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
