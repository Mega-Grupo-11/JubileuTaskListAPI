## Endpoints

---

### GET `/`
**Descrição:**  
Página inicial ou rota de boas-vindas da API.

**Resposta de Sucesso:**
- **Código:** 200 OK  
- **Corpo:**  
```json
{
  "message": "Welcome to JubileuTaskListAPI"
}
```

### POST `/register`
**Descrição:**
Registra um novo usuário.

```json
{
  "nome": "pessoa",
  "email": "pessoa@hotmail.com",
  "passwordHash": "123"
}
```

```json
Status: 201 Created Size: 254 Bytes Time: 212 ms
```

### Resposta de Sucesso:

**Código:** 201 Created

**Corpo:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 2,
    "nome": "pessoa",
    "email": "pessoa@hotmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE3NDYxMDEyNTUsImV4cCI6MTc0NjEyMjg1NX0.HL7FPuW2hCfKjqkXsx04jEv37PbIDjsJU5hxurie1UU"
}
```

### POST `/login`
**Descrição:**
Autentica um usuário e retorna um token JWT.

**Body (JSON):**
```json
{
  "nome": "pessoa",
  "senha": "123"
}
```
```json
Status: 200 OK Size: 244 Bytes Time: 87 ms
```
### Resposta de Sucesso:

**Código:** 200 OK

**Corpo:**

```json
{
  "message": "Login successful",
  "user": {
    "id": "2",
    "nome": "pessoa",
    "email": "pessoa@hotmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE3NDYxMDEzMjIsImV4cCI6MTc0NjEyMjkyMn0.SLZfrRrjMcpLoMdbBlQalPrNmIQcB53XHtuqkNensXU"
}
```

### POST `/task`
**Descrição:**
Cria uma nova tarefa. Requer autenticação JWT.

**Headers:**

```makefile
Authorization: Bearer JWT_TOKEN
```
```json
{
  "titulo": "Estudar Clean Architecture",
  "descricao": "Ler documentação e aplicar em projeto pessoal",
  "dataPrevista": "2025-05-01T14:00:00.000Z",
  "prioridade": "MEDIA",
  "status": false
}
```
```json
Status: 201 Created Size: 286 Bytes Time: 25 ms
```
## Resposta de Sucesso:

- **Código:** 201 Created

- **Corpo:**
```json
{
  "message": "Task successfully created!",
  "task": {
    "id": 3,
    "titulo": "Estudar Clean Architecture",
    "descricao": "Ler documentação e aplicar em projeto pessoal",
    "dataPrevista": "2025-05-01T14:00:00.000Z",
    "prioridade": "MEDIA",
    "status": true,
    "createdAt": "2025-05-01T12:10:23.496Z",
    "usuarioId": 2
  }
}
```

## Autenticação
Algumas rotas exigem autenticação JWT. Envie o token no cabeçalho `Authorization`:

```makefile
Authorization: Bearer JWT_TOKEN
```
## Erros Comuns
- 401 Unauthorized: Token inválido ou ausente

- 400 Bad Request: Campos obrigatórios ausentes ou inválidos

- 500 Internal Server Error: Erro interno da aplicação

