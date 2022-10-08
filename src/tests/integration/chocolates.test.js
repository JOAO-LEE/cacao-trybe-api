const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const { app } = require('../../app');

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

chai.use(chaiHttp);

const { expect } = chai;
describe('Testando as rotas:', () => {

  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {

    sinon.stub(fs.promises, 'readFile')
          .resolves(mockFile);

    it('Retorna a lista completa de chocolates!', async function () {

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equals(200);
      expect(response.body.allChocolates).to.deep.equal(output);

    });

  });

  describe('Usando o método GET em /chocolates/:id', function () {

    it('Retorna chocolates pelo id', async function () {

      const response = await chai.request(app).get('/chocolates/1')
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolates).to.deep.equal(output[0]);
    });

  });

  describe('Usando o método GET em /chocolates/brands/2', function () {
    it('Retorna chocolates pelo id da marca', async function () {

      const response = await chai.request(app).get('/chocolates/brand/1');
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolates[0]).to.deep.equal(output[0], output[1])
    });

  });

});
