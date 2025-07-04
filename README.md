# 📚 Minimal Library Management System

A lightweight full‑stack application that lets anyone list, create, edit, delete and borrow books, plus view a live borrow summary.  
Built with **React + TypeScript**, **Redux Toolkit Query**, **Node/Express**, and **MongoDB**.

> **Live demo**  
> - Front‑end: <https://labrary‑mangement‑clint.vercel.app>  
> - API: <https://assignment‑3‑library‑management‑api.vercel.app>

---

## ✨ Features

| Area | What you can do |
|------|-----------------|
| **Books** | • View table of all books<br>• Add, edit, delete via modals<br>• Auto‑mark _unavailable_ when copies = 0 |
| **Borrowing** | • Borrow a selected book (qty & due‑date)<br>• Client‑side check: qty ≤ copies |
| **Borrow Summary** | • Aggregated table (title, ISBN, total borrowed) |
| **UX / Extras** | • Toast notifications (react‑hot‑toast)<br>• Optimistic UI (RTK Query)<br>• Fully responsive Tailwind layout |

---

## 🏗️ Tech Stack

| Layer | Library / Tooling |
|-------|-------------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **State / Data** | Redux Toolkit, RTK Query |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB Atlas |
| **Dev / Build** | Vite, ESLint + Prettier, Husky |

---

## 📂 Monorepo Structure

```
minimal‑library/
├── backend/
│   ├── src/
│   │   ├── controllers/   # books & borrows
│   │   ├── models/        # mongoose schemas
│   │   ├── routes/        # /api/books, /api/borrows
│   │   └── app.ts         # express bootstrap
│   ├── .env.example
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── api/           # RTK Query slices
│   │   ├── components/
│   │   ├── pages/         # /books, /create‑book, etc.
│   │   └── main.tsx
│   ├── .env.example
│   └── vite.config.ts
├── docker-compose.yml
└── README.md
```

---

## ⚙️  Getting Started

### 1. Clone

```bash
git clone https://github.com/<your‑handle>/minimal‑library.git
cd minimal‑library
```

### 2. Backend (.env)

```bash
cp backend/.env.example backend/.env
# fill in:
# MONGODB_URI=<your‑atlas‑uri>
# PORT=5000
```

### 3. Frontend (.env)

```bash
cp frontend/.env.example frontend/.env
# VITE_API_BASE=https://assignment-3-library-management-api.vercel.app/api
```

### 4. Install & Run (Dev)

```bash
# In another terminal/tab:
pnpm i && pnpm dev        # inside frontend/
pnpm i && pnpm dev        # inside backend/
```

Front‑end → <http://localhost:5173>  
Back‑end  → <http://localhost:5000/api/books>

---

## 🐳  One‑command local stack (optional)

```bash
docker compose up --build
```

---

## 🔌  API Routes (public, no auth)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/books`           | Paginated list |
| POST   | `/api/books`           | Create book |
| GET    | `/api/books/:id`       | Single book |
| PATCH  | `/api/books/:id`       | Update book |
| DELETE | `/api/books/:id`       | Remove book |
| POST   | `/api/borrows`         | Borrow a book |
| GET    | `/api/borrows` | Aggregated borrow summary |

---

## 🛠️  Scripts

```bash
# Front
pnpm dev        # vite dev server
pnpm build      # production build (./dist)

# Back
pnpm dev        # ts‑node & nodemon
pnpm build      # tsc + gen dist/
pnpm start      # node dist/app.js
```

---

## 🚀  Deployment

| Layer | Platform | Branch |
|-------|----------|--------|
| **Frontend** | Vercel | `main` → `https://labrary‑mangement‑clint.vercel.app` |
| **API** | Vercel Functions | `main` → `https://assignment‑3-library-management-api.vercel.app/api` |

CI automatically builds & deploys on push.

---

## 👥  Contributing

1. Fork, then `git checkout -b feat/your-feature`.
2. Run `pnpm lint && pnpm test`.
3. Open a PR 🚀.

---

## 📝  License

MIT © 2025 Sarajit