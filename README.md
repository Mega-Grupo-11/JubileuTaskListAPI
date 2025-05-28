# Projeto JubileuTaskListAPI

Este projeto é uma API responsável pela gestão de tarefas, incluindo funcionalidades de CRUD e autenticação de usuários. Ele utiliza Node.js com TypeScript, Prisma para comunicação com o banco de dados, e JWT para autenticação.

## Funcionalidades

- Criação, leitura, atualização e exclusão de tarefas (CRUD).
- Registro e login de usuários com autenticação via JWT.
- Persistência de dados utilizando banco de dados SQLite para teste e PostgreSQL para produção.
- API RESTful com endpoints para manipulação de tarefas e usuários.

## Tecnologias

- Node.js
- TypeScript
- Prisma ORM (para interação com o banco de dados)
- SQLite e PostgreSQL (banco de dados)
- JWT (para autenticação de usuários)
- Nodemon (para recarga automática durante o desenvolvimento)

## Arquitetura

O sistema está organizado com base na Clean Architecture. Aqui estão as principais camadas do sistema:

- **Interfaces**: Responsáveis por lidar com as requisições HTTP e delegar o processamento para os serviços (casos de uso).
- **UseCases**: Contêm a lógica de negócio, realizando as operações principais do sistema (como criar tarefas, registrar usuários, etc.).
- **Domain**: Contém as entidades (modelos) e repositórios que abstraem a persistência de dados.
- **Infrastructure**: Responsável por integrar com tecnologias externas, como o banco de dados e a autenticação.

## Instalação Local (Sem Docker)

Para configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório
   ```bash
   git clone https://github.com/Mega-Grupo-11/JubileuTaskListAPI.git
   cd JubileuTaskListAPI

2. Instale as dependências
    ```bash
    npm install
    ```

3. Configure o banco de dados
O projeto utiliza SQLite para persistência de dados. Não é necessário configurar um servidor externo. Porém, é necessário garantir que o arquivo de banco de dados seja gerado corretamente.

4. Execute as migrations do Prisma
    ```bash
    npx prisma migrate dev --schema=./prisma/schema.dev.prisma
    ```

5. Execute o servidor
Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
    O servidor estará disponível em http://localhost:5050.

## Instalação com Docker

Se você preferir rodar o projeto usando Docker, siga as instruções detalhadas no documento de configuração do Docker [aqui](./docs/docker-setup.md).

## Variáveis de Ambiente

O projeto depende das seguintes variáveis de ambiente:

- **DATABASE_URL_DEV:** URL de conexão com o banco de dados SQLite.
  
- **DATABASE_URL_PROD:** URL de conexão com o banco de dados PostgreSQL.

- **JWT_SECRET:** Chave secreta para assinatura de tokens JWT.

Exemplo de arquivo `.env`:

```bash
DATABASE_URL_DEV="file:./data/mega-grupo-3.db"
DATABASE_URL_PROD="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="supersecretkey"
```

## Licença

Este projeto está licenciado sob a MIT license.


## 📚 Documentação

Para mais detalhes sobre a arquitetura, API e outras configurações, consulte a documentação na pasta [documentacao](./docs).