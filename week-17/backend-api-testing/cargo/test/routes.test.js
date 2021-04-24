const request = require('supertest');
const app = require('../routes.js');
const { expect } = require('chai');
const { response } = require('express');

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

  it('checking filled up status of cargo', (done) => {
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

describe('Shipstatus tests', () => {
  it('restart memory', (done) => {
    request(app)
      .get('/rocket/zero')
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
  it('shipstatus = empty', (done) => {
    request(app)
      .get('/rocket')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipstatus).to.equal('empty');
      });
    done();
  });
  it('shipstatus = 40%', (done) => {
    request(app)
      .get('/rocket/fill?caliber=.50&amount=5000')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipstatus).to.equal('40%');
      });
    done();
  });
  it('shipstatus = 100%, ready to fly', (done) => {
    request(app)
      .get('/rocket/fill?caliber=.30&amount=7500')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipstatus).to.equal('full');
        expect(res.body.ready).to.equal(true);
      });
    done();
  });
  it('shipstatus = overloaded', (done) => {
    request(app)
      .get('/rocket/fill?caliber=.30&amount=7500')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.shipstatus).to.equal('overloaded');
      });
    done();
  });
});
