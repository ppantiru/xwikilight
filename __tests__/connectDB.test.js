const qdb = require('../src/connectDB');
const con = require('../src/connectDB');

test('Test select from DB', () =>{
  expect(
    qdb()
  ).toBe('Sandbox.TestPage3');
});