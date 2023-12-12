# Desafio técnico fullstack

Desenvolvida uma aplicação fullstack para um desafio técnico, essa aplicação é um pequeno CRUD (Create, Read, Update, Delete) onde se pode cadastrar profissionais e tipos de profissionais. Ex:

- Profissional: John Doe
- Tipo de profissional: Advogado

Esta aplicação conta com Frontend e Backend.

## Stack utilizada

**Front-end:** React, Vite, TypeScript, Context API, React Hooks, React Router Dom, TailwindCSS, Axios

**Back-end:** Node, NestJS, TypeScript, Swagger, Prisma

**Banco de Dados:** PostgreSQL

## Preparando o ambiente e instalação

### Preparando (configurando) o ambiente

- Instalação do Node versão 16.x ou superior; [Site do node](https://nodejs.org/en)
- Utilização do PostgreSQL
  - Você pode instalar o PostgreSQL em sua máquina usando o instalador que está disponível no site do [PostgreSQL](https://www.postgresql.org/download/)
  - Você pode usar um serviço na nuvem; Ex: [ElephantSQL](https://www.elephantsql.com/)
  - Você pode usar o Docker e subir um container com o PostgreSQL. [Site do Docker e docker-compose](https://docs.docker.com/get-docker/)

### Instalação do projeto (banco de dados e dependências)

- Clone o repositório

- Usando SHH:

```bash
# unsando SSH
git clone git@github.com:eemr3/desafio-tecnico-fullstack.git
```

- Usando HTTPS:

```bash
# usando HTTPS
git clone https://github.com/eemr3/desafio-tecnico-fullstack.git
```

- Entre no diretório `desafio-tecnico-fullstack`

```bash
cd desafio-t-cnico-fullstack
```

- Instale as dependências

```bash
# dentro da pasta desafio-tecnico-fullstack
npm install
```

#### Preparando o banco de dados

- Entre na pasta `backend`

```bash
cd backend
```

- Renomeie o arquivo `.env.example` que se encontra dentro da pasta `backend` para `.env`.

- Independentemente de qual forma vai usar o PostgreSQL, você precisa informar no arquivo
  `.env` as configurações de acesso ao PostgreSQL. Configurações essas que precisam ser passadas em uma URL que fica no `.env`;
- Exemplo de URL: `"postgresql://usuario:senha8@localhost:5432/nomedobanco?schema=public"`
- Caso use o Docker e Docker-compose, dentro da pasta `backend` tem um `docker-compose.yml`, basta usar o comando:

```bash
docker-compose up -d # depoendendo da versão do docker-compose
```

OU

```bash
docker compose up -d # depoendendo da versão do docker-compose
```

- Criar o banco de dados no PostgreSQL:

  - Dentro da pasta `backend`, use um dos comandos abaixo:

  ```bash,
  # caso esteja usando o PostgreSQL localmente, seja pelo Docker ou instalação em sua máquina (PC)
  npx prisma migrate dev

  # caso esteja usando o PostgreSQL em um serviço na nuvem
  npx prisma db push
  ```

  - Gerar dados na tabela de Tipo de Profissional (type_professional):

  ```bash
  npx prisma db seed
  ```

### Rodando a aplicação

- Dentro da pasta `backend`

```bash
npm run start:dev
```

- Dentro da pasta `frontend`

```bash
npm run dev
```

- O Frontend (web) roda na URL:

```bash
http://localhost:5173
```

Observação: Para rodar o frontend (web), o server (API) precisa estar rodando

### Documentação da API Swagger

- No navegador, use a URL após a API estar rodando:

```bash
http://localhost:3001/api/v1/doc
```

## Autor

- [Emerson Moreira - @eemr3](https://www.github.com/eemr3)
