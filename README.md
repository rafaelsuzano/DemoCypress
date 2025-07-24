Claro! Aqui está uma sugestão de **atualização do `README.md`** 
do seu projeto [DemoCypress](https://github.com/rafaelsuzano/DemoCypress), 
incorporando as instruções completas de uso com Docker **sem docker-compose**, além de manter os comandos de execução para os testes Web e API.

---

````markdown
# DemoCypress

Este repositório demonstra práticas modernas de automação de testes com [
  Cypress](https://www.cypress.io/), incluindo:

- Uso de **fixtures** para dados simulados
- Aplicação de **Application Actions** para interagir com a lógica da aplicação
- Execução de testes via **CLI**
- Suporte a execução via **Docker** (sem `docker-compose`)

---

## 📁 Estrutura

- `cypress/fixtures/cadastro.js`: dados simulados usados nos testes
- `cypress/support/utils.js`: funções utilitárias para Application Actions
- `Dockerfile`: ambiente Docker para execução isolada dos testes

---

## 🚀 Instalação local

```bash
npm init -y
npm install cypress --save-dev
npm i cypress-plugin-api
````

---

## 🧪 Executar Testes

### Testes Web

```bash
npm run executar_web
```

### Testes API

```bash
npm run executar_api
```

> Os scripts acima devem estar definidos no seu `package.json`.

---

## 🐳 Executar com Docker (sem `docker-compose`)

### 1. **Build da imagem Docker**

```bash
docker build -t demo-cypress .
```

### 2. **Executar os testes**

```bash
docker run --rm -v $PWD:/app -w /app demo-cypress npm run teste
```

> **Nota:** o comando `npm run teste` deve estar definido no `package.json` como:
>
> ```json
> "scripts": {
>   "teste": "cypress run"
> }
> ```

---

## 🧠 Sobre Application Actions

Este projeto utiliza a técnica de **Application Actions**, permitindo chamadas diretas à lógica da aplicação, como:

```js
cy.window().then((win) => {
  win.app.metodoInterno();
});
```

---

## 🧪 Exemplo com Fixtures + Application Actions

```js
cy.fixture('cadastro').then((dados) => {
  cy.window().then((win) => {
    win.app.processarCadastro(dados);
  });
});
```

---

## ✅ Benefícios

* Testes mais rápidos e confiáveis
* Execução isolada via Docker
* Fácil integração com pipelines CI/CD

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


