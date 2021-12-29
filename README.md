# Boas vindas ao repositório do projeto Jest!

## Descrição do Projeto

Neste projeto, eu implementei testes utilizando o Jest para verificar se uma série de funções estão funcionando corretamente onde:
- Escrevi testes para funções assíncronas;
- Mockei funções;
- Mockei APIs;

---

## Instalação do projeto localmente
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades, mande mensagem para o meu e-mail _humberto_bonadiman@hotmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos-humberto
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos-humberto
  git clone git@github.com:Humberto-Bonadiman/Project-jest.git
```

3. Abra o diretório do projeto clonado, depois entre no diretório **tests** e dê duplo clique nos arquivos que se encontram no diretório para visualizar os códigos do projeto.
Caso você tenha a disposição o VsCode em sua máquina, você pode visualizar os códigos digitando o comando abaixo e abrindo os arquivos que estão dentro do diretório **tests**.
Não é necessário instalar nada mais.
```javascript
  code .
```

---

## Requisitos do projeto

### 1. Crie testes para uma função assíncrona

Complete os testes do arquivo `test/asyncJest.spec.js` para que funcionem com código assíncrono.

### 2. Crie um `mock` no teste mockFunctions

Crie mock functions no arquivo `test/mockFunctions.spec.js` para que os testes mockados "sobrescrevam" o código definido na pasta `src`. A ideia é que as funções criadas a partir do Jest tenham prioridade na sua execução.

### 3. Crie um `mock` para o retorno da API

Crie uma API mock no arquivo `test/mockApi.spec.js` para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

### 4. Crie funções no teste setupTeardown

Intercale funções entre os testes definidos no arquivo `test/setupTeardown.spec.js`.
