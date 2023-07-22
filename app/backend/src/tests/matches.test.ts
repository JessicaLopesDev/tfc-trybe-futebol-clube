import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';

// import { Response } from 'superagent';
import { match, matches } from './mocks/match.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes match', () => {
  // let chaiHttpResponse: Response;

  beforeEach(function () {
    sinon.restore();
  });
  it('Teste se retorna a lista de partidas', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(matches as any);
    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(matches);
  });
});
