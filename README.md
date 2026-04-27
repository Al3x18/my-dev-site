# Alex De Pasquale - Portfolio

Live: [alexdepasquale.dev](https://alexdepasquale.dev)

Personal portfolio built with React + Vite and a `shadcn/ui` + Tailwind.

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS
- shadcn/ui (custom UI components)

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Project structure

```text
src/
├── assets/                # Static assets
├── components/
│   ├── ui/                # Reusable UI primitives
│   ├── Header.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   └── LegalPage.jsx
├── content/               # Portfolio and legal page content
├── pages/                 # Route pages (terms, policy, not found)
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```
