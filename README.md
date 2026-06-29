# 🐉 Dragon News

A modern news portal web application built with **Next.js 16** and **React 19**. Dragon News delivers the latest headlines with a clean, category-based layout — featuring breaking-news marquees, social login options, and a fully server-rendered architecture for blazing-fast performance.

> _"Journalism Without Fear or Favour"_

---

## ✨ Features

- **Breaking News Ticker** — A scrolling marquee highlights top stories in real time.
- **Category Navigation** — Browse news by category (fetched from an external API) with active-state highlighting.
- **Social Login** — Quick sign-in buttons for Google and GitHub.
- **Authentication Routes** — Dedicated Login & Register pages via a grouped `(auth)` route.
- **Server Components** — Data fetching happens on the server for fast initial loads and SEO.
- **Responsive Layout** — 12-column grid with left sidebar (categories), main content area, and right sidebar (login & extras).
- **Custom Fonts** — Poppins (body) and Montserrat loaded via `next/font/google`.
- **Date Display** — Formatted current date in the header using `date-fns`.

---

## 🛠️ Tech Stack

| Layer        | Technology                                           |
| ------------ | ---------------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router)       |
| UI Library   | [React 19](https://react.dev/)                       |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/) |
| Icons        | [React Icons](https://react-icons.github.io/react-icons/) |
| Animations   | [React Fast Marquee](https://www.react-fast-marquee.com/) |
| Date Utility | [date-fns](https://date-fns.org/)                    |
| Linting      | ESLint with `eslint-config-next`                     |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/            # Auth route group (Login, Register)
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.jsx
│   ├── (main)/            # Main site route group
│   │   ├── about/
│   │   ├── career/
│   │   ├── news/
│   │   ├── layout.jsx
│   │   └── page.jsx       # Homepage
│   ├── globals.css
│   ├── layout.js          # Root layout
│   └── not-found.jsx      # Custom 404 page
├── assets/                # Static images (logo, user avatar, etc.)
└── components/
    ├── homepage/
    │   └── news/
    │       ├── LeftSidebar.jsx   # Category list
    │       └── RightSidebar.jsx  # Social login buttons
    └── shared/
        ├── BreakingNews.jsx      # Marquee ticker
        ├── Header.jsx            # Logo + tagline + date
        ├── NavLink.jsx           # Active-aware nav link
        └── Navbar.jsx            # Top navigation bar
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dragon-news.git
cd dragon-news

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 API Reference

News data is fetched from the **Programming Hero Open API**:

| Endpoint                                                              | Description              |
| --------------------------------------------------------------------- | ------------------------ |
| `GET /api/news/categories`                                            | List all news categories |
| `GET /api/news/category/{category_id}`                                | News by category ID      |

Base URL: `https://openapi.programming-hero.com`

---

## 📄 License

This project is for educational purposes as part of the [Programming Hero](https://www.programming-hero.com/) web development course.
