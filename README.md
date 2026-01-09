# Sistema de Gerenciamento de Produtos

## Tecnologias Utilizadas
- JavaScript
- Node.js
- Módulo fs (File System) para leitura e escrita de arquivos
- JSON para persistência dos dados
- Terminal / CLI para interação com o usuário

## Funcionalidades
- Criar produtos
- Listar produtos cadastrados
- Buscar produto por ID
- Atualizar dados de um produto
- Excluir produto
- Persistir dados em arquivo JSON

## Arquitetura
O projeto utiliza arquitetura em camadas:

- App: responsável pelo fluxo principal da aplicação e exibição do menu
- Service: responsável pelas regras de negócio e interação com o usuário
- Repository: responsável pelo acesso e persistência dos dados

## Como Rodar a Aplicação Localmente

### Pré-requisitos
- Node.js instalado

### Passos para execução
1. Acesse a pasta do projeto:
```bash
cd src
npm run start
