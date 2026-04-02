# 🌍 REST Countries Explorer

A responsive country explorer app built with React. Search for any country, view detailed information, and explore border nations — all with a dark/light theme toggle.

Built as part of the [Frontend Mentor REST Countries API challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

---

## 🚀 Live Demo

[View on GitHub Pages](https://christencodes.github.io/Countries-Finder/) <!-- replace with your live URL -->

---

## 📸 Preview

<!-- Add a screenshot here -->

---

## ✨ Features

- 🔍 Search for any country by name with debounced input
- 🗺️ View detailed country info — population, region, capital, currencies, languages, and more
- 🌐 Navigate to border countries directly from the detail page
- 🌙 Dark / Light theme toggle persisted across the app
- 📱 Fully responsive — mobile, tablet, and desktop

---

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [React Router DOM](https://reactrouter.com/) — client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Lucide React](https://lucide.dev/) — icons
- [REST Countries API](https://restcountries.com/) — country data

---

## 🧠 Concepts Practiced

This project was built to reinforce the following React concepts:

- **Context API** — global theme state shared across all components via `ThemeProvider`
- **Custom Hooks** — `useFetch` for reusable data fetching with loading and error states
- **React Router** — `HashRouter`, `Routes`, `Route`, `Link`, `useParams`, `useNavigate`
- **Debouncing** — preventing excessive API calls on search input using `setTimeout` and `useEffect` cleanup
- **Guard clauses** — protecting against null data before rendering
- **Optional chaining** — safely accessing deeply nested API response properties

---

## 📁 Project Structure

```
src/
├── App.jsx                 # Root component, routing setup
├── ThemeProvider.jsx       # Context API theme provider + useTheme hook
├── Fetcher.jsx             # useFetch custom hook
├── Navbar.jsx              # Top navigation with theme toggle
├── MainContainer.jsx       # Home page layout with country cards
├── CountryCard.jsx         # Individual country card component
├── CountryDetails.jsx      # Full country detail page
├── Search.jsx              # Search input with debouncing
├── Filter.jsx              # Region filter dropdown
└── BackButton.jsx          # Back navigation button
```

---

## 🏃 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🔌 API Reference

This app uses the [REST Countries API v3.1](https://restcountries.com/).

| Endpoint                     | Usage                                   |
| ---------------------------- | --------------------------------------- |
| `/name/{name}?fullText=true` | Fetch a country by full name            |
| `/alpha?codes={codes}`       | Fetch multiple countries by alpha codes |

---

## 📖 What I Learned

- How to structure a React app with Context API and the Provider pattern
- How to build reusable custom hooks for data fetching
- How to implement debouncing to avoid excessive API calls
- How to use React Router with `HashRouter` for GitHub Pages deployment
- How to safely access deeply nested data from an API using optional chaining

---

## 🙏 Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io/) for the challenge design
- [REST Countries](https://restcountries.com/) for the free API
