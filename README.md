# Desafio Studio Sol

## Descrição do projeto

Simulação de um jogo cujo objetivo é adivinhar o número sorteado. Ao realizar a tentativa, o jogo vai dizer se
o usuário acertou. Caso não tenha acertado, o jogo vai dizer se o número sorteado é maior ou menor que o
número que o usuário chutou. 

## Instalação e execução do projeto

- Baixar o projeto;
- Acessar a pasta do projeto pelo terminal;
- Rodar o comando `npm install`
- Rodar o comando `npm start`

## Tecnologias utilizadas

Nesse projeto não foi utilizada nenhuma lib externa. Todas as libs que constam nesse projeto foram incluídas
do processo de criação do comando `npx create-react-app`

## LED de 7 segmentos

O LED de 7 segmentos foi feito apenas com HTML, CSS e Javascript. Ele consiste num componente que recebe um algarismo
e uma cor. Inicialmente ele preenche todos os segmentos com a cor recebida para só depois verificar o algarismo recebido
e preencher os segmentos que não deveriam estar preenchidos com a cor default. Foi adicionado um loading apenas para uma
melhor visualização pelo usuário.

## Testes

- Rodar o comando `npm test`

## Build

- Rodar o comando `npm run build` 