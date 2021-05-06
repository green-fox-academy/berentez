const request = require('supertest');
const app = require('../routes.js');
const { expect } = require('chai');

describe('POST/drax', () => {
  it('should return an error 400', (done) => {
    request(app)
      .post('/drax')
      .send({ name: 'apple', amount: 1, calorie: 95 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  //this fails ----
  it('should return OK', (done) => {
    request(app)
      .post('/drax')
      .send({ name: 'lemon', amount: 1, calorie: 17 })
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

// failing
describe('PUT/drax', () => {
  it('response should be Updated', (done) => {
    request(app)
      .put('/drax/1')
      .send({ amount: 2 })
      .expect(200)
      .end((err, res) => {
        // expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });
});

//failing

describe('DELETE/drax', () => {
  it('status should be 204', (done) => {
    request(app)
      .delete('/drax/4')
      .expect(204)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(204);
        done();
      });
  });
});
