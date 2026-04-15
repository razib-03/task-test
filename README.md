# Tasks V2

A task management webapp for client workflows. Built with React, Vite, and Tailwind CSS.

**Figma Design**: https://www.figma.com/design/Tw7h2Su9OYLzRNoWEqFtXt/Tasks-V2

---

## Prerequisites

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

To check your versions:
```bash
node -v
npm -v
```

---

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the app** (API + Frontend)
   ```bash
   npm run dev:full
   ```

3. **Open in browser**
   - Frontend: http://localhost:5173
   - API: http://localhost:3001

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev:full` | Start both API server and frontend (recommended) |
| `npm run dev` | Start frontend only |
| `npm run api` | Start API server only |
| `npm run build` | Build for production |

---

## Project Structure

```
Tasks V2/
├── db.json                 # Local database (JSON)
├── src/
│   ├── services/
│   │   └── api.ts          # API service layer
│   ├── app/
│   │   ├── pages/          # Page components
│   │   │   ├── OverviewPage.tsx
│   │   │   ├── TasksPage.tsx
│   │   │   ├── HouseholdsPage.tsx
│   │   │   └── ...
│   │   └── components/     # UI components
│   └── styles/             # CSS styles
└── package.json
```

---

## API Endpoints

The local API runs on `http://localhost:3001`

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/tasks` | GET, POST, PATCH, DELETE | Task management |
| `/clients` | GET, POST, PATCH, DELETE | Client records |
| `/households` | GET, POST, PATCH, DELETE | Household data |
| `/workflows` | GET, POST, PATCH, DELETE | Workflow templates |
| `/activities` | GET, POST, PATCH, DELETE | Client activities |
| `/summary` | GET, PATCH | Dashboard summary stats |

**Example API calls:**
```bash
# Get all tasks
curl http://localhost:3001/tasks

# Create a task
curl -X POST http://localhost:3001/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "assignee": "John Doe", "status": "NEW"}'

# Update a task
curl -X PATCH http://localhost:3001/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "COMPLETED"}'

# Delete a task
curl -X DELETE http://localhost:3001/tasks/1
```

---

## Data Persistence

All data is stored in `db.json` at the project root. Changes made through the UI are automatically saved to this file.

To reset the database, you can restore `db.json` to its original state or delete records via the API.

---

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Charts**: Recharts
- **API**: JSON Server (local REST API)
- **Routing**: React Router

---

## Troubleshooting

**Port already in use?**
- The app will automatically try the next available port
- Or kill the process: `lsof -ti:5173 | xargs kill -9`

**API not responding?**
- Make sure you're running `npm run dev:full` (not just `npm run dev`)
- Check if port 3001 is available

**Dependencies issues?**
- Delete `node_modules` and reinstall:
  ```bash
  rm -rf node_modules
  npm install
  ```

---

## Team Contact

For questions, reach out to [Your Name/Team].
