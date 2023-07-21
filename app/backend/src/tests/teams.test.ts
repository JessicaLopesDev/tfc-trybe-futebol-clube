import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';

// import { Response } from 'superagent';
import { team, teams } from './mocks/team.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes Team', () => {
  // let chaiHttpResponse: Response;

  beforeEach(function () {
    sinon.restore();
  });

  it('Teste se retorna not found se o time não existir', async () => {
    sinon.stub(SequelizeTeam, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/teams/9999');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Team not found');
  });

  it('Teste se retorna a lista de times', async () => {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teams);
  });

  it('Teste se retorna o time pelo id', async () => {
    sinon.stub(SequelizeTeam, 'findOne').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });
});
