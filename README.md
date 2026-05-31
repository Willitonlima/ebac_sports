# EBAC Sports

Projeto de loja virtual desenvolvido com React, TypeScript, Redux Toolkit e styled-components. A aplicacao exibe produtos esportivos consumidos pela API da EBAC, permite favoritar itens e adicionar produtos ao carrinho.

## Funcionalidades

- Listagem de produtos da loja EBAC Sports
- Adicao e remocao de produtos dos favoritos
- Adicao de produtos ao carrinho
- Controle para evitar itens duplicados no carrinho
- Calculo do valor total dos itens adicionados
- Layout responsivo para desktop, tablet e mobile

## Tecnologias

- React
- TypeScript
- Redux Toolkit
- RTK Query
- React Redux
- styled-components
- Create React App

## Como Executar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicacao ficara disponivel em:

```text
http://localhost:3000
```

## Scripts Disponiveis

```bash
npm start
```

Executa o projeto em modo de desenvolvimento.

```bash
npm run build
```

Gera a versao de producao na pasta `build`.

```bash
npm test
```

Executa os testes em modo interativo.

## Estrutura do Projeto

```text
src/
  assets/              Imagens utilizadas na aplicacao
  components/          Componentes reutilizaveis
  containers/          Componentes de composicao de tela
  store/               Configuracao do Redux, slices e API
  styles/              Estilos globais e cores do projeto
```

## API

Os produtos sao carregados pela API:

```text
https://api-ebac.vercel.app/api/ebac_sports
```

A integracao e feita com RTK Query em `src/store/api/productsApi.ts`.
