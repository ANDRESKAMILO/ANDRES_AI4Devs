import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, LTI ATS Backend!');
});

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, LTI ATS Backend!');
  });
});
