# RickMortyQuizzApp

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.6. É uma aplicação de quiz interativa baseada no universo de "Rick and Morty", utilizando dados da API pública de "Rick and Morty".

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação irá recarregar automaticamente se você alterar algum dos arquivos fonte.

## Estruturação do Código

- `ng generate component nome-do-componente` para gerar um novo componente.
- Também é possível gerar diretivas, pipes, serviços, classes, guards, interfaces, enums e módulos com `ng generate`.

## Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end através de uma plataforma à sua escolha. Para usar este comando, primeiro adicione um pacote que implementa capacidades de testes end-to-end.

## Estrutura Modular do Projeto

O projeto está organizado em módulos para facilitar a manutenção e escalabilidade:
- **QuizMechanicsModule**: Para a lógica do funcionamento do quiz.
- **ApiIntegrationModule**: Para a comunicação com a API de "Rick and Morty".
- **QuizQuestionsModule**: Para gerenciamento das perguntas do quiz.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [página de Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).
