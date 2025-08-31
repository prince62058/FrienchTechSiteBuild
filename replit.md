# FrienchTech IT Solutions Website

## Overview

This project is a modern, full-stack web application for FrienchTech IT Solution Pvt Ltd, designed to showcase IT services, projects, and pricing, and manage client contacts. It aims to provide a highly interactive, modern design optimized for the Indian market, reflecting a blend of tech startup aesthetics and luxury product showcase. Key capabilities include comprehensive information display, interactive elements, and robust contact management.

## User Preferences

Preferred communication style: Simple, everyday language.
The user prefers a clean, minimal design with transparent backgrounds, no dark overlays, and automatic background image rotation. Specific elements like rocket icons and 3D animated elements should be removed, and the hero section should be centered and simplified. Description paragraphs should be removed for a cleaner appearance, and text colors updated to white for visibility.

## System Architecture

The application employs a modern full-stack architecture with clear separation between frontend and backend.

**Frontend Architecture:**
- **Framework**: React 18 (JavaScript)
- **Styling**: TailwindCSS with shadcn/ui component library, supplemented by GSAP for advanced animations and cinematic transitions.
- **Routing**: Wouter for client-side routing.
- **State Management**: TanStack Query for server state management.
- **Build Tool**: Vite for development and optimized builds.
- **Graphics**: Three.js for interactive background elements (though user preferences indicate removal of 3D animated elements, the underlying capability exists).
- **UI/UX**: Dark theme with cyan-purple gradient scheme, glassmorphism effects, comprehensive skeleton UI for loading states, universal GSAP-powered scroll animations (fade-in, slide-up, scale, rotation, staggered effects), and advanced CSS-based 3D effects.

**Backend Architecture:**
- **Runtime**: Node.js with Express.js framework.
- **Language**: JavaScript (ES modules).
- **Database**: MongoDB with Mongoose ODM (migrated from PostgreSQL/Drizzle).
- **Cloud Provider**: MongoDB Atlas.
- **Session Management**: Memory-based sessions.
- **API**: RESTful endpoints for contact form and data retrieval.

**Key Components and Features:**
- **Navigation**: Fixed header with responsive mobile menu and restored footer.
- **Pages**: Home, About, Services, Projects, Pricing, Contact, Careers (with job listings).
- **Forms**: React Hook Form with Zod validation.
- **Interactive Elements**: Animated counters, auto-rotating testimonials, technology category selection, and animated statistics counters.
- **Pricing**: Updated to match frienchtech.com with Indian Rupee (₹) pricing, 20% discount visualization, and specific service categories.
- **Google Maps**: Integration of office location on contact page.
- **Responsiveness**: Optimized for desktop and mobile with touch-friendly interactions.

**Data Flow:**
- Frontend forms submit data via fetch API to Express endpoints.
- Zod schemas provide validation on both client and server.
- Mongoose handles MongoDB interactions.
- TanStack Query manages API responses and caching.
- Comprehensive error handling with error boundaries and toast notifications.

## External Dependencies

- **Frontend:**
    - React
    - TailwindCSS, Radix UI primitives, shadcn/ui
    - TanStack Query
    - React Hook Form, Hookform Resolvers
    - Three.js
    - GSAP (GreenSock Animation Platform)
    - Class Variance Authority, clsx, date-fns

- **Backend:**
    - Node.js
    - Express.js
    - MongoDB, Mongoose
    - Zod

- **Development Tools:**
    - Vite
    - ESLint (implied)
    - Cartographer (Replit integration)