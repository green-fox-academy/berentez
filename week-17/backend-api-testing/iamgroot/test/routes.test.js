const request = require('supertest');
const app = require('../routes.js');
const { expect } = require('chai');

describe('GET /groot', () => {
  it('no param', (done) => {
    request(app)
      .get('/groot')
      .expect(200)
      .end((_, res) => {
        expect(res.body.error).to.equal('I am Groot!');
        done();
      });
  });
});

describe('GET /groot', () => {
  it('message param', (done) => {
    request(app)
      .get('/groot?message=lol')
      .expect(200)
      .end((_, res) => {
        expect(res.body.translated).to.equal('I am Groot!');
        done();
      });
  });
});
