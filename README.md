# 🚀 Node.js API com Express, Sequelize, MySQL e Docker

Este projeto é uma API REST simples utilizando **Node.js**, **Express**, **Sequelize** e **MySQL**, com suporte a **Docker** e `.env` para variáveis de ambiente.

## 📦 Tecnologias

- Node.js
- Express
- Sequelize ORM
- MySQL
- Docker + Docker Compose

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` com:

```env
DB_NAME=example_db
DB_USER=root
DB_PASSWORD=root
DB_HOST=db
DB_DIALECT=mysql
DB_PORT=3306
PORT=3000
```

## 🐳 Rodando com Docker

### 1. Suba os containers

```bash
docker-compose up --build
```

Aguarde o MySQL inicializar. O app irá rodar em:  
🔗 `http://localhost:3000`

### 2. Testar rotas

- `GET /` – Verifica se a API está no ar
- `GET /users` – Lista todos os usuários
- `POST /users` – Cria novo usuário
- `DELETE /users/:id` – Remove um usuário

Exemplo de `POST /users`:

```json
{
  "name": "João",
  "email": "joao@email.com"
}
```

---

## 🧪 Desenvolvimento

### Instalar dependências localmente:

```bash
npm install
```

## 📌 TODOs

- [ ] Adicionar autenticação JWT
- [ ] Implementar testes automatizados
- [ ] Adicionar migrations com Sequelize CLI
- [ ] Documentar a API com Swagger

---

## 📝 Licença

MIT
