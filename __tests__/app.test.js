const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('handles / route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  it('handles post route', () => {
    return request(app)
      .post('/echo')
      .send('words')
      .then(res => {
        expect(res.text).toEqual('words');
      });
  });
  it('handles /red route', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red<h1>');
      });
  });
  it('handles /green route', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green<h1>');
      });
  });
  it('handles /blue route', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue<h1>');
      });
  });

});
