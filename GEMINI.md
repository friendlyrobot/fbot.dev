# Friendly Robot Landing Page

This project is a landing page for Friendly Robot, built with Vite, React, and TypeScript.

## Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: @tanstack/react-query
- **Forms**: react-hook-form with Zod for validation

## Project Structure

- `src/components`: Contains reusable UI components.
  - `src/components/ui`: shadcn/ui components.
  - `src/components/sections`: Components for different sections of the landing page.
- `src/pages`: Contains the main pages of the application.
- `src/hooks`: Custom React hooks.
- `src/lib`: Utility functions.
- `public`: Static assets.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Serves the production build locally.

## Customization

- **Tailwind CSS**: The configuration is in `tailwind.config.ts`. It includes custom brand colors for Friendly Robot.
- **Vite**: The configuration is in `vite.config.ts`. It includes an alias for `@` to `src`.
- **Routing**: The routes are defined in `src/App.tsx`.
