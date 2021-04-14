const test = require('tape');
const request = require('supertest');
const app = require('../routes');
​
test('groot endpoint', (t) => {
  request(app)
  .get('/groot')
  .query({message: 'sometext'})
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res){
    const expectedResponse = {'received': 'sometext', 'translated': 'I am Groot!'}
    t.error(err, 'I am Groot');
    t.same(res.body, expectedResponse, 'expected translation' )
    t.end();
  });
});