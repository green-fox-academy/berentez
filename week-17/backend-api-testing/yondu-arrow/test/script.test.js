const request = require('supertest');
const app = require('../script.js');
const { expect } = require('chai');
const { get } = require('../../iamgroot/routes.js');

describe('GET /arrow', () => {
  it('no parameter', (done) => {
    request(app)
      .get('/arrow')
      .expect(500)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.error).to.equal('Not enough parameteres to calculate speed');
        done();
      });
  });
  it('with parameters', (done) => {
    request(app)
      .get('/arrow?distance=100.0&time=10.0')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.speed).to.equal('10');
        done();
      });
  });
  it('time = 0', (done) => {
    request(app)
      .get('/arrow?distance=100.0&time=0')
      .expect(400)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.error).to.equal('Cannot divide by 0');
        done();
      });
  });
});
