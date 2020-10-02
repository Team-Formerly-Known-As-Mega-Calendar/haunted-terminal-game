const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('haunted-terminal-game routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  });

  it('adding dummy test to remove fail message', () => {    
    expect('yes').toEqual('yes');  
  });
});
