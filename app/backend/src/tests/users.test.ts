import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';

// import { Response } from 'superagent';
import { completUser, validBody, invalidEmail, invalidPassword, users } from './mocks/users.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes user', () => {
  // let chaiHttpResponse: Response;

  beforeEach(function () {
    sinon.restore();
  });
  it('Teste se retorna a lista de usuários', async () => {
    sinon.stub(SequelizeUser, 'findAll').resolves(users as any);
    const { status, body } = await chai.request(app).get('/login');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(users);
  });


});
