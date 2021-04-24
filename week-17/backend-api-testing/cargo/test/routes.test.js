const request = require('supertest');
const app = require('../routes.js');
const { expect } = require('chai');

//Overall status of the default ship
describe('GET /rocket', () => {
  it('checking default status of cargo', (done) => {
    request(app)
      .get('/rocket')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.deep.equal({
          caliber25: 0,
          caliber30: 0,
          caliber50: 0,
          shipstatus: 'empty',
          ready: false,
        });
        done();
      });
  });

  it('filling up cargo', (done) => {
    request(app)
      .get('/rocket/fill?caliber=.50&amount=5000')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.deep.equal({
          received: '.50',
          amount: '5000',
          shipstatus: '40%',
          ready: false,
        });
        done();
      });
  });

  it('checking filled status of cargo', (done) => {
    request(app)
      .get('/rocket')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.deep.equal({
          caliber25: 0,
          caliber30: 0,
          caliber50: 5000,
          shipstatus: '40%',
          ready: false,
        });
        done();
      });
  });
});
