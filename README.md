# Desafioi técnico fullstack

Desenvolvido uma aplicação fullstack para um desafio técnico, essa aplicação é uma pequeno CRUD (Create, Read, Update, Delete) onde se pode cadastrar profissional e tipo de profissional. Ex:

- profissional: Jonh Doe
- tipo de profissional: Advogado
  Essa aplicação conta com Frontend e Backend;

## Preparando o ambiente e instalação

### Preparando (configurando) o ambiente

- instalação do Node versão 16.x ou superior; Site do [node](https://nodejs.org/en)
- Utilização do PostgreSQL
  - Você pode instalar o PostgreSQL em sua máquina usando o instaldo no site do [PostgreSQL](https://www.postgresql.org/download/)
  - Você pode usar um serviço na nuvem; Ex: [ElephantSQL](https://www.elephantsql.com/)
  - Você pode usar o Docker e subir um container com o PostgreSQL. Site do [Docker e docker-compose](https://docs.docker.com/get-docker/)

### Instalação do projeto (banco de dados e dependências)

- Clone o repositório

```bash
git clone git@github.com:eemr3/desafio-t-cnico-fullstack.git
```

- Entre no diretório `desafio-t-cnico-fullstack`

```bash
cd desafio-t-cnico-fullstack
```

- Instale as dependências

```bash
# dentro da pasta desafio-t-cnico-fullstack
npm install
```

#### Preparando o banco de dados

- Entre na pasta `backend`

```bash
cd backend
```

- Renomei o arquivo `.env.example` que se encontra dentro da pasta `backend` para
  ´`.env``

- Independente de qual forma vai usar o PostgreSQL, você precisa informa no arquivo
  `.env` as configurações de acesso ao PostgreSQL. configurações essas que precisam ser passada em uma URL que fica no `.env`;
- Exemplro de URL: `"postgresql://usuario:senha8@localhost:5432/nomedobanco?schema=public"`
- Caso use o Docker e Docker-compose, dentro da pasta `backend` tem um `docker-compose.yml`, basta usar o comando:

```bash
docker-compose up ou docker compose up   # depoendendo da versão do docker-compose
```

- Criar o banco de dados no PostgreSQL:

  - Dentro da pasta `backend` use um dos comandos abaixo:

  ```bash,
  # caso esteja usando o Postgre localmente seja pelo docker ou intalação em sua máquina (PC)
  npx prisma migrate dev

  # caso esteja usando o Postgre em um serviço na nuvem
  npx prisma db push
  ```

  - Gerar dados na tabela de Tipo de Profissional (type_professional):

  ```bash
  npx prisma db seed
  ```

### Rodando a aplicação

- Dentro da para `backend`

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

Observação: Para rodar o frontend (web) o server (API) precisa esta rodando

### Documentação da API Swagger

- No browser (navegador) use a URL apos a API estiver rodando:

```bash
http://localhost:3001/api/v1/doc
```

## Autor

- [Emerson Moreira - @eemr3](https://www.github.com/eemr3)