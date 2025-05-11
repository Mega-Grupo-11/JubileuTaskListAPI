# Gerando a Imagem Docker para a Aplicação JubileuTaskListAPI

Este documento fornece as instruções para gerar a imagem Docker para a aplicação **JubileuTaskListAPI** a partir do **Dockerfile**.

## Pré-requisitos

- **Docker**: Certifique-se de que o Docker está instalado e funcionando no seu sistema.
- **Dockerfile**: O arquivo `Dockerfile` deve estar presente na raiz do seu projeto.

## Passos para Gerar a Imagem Docker

### 1. Navegue até o Diretório do Projeto

Abra o terminal e navegue até o diretório onde o `Dockerfile` está localizado. No seu caso, execute:

```bash
cd C:\Users\Klay\OneDrive\Documentos\Faculdade-Mega\JubileuTaskListAPI
```

### 2. Execute o Comando para Construir a Imagem

Com o terminal no diretório correto, execute o seguinte comando para gerar a imagem Docker:

```bash
docker build -t jubileu-api .
```
**Explicação do comando:**

`docker build`: Inicia o processo de construção da imagem.

`-t jubileu-api`: Define o nome da imagem como jubilee-api.

`.`: O ponto final indica que o Docker deve usar o Dockerfile no diretório atual para construir a imagem.

### 3. Verifique a Imagem Criada

Após a execução do comando acima, você pode verificar se a imagem foi criada com sucesso executando o comando:

```bash
docker images
```

Isso irá listar todas as imagens Docker no seu sistema. A imagem `jubileu-api` deve aparecer na lista.

## Executando o Container Docker

Depois de gerar a imagem, você pode rodar o container a partir dela com o seguinte comando:

```bash
docker run -p 5050:5050 jubileu-api
```

Isso vai rodar o container e mapear a porta 5050 do container para a porta 5050 da sua máquina local, tornando a aplicação acessível.
