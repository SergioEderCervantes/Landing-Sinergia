# Sinergia Landing Page

This project is a landing page for "Sinergia", designed to introduce a problem or concept and present Sinergia as a compelling solution or source of information. It is built using modern web technologies to provide a fast, responsive, and engaging user experience.

## Technologies Used

*   **Next.js**: A React framework for building performant web applications.
*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **GSAP (GreenSock Animation Platform)**: A powerful JavaScript animation library for professional-grade animations.

## Folder Structure

Here's a brief overview of the main directories and their contents:

*   `app/`: Contains the core application logic and pages.
    *   `app/layout.tsx`: The root layout of the application, including global styles and metadata.
    *   `app/page.tsx`: The main landing page component.
    *   `app/globals.css`: Global styles for the application, including Tailwind CSS imports.
    *   `app/components/`: Reusable UI components used across the application (e.g., `Button.tsx`, `Card.tsx`).
    *   `app/layout/`: Layout-specific components (e.g., `Header.tsx`).
    *   `app/lib/`: Utility functions and helper modules (e.g., `utils.ts`).
    *   `app/sections/`: Contains distinct sections of the landing page (e.g., `Hero.tsx`, `Problematica.tsx`).
*   `public/`: Static assets like images, fonts, and other files served directly.
    *   `public/logos/`: Contains various logo assets for Sinergia.

## Getting Started

Follow these steps to set up and run the project locally.

### Installation

1.  Clone the repository:
    ```bash
    git clone [repository-url]
    cd sinergia-landing
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    # or bun install
    ```

### Development Server

To run the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
# or bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

### Build

To build the application for production:

```bash
npm run build
# or yarn build
# or pnpm build
# or bun build
```

This command optimizes the application for deployment.

### Start Production Server

To start the built application in production mode:

```bash
npm run start
# or yarn start
# or pnpm start
# or bun start
```

### Linting

To run the linter and check for code style issues:

```bash
npm run lint
# or yarn lint
# or pnpm lint
# or bun lint
```

## Important Note

Remember to update the `metadata.title` and `metadata.description` in `app/layout.tsx` to reflect the actual title and description of your Sinergia landing page.