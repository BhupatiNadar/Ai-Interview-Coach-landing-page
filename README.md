<div align="center">
<h1>🎯 AI Interview Coach — Landing Page</h1>
 
**The marketing front door for AI Interview Coach.**
A fast, modern, dark-themed landing page built with React + Vite — showcasing the product, its features, and how it works, with a direct link into the live app.
 
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
 
[Live App](https://ai-interview-coach-project.streamlit.app/) · [Report Bug](https://github.com/BhupatiNadar/Ai-Interview-Coach-landing-page/issues) · [Request Feature](https://github.com/BhupatiNadar/Ai-Interview-Coach-landing-page/issues)
 
</div>
---
 
## 📖 Overview
 
This is the **public-facing landing page** for [AI Interview Coach](https://github.com/BhupatiNadar/ai-interview-coach) — the Streamlit-based AI mock interview platform. It's a separate, lightweight React + Vite single-page application designed purely for marketing, onboarding, and driving visitors to **Start Free Practice** on the actual app.
 
It's not the app itself — it's the storefront: a hero section, a features showcase, a "how it works" walkthrough, and a navbar that links straight into the live product.
 
---
 
## ✨ Key Features
 
| Feature | Description |
|---|---|
| 🎨 **Modern Dark UI** | Custom dark theme with purple accent gradients, built entirely with hand-written CSS (no UI framework) |
| 🧭 **Multi-Page Routing** | Client-side routing via `react-router-dom` across Home, Features, and How It Works |
| 🚀 **Hero Section** | Bold headline, subtext, dual CTAs ("Start Free Practice" / "View Demo"), and feature tags |
| 🧩 **Features Grid** | Reusable feature cards highlighting Mock Interviews, Smart Feedback, Personalized Learning, and Progress Tracking |
| 🗺️ **How It Works** | 4-step visual walkthrough of the user journey (Set Goals → Mock Interview → Review Feedback → Improve) |
| 🔗 **Direct App Link** | Navbar & hero CTAs link straight to the live Streamlit app (`ai-interview-coach-project.streamlit.app`) |
| 📱 **Responsive Design** | Breakpoints for tablet and mobile — nav collapses, grids reflow, typography scales |
| ⚡ **Vite-Powered** | Instant HMR dev server and optimized production builds |
| 🧹 **ESLint Configured** | Flat-config ESLint setup with React Hooks & React Refresh plugins |
 
---
 
## 🖼️ Screenshots
 
> *Add your screenshots to a `screenshots/` folder in the repo root and they'll render below.*
 
<table>
  <tr>
    <td align="center"><b>🏠 Home / Hero</b></td>
    <td align="center"><b>🧩 Features Page</b></td>
  </tr>
  <tr>
    <td><img src="screenshots/home.png" alt="Home Page" width="400"/></td>
    <td><img src="screenshots/features.png" alt="Features Page" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><b>🗺️ How It Works</b></td>
    <td align="center"><b>📱 Mobile View</b></td>
  </tr>
  <tr>
    <td><img src="screenshots/how_it_works.png" alt="How It Works Page" width="400"/></td>
    <td><img src="screenshots/mobile_view.png" alt="Mobile Responsive View" width="400"/></td>
  </tr>
</table>
---
 
## 🏗️ Tech Stack
 
- **[React 19](https://react.dev/)** — UI library
- **[Vite 8](https://vite.dev/)** — build tool & dev server (using the new Rolldown-powered bundler + `@vitejs/plugin-react`)
- **[React Router DOM 6](https://reactrouter.com/)** — client-side routing
- **Plain CSS** (`index.css`) — custom design system using CSS variables (no Tailwind/Bootstrap)
- **ESLint** — flat config with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **Inline SVG icon components** — hand-built icon set (no external icon library)
---
 
## 📂 Project Structure
 
```
Ai_Interview_Coach_landing_page/
├── index.html                  # Vite entry HTML
├── vite.config.js              # Vite + React plugin config
├── eslint.config.js            # Flat ESLint config
├── package.json
├── src/
│   ├── main.jsx                 # React root render
│   ├── App.jsx                  # Router setup (Home / Features / How It Works)
│   ├── index.css                # Global design system (variables, layout, components)
│   ├── components/
│   │   ├── Navbar.jsx            # Top navigation with active-link highlighting + CTA
│   │   └── Icons.jsx             # Hand-built inline SVG icon set
│   ├── pages/
│   │   ├── Home.jsx               # Hero + features grid
│   │   ├── Features.jsx           # Detailed features showcase
│   │   └── HowItWorks.jsx         # 4-step process walkthrough
│   └── assets/
│       └── image_right_panel.png  # Hero illustration
```
 
---
 
## 🧭 Pages & Routes
 
| Route | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Hero section with CTA buttons + a 4-card features preview grid |
| `/features` | `Features.jsx` | Expanded feature breakdown with bullet highlights per feature |
| `/how-it-works` | `HowItWorks.jsx` | Step-by-step journey: Set Goals → Mock Interview → Review Feedback → Improve & Ace It |
 
All routes share a persistent `Navbar` (with an active-route indicator) defined in `App.jsx`.
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js 20.19+ (or 22.12+) — required by Vite 8
- npm (or yarn/pnpm)
### 1. Clone the repository
```bash
git clone https://github.com/BhupatiNadar/Ai-Interview-Coach-landing-page.git
cd Ai-Interview-Coach-landing-page/Ai_Interview_Coach_landing_page
```
 
### 2. Install dependencies
```bash
npm install
```
 
### 3. Run the dev server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (default Vite port) with hot module reloading.
 
### 4. Build for production
```bash
npm run build
```
Output goes to the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).
 
### 5. Preview the production build locally
```bash
npm run preview
```
 
### 6. Lint the code
```bash
npm run lint
```
 
---
 
## 🔗 Connecting to the Main App
 
This landing page links out to the live AI Interview Coach app via a hardcoded URL in both `Navbar.jsx` and `Home.jsx`:
 
```js
const targetAppUrl = "https://ai-interview-coach-project.streamlit.app/";
```
 
If you deploy your own instance of the [main app](https://github.com/BhupatiNadar/ai-interview-coach), update this constant in both files to point to your deployment.
 
---
 
## 🎨 Design System
 
The entire UI is styled with hand-written CSS using a small set of CSS custom properties defined in `:root`:
 
```css
--bg-color: #0b0c10;
--primary: #7b3fe4;
--primary-hover: #6a2cc9;
--card-bg: #16161e;
--card-border: #272733;
--success: #22c55e;
--warning: #f97316;
--info: #3b82f6;
```
 
This keeps the dark, purple-accented aesthetic consistent across the navbar, hero, feature cards, and tags — and makes it trivial to re-theme by editing a handful of variables in `src/index.css`.
 
---
 
## 🗺️ Roadmap
 
- [ ] Add a testimonials / social-proof section
- [ ] Add an FAQ section
- [ ] Add a footer with social links and contact info
- [ ] SEO meta tags + Open Graph image
- [ ] Animate hero & feature cards on scroll
- [ ] Dark/light theme toggle (icon already scaffolded in `Icons.jsx`)
---
 
## 🤝 Contributing
 
Contributions are welcome!
 
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request
---
 
## 📜 License
 
This project is licensed under the **MIT License**.
 
---
 
## 👤 Author
 
**Bhupati Nadar**
GitHub: [@BhupatiNadar](https://github.com/BhupatiNadar)
 
---
 
## 🔗 Related Repository
 
- **Main App:** [ai-interview-coach](https://github.com/BhupatiNadar/ai-interview-coach) — the actual Streamlit-based mock interview platform this landing page promotes.
---
 
<div align="center">
🚀 Crack interviews with confidence — Made with ❤️, React & Vite
 
</div>
 
