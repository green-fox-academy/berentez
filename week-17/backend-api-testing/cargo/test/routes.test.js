const request = require('supertest');
const app = require('../routes.js');
const { expect } = require('chai');

describe('GET /rocket', () => {
  it('checking default status of cargo', () => {
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
      });
  });
});
