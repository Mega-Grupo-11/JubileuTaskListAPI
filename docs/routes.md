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
  "nome": "ciclano",
  "email": "ciclano@hotmail.com",
  "senha": "123",
  "confirmSenha": "123"
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
    "id": 4,
    "nome": "ciclano",
    "email": "ciclano@hotmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJpYXQiOjE3NDYzNjMxMDUsImV4cCI6MTc0NjM4NDcwNX0.qZhdrUTXGNL_xRhYSzy1Wk3oGw50bYXdJrFwzZMBQS4"
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
### GET `/tasks`
**Descrição:**
Obtem as tarefas listadas do usuario logado. Requer autenticação JWT.

**Headers:**

```makefile
Authorization: Bearer JWT_TOKEN
```

```json
Status: 200 OK Size: 683 Bytes Time: 6 ms
```
## Resposta de Sucesso:

- **Código:** 200 Successfull

- **Corpo:**
```json
[
  {
    "id": 6,
    "titulo": "correr no parque",
    "descricao": "ir correr e caminhar no parque hoje a tarde",
    "dataPrevista": "2025-05-06T14:00:00.000Z",
    "prioridade": "MEDIA",
    "status": true,
    "createdAt": "2025-05-03T03:09:09.821Z",
    "usuarioId": 3
  },
  {
    "id": 5,
    "titulo": "correr no parque",
    "descricao": "ir correr e caminhar no parque hoje a tarde",
    "dataPrevista": "2025-05-04T14:00:00.000Z",
    "prioridade": "MEDIA",
    "status": true,
    "createdAt": "2025-05-03T03:08:57.137Z",
    "usuarioId": 3
  },
  {
    "id": 4,
    "titulo": "Estudar sobre o projeto",
    "descricao": "Ler documentação e aplicar em novas rotas",
    "dataPrevista": "2025-05-04T14:00:00.000Z",
    "prioridade": "MEDIA",
    "status": true,
    "createdAt": "2025-05-01T14:22:42.990Z",
    "usuarioId": 3
  }
]
```

### PUT `/tasks/:id`
**Descrição:**
Atualiza a tarefa que foi passada por id. Requer autenticação JWT.
**Headers:**

```makefile
Authorization: Bearer JWT_TOKEN
```

```ts
{
  "status": false
}
```

```json
Status: 200 OK Size: 224 Bytes Time: 24 ms
```
## Resposta de Sucesso:

- **Código:** 200 Successfull

- **Corpo:**
```json
{
  "id": 6,
  "titulo": "consegui editar",
  "descricao": "ir correr e caminhar no parque hoje a tarde",
  "dataPrevista": "2025-05-06T14:00:00.000Z",
  "prioridade": "MEDIA",
  "status": false,
  "createdAt": "2025-05-03T03:09:09.821Z",
  "usuarioId": 3
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

## Visão geral de tempo de resposta Jacob Nielsen, Google Web Vitals, Experiências e benchmarks em APIs REST

| Tempo de resposta | Classificação Geral              |
|-------------------|----------------------------------|
| 0–100ms           | Excelente (quase instantâneo)    |
| 100–300ms         | Muito bom / aceitável            |
| 300–500ms         | Bom, mas pode melhorar           |
| 500ms–1s          | Limite tolerável                 |
| > 1s              | Pode causar frustração           |