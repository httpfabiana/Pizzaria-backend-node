# 🍕 Pizzaria API

API backend para gerenciamento de uma pizzaria, responsável por autenticação de usuários, cadastro de produtos, pedidos, controle de status e integração com o frontend.

Este projeto foi desenvolvido com foco em boas práticas de backend, organização de código e escalabilidade.

---

## 🚀 Tecnologias utilizadas

* **Node.js**
* **Express**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **JWT** (Autenticação)
* **Bcrypt** (Criptografia de senha)

---

## 📂 Estrutura do projeto

```
src/
 ├── controllers/     # Regras de entrada das requisições
 ├── services/        # Regras de negócio
 ├── routes/          # Definição das rotas
 ├── middlewares/     # Middlewares (auth, erros, etc)
 ├── prisma/          # Schema e migrations
 ├── config/          # Configurações gerais
 ├── app.ts           # Configuração do app
 └── server.ts        # Inicialização do servidor
```

---

## 🔐 Funcionalidades

* Cadastro e login de usuários
* Autenticação com JWT
* Cadastro de pizzas e produtos
* Criação e gerenciamento de pedidos
* Atualização de status do pedido
* Proteção de rotas

---

## ⚙️ Requisitos

* Node.js >= 18
* PostgreSQL
* Gerenciador de pacotes (npm ou yarn)

---

## 📌 Padrões utilizados

* REST API
* Separação de responsabilidades
* Services + Controllers
* Middleware de autenticação

---

## ▶️ Como rodar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/pizzaria-api.git
cd pizzaria-api
```

### 2️⃣ Instalar dependências

```bash
npm install
# ou
yarn install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
JWT_SECRET="sua_chave_secreta"
```

---

### 4️⃣ Rodar as migrations

```bash
npx prisma migrate dev
```

---

### 5️⃣ Iniciar o servidor

```bash
npm run dev
# ou
yarn dev
```

Servidor rodando em:

```
http://localhost:3333
```



