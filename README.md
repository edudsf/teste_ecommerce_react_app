# Projeto Nexfar (desafio)

Link do desafio:
https://edudsf-nexfar.surge.sh/

## Desafios durante a execução da aplicação

Durante a diagramação (estilização do layout) tive um pouco de dificuldade para entender como seria a estrutura em relação a viewport da tela, ou seja, se teria uma medida 'x', 
ou então ocuparia um espaço de 100% em relação a tela. Minha solução foi adaptar um layout que possa ser facilmente atualizado.

Outro problema com o qual me deparei, foi na hora de utilizar a API, a mesma está com um problema de CORS. Os requisitos funcionais também não ficaram muito claros.

## Dicas e observações gerais

O layout é bonito e clean, com um pouco de planejamento pode se tornar uma aplicação bem moderna e adaptável. Faria algumas melhorias na barra de pesquisa, pois acredito que
seja um ponto bem importante, por exemplo:

Pesquisando por todos -> Estoque disponível (x) -> Similares (x) -> Em promoção (x) <br>
Dessa forma, fica claro para o usuário o que realmente ele está pesquisando e é possível excluir itens da pesquisa.

### Observações:

- Os ícones não estão presentes no material;
- A API está com um problema de CORS;
- Procurei utilizar diferentes técnicas no CSS para mostrar que tenho conhecimento;
- Os componentes podem ser melhorados, assim como a programação funcional;
- Caso fosse necessário, faria uma excelente implementação do layout para dispositivos móveis;
- O typescript não foi utilizado em sua melhor forma;

### Implementações a serem feitas:

- Efeitos de loading para melhorar a experiência do usuário;
- Criar um modelo de aplicação utilizando Clean Archicteture;

********

## O que funciona!

- Barra de pesquisa, ordenação e exibição;
- Adicionar, remover e deletar todos os itens do carrinho;
- Acesso ao carrinho pela Header da aplicação;
- Botões de voltar, ir para pagamento e limpar carrinho;
- Filtro de Estoque e Categorias (GENÉRICOS/SIMILARES). As funcionalidades já estão implementadas para os outros filtros, só precisam ser ajustadas;

## Como rodar a aplicação?
- Execute os comandos abaixo na ordem:
 
 1. npm install
 2. npm run dev

********

## Estrutura do projeto

- O projeto foi configurado utilizando o webpack, eslint, husky/lint-staged e typescript.

### - Dependências:

1. Axios
2. Eslint
3. Husky/lint-staged
4. Typescript
5. Styled-components
6. React 
