# Jack Hu - Personal Portfolio

A minimal, high-performance personal website built with Vite, React, and Tailwind CSS.

## Features

- **Minimalist Design**: Clean typography, generous whitespace, dark mode support.
- **Performance**: Built on Vite for instant reloading and fast production builds.
- **Structure**:
  - `src/components`: Reusable UI and layout components.
  - `src/pages`: Page views (Home, Projects, Writing, About, Contact).
  - `src/data`: Content separated from presentation.
  - `src/hooks`: Custom hooks (e.g., `useDarkMode`).

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Customization

- **Content**: Update `src/data/projects.js` and `src/data/writing.js`.
- **Styling**: Modify `tailwind.config.js` or `src/index.css`.
- **Icons**: Uses `lucide-react`.

## Deployment

Ready to deploy to Vercel, Netlify, or GitHub Pages. The `dist` folder contains the production-ready assets.
