const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates!', async function () {
      const response = await chai
          .request(app)
          .get('/chocolates');
          expect(response.status).to.be.equals(200);
  });
});