import getMoves from './get-moves';
import request from 'supertest';
import { app } from '../..';

describe('getMoves', () => {
  it('pulls a list of moves by character name', async () => {
    const response = await request(app)
    .get('/moves/Julia')
    .expect(200);
    expect(response.body).toMatchSnapshot();
    expect(Array.isArray(response.body)).toEqual(true);
  });
});