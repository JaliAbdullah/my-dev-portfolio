# 🧾 Neo-Brutalist Developer Portfolio

A personal portfolio site built in a bold neo-brutalist style — thick borders, hard drop-shadows, and a high-contrast pink/yellow/teal palette. Built with **React + Vite + Tailwind CSS**.

> 🚧 **Work in progress.** I'm actively editing content, projects, and copy as I go — treat this as a living repo, not a finished product.

## 🔗 Live Demo

_(Add your deployed link here once you deploy — e.g. Vercel/Netlify/GitHub Pages)_

## ✨ Sections

- Hero introduction
- Scrolling status marquee
- Technical toolkit (frontend, backend, databases, systems/devops)
- Certifications & learning timeline (completed + in progress)
- Featured project labs
- Contact footer

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Google Fonts — Space Grotesk, Space Mono, Public Sans
- Material Symbols (icons)

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/JaliAbdullah/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to Vercel, Netlify, GitHub Pages, etc.

## ✏️ Editing Content

All editable content — name, toolkit, certifications, projects, contact links — lives in one place:

```
src/data/profile.js
```

Change text there and it updates across the whole site automatically. No need to touch component/JSX files unless you're changing layout or structure.

| What you want to change | Where |
| --- | --- |
| Name, tagline, bio, motto | `src/data/profile.js` |
| Toolkit / skills list | `src/data/profile.js` → `toolkit` |
| Certifications | `src/data/profile.js` → `certifications` |
| Projects / labs | `src/data/profile.js` → `labs` |
| Contact links | `src/data/profile.js` → `contact` |
| Colors, fonts, spacing (design tokens) | `tailwind.config.js` |
| Layout / structure of a section | `src/components/*.jsx` |
| Hard-shadow & marquee animation CSS | `src/index.css` |

## 📌 Roadmap / To-Do

- [ ] Add a downloadable PDF resume and link it in `resumePdfHref`
- [ ] Link real GitHub repos for each project lab
- [ ] Add real project screenshots
- [ ] Deploy and add live demo link above
- [ ] Mobile nav menu functionality

## 👤 Author

**Jali Abdullah**

- GitHub: [@JaliAbdullah](https://github.com/JaliAbdullah)
- LinkedIn: [Jali Bin Abdullah](https://www.linkedin.com/in/jali-bin-abdullah-58252541a/)
- Email: [jalibinabdullah@gmail.com](mailto:jalibinabdullah@gmail.com)

## 📄 License

This project is open for anyone to reference for learning purposes. If you fork it for your own portfolio, please swap out the content in `src/data/profile.js` for your own details.
