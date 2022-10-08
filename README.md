# API Cacao Trybe  

## Esta é uma atividade guiada de uma construção de API utilizando o método de Desenvolvimento Orientado a Testes (***TDD - Test Driven Development***).

### A API **Cacao Trybe** será composta por três endpoints, representados pelos seguintes contratos:  
👉 **GET** ***/chocolates***  

**Objetivo**:  

Retornar uma lista com todos os chocolates cadastrados.  
Código HTTP: 200 - OK;  
Body (exemplo):    
```javascript 
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```  
👉 **GET** ***/chocolates/:id***

**Objetivo**:  

Buscar um chocolate específico pelo ID.  
Código HTTP: 200 - OK;  
Body (exemplo):

```javascript 
    [
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```  
  
👉 **GET** ***/chocolates/brand/:brandId***

**Objetivo**:

Buscar uma lista de chocolates pelo ID (brandId) da marca.  
Código HTTP: 200 - OK;  
Body (exemplo):

```javascript 
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```
**Atenção**:
A maior parte do desenvolvimento dessa aplicação não foi realizada por mim, e sim pela [Trybe](https://github.com/betrybe).  
Este repositório serve como registro da minha pratica e aprendizado durante o [curso da Trybe](https://betrybe.com/).

