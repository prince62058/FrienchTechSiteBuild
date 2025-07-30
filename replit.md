# FrienchTech IT Solutions Website

## Overview

This is a modern full-stack web application for FrienchTech IT Solution Pvt Ltd, built with React frontend and Express.js backend. The application serves as a corporate website showcasing IT services, projects, pricing, and includes a contact management system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with JavaScript (migrated from TypeScript)
- **Styling**: TailwindCSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **3D Graphics**: Three.js for interactive background elements

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: JavaScript with ES modules (migrated from TypeScript)
- **Database**: MongoDB with Mongoose ODM (migrated from PostgreSQL)
- **Cloud Provider**: MongoDB Atlas (migrated from Neon PostgreSQL)
- **Session Management**: Memory-based sessions

## Key Components

### Frontend Components
- **Navigation**: Fixed header with responsive mobile menu
- **Hero Section**: Interactive 3D background with Three.js particles
- **Pages**: Home, About, Services, Projects, Pricing, Contact
- **UI Components**: Comprehensive shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **Animations**: Custom animated counters and CSS animations

### Backend Components
- **API Routes**: RESTful endpoints for contact form and data retrieval
- **Database Layer**: Drizzle ORM with type-safe queries
- **Storage Interface**: Abstracted storage layer with memory fallback
- **Development Tools**: Hot reloading with Vite integration

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contacts Table**: Contact form submissions with timestamps
- **Type Safety**: Zod schemas for runtime validation

## Data Flow

1. **Frontend to Backend**: Forms submit data via fetch API to Express endpoints
2. **Validation**: Zod schemas validate data on both client and server
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Response Handling**: TanStack Query manages API responses and caching
5. **Error Handling**: Comprehensive error boundaries and toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: TailwindCSS, Radix UI primitives, shadcn/ui components
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Hookform Resolvers
- **3D Graphics**: Three.js for interactive elements
- **Utilities**: Class Variance Authority, clsx, date-fns

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL, Drizzle ORM
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: TSX for TypeScript execution, ESBuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Strict type checking across the stack
- **Code Quality**: ESLint configuration (implied)
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with HMR
- **Database**: Neon development database
- **Environment Variables**: DATABASE_URL for database connection
- **Replit Integration**: Development banner and runtime error overlay

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory
- **Deployment**: Node.js production server serving static files and API

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Environment**: Separate DATABASE_URL for production deployment

The application is designed for modern web standards with TypeScript throughout, responsive design, and scalable architecture suitable for a growing IT services business.

## Recent Updates (July 30, 2025)

### Migration & Enhancement Completed
- **Migration Status**: Successfully migrated from Replit Agent to Replit environment
- **Enhanced Features**: Added modern 3D interactive website with GSAP animations
- **Pricing Update**: All prices converted to Indian Rupees (₹) with transparent pricing structure
- **New Components**: Created enhanced hero section, pricing, and services with cinematic transitions
- **Animations**: Implemented scroll-triggered animations, parallax effects, and hover interactions
- **Performance**: Optimized for fast loading and mobile responsiveness
- **Technology Stack**: Enhanced with GSAP, React Three Fiber, and modern CSS animations

### Key Architectural Changes
- **Enhanced Hero Section**: Futuristic design with animated background particles and gradient effects
- **Modern Pricing**: Indian Rupee pricing with hover effects and interactive cards
- **Advanced Services**: Modern service showcase with animated icons and hover states
- **GSAP Integration**: Smooth scroll animations and cinematic transitions throughout
- **Responsive Design**: Optimized for desktop and mobile with touch-friendly interactions
- **Security**: Maintained client/server separation and robust security practices

The application now features a highly interactive, modern design that feels like a tech startup landing page mixed with luxury product showcase, fully optimized for the Indian market.

### Latest Updates (July 30, 2025 - Enhanced Content)
- **Comprehensive Home Page**: Expanded with multiple interactive sections including statistics, technology showcase, testimonials, and process timeline
- **Pricing Removal**: Removed pricing section from home page per user request, keeping it available on dedicated pricing page
- **Enhanced Animations**: Added advanced CSS-based 3D effects, particle animations, gradient morphing, and hover transformations
- **GSAP Integration**: Implemented scroll-triggered animations, parallax effects, and cinematic transitions throughout the site
- **Interactive Components**: Added auto-rotating testimonials, technology category selection, and animated statistics counters
- **Modern Aesthetics**: Dark theme with cyan-purple gradient scheme, glassmorphism effects, and premium visual styling
- **Mobile Optimization**: Fully responsive design with touch-friendly interactions and optimized mobile layouts

### Migration Completion (July 30, 2025 - Theme Consistency)
- **Projects Page**: Updated with modern dark theme, Three.js background, and enhanced interactive project cards
- **Pricing Page**: Enhanced with futuristic hero section and consistent dark theme styling
- **Contact Page**: Complete redesign with modern dark theme, enhanced form styling, and interactive elements
- **Careers Page**: Added comprehensive careers section with 6 job listings and modern styling
- **Google Maps Integration**: Integrated real office location with interactive map on contact page
- **GSAP Fixes**: Fixed GSAP warnings by adding defensive checks for element existence before animations
- **Consistent Theme**: All pages now feature the same modern dark theme with cyan-purple gradients
- **Enhanced UX**: Improved hover effects, card animations, and interactive elements across all pages
- **Performance**: Optimized animations and reduced console warnings for better user experience

### Latest Enhancement (July 30, 2025 - Scroll Animations)
- **Universal Scroll Animations**: Implemented comprehensive GSAP-powered scroll animations across all pages
- **Smooth Transitions**: Added fade-in, slide-up, scale, and rotation effects for all page elements
- **Enhanced User Experience**: Cards, buttons, headings, paragraphs, icons animate smoothly when scrolled into view
- **Staggered Effects**: Grid items and lists animate with beautiful staggered timing for engaging visual flow
- **Performance Optimized**: Animations use requestAnimationFrame and are optimized for smooth 60fps performance
- **CSS Enhancements**: Added complementary CSS animations for typewriter effects, icon bounces, and enhanced hover states

### Latest Feature (July 30, 2025 - Skeleton UI System)
- **Comprehensive Skeleton Loading**: Implemented sophisticated skeleton UI across all pages for better perceived performance
- **Realistic Placeholders**: Created detailed skeleton components for cards, forms, navigation, and content areas
- **Smooth Loading Transitions**: Added shimmer effects and gradient animations for polished loading experience
- **Page-Specific Skeletons**: Custom skeleton layouts for each page type (home, about, projects, pricing, careers, contact)
- **Enhanced UX**: Users see structured content placeholders while pages load, reducing perceived loading time
- **Performance Benefits**: Skeleton UI provides immediate visual feedback and maintains layout stability during loading

### Migration Completion (July 30, 2025 - TypeScript to JavaScript & PostgreSQL to MongoDB)
- **Complete TypeScript Migration**: Successfully converted all .tsx/.ts files to .jsx/.js format
- **Database Migration**: Migrated from PostgreSQL/Drizzle to MongoDB/Mongoose for improved compatibility
- **Server Architecture**: Updated Express server to run with pure JavaScript instead of TypeScript
- **Component Conversion**: All React components, hooks, and utilities converted to JavaScript
- **Schema Updates**: Replaced Drizzle schemas with Mongoose models for MongoDB
- **API Integration**: Updated all API endpoints to work with MongoDB collections
- **Development Workflow**: Application now runs directly with Node.js without TypeScript compilation
- **Backwards Compatibility**: Maintained all existing functionality while improving platform compatibility
- **Performance**: Server starts faster and uses less memory without TypeScript overhead

### Final Migration Completion (July 30, 2025 - Complete JavaScript Conversion)
- **Server TypeScript Removal**: Successfully removed server/index.ts duplicate file
- **Pure JavaScript Stack**: Application now runs entirely on JavaScript (.js/.jsx files only)
- **Duplicate File Cleanup**: Removed all TypeScript duplicates and unnecessary files
- **Runtime Conversion**: Server now runs with `node server/index.js` instead of `tsx server/index.ts`
- **Performance Improvement**: Faster startup times without TypeScript compilation overhead
- **Clean Architecture**: No more mixed TypeScript/JavaScript files or build complexity

### Replit Environment Migration (July 30, 2025 - Migration Completed)
- **Migration Success**: Successfully migrated project from Replit Agent to standard Replit environment
- **Server Verification**: Express server confirmed running on port 5000 with proper client/server separation
- **Vite Integration**: Frontend development server successfully connected and serving React application
- **Package Compatibility**: All Node.js dependencies properly installed and functional
- **Security Maintained**: Robust security practices preserved throughout migration
- **Application Verified**: Full website functionality confirmed including pricing, navigation, and all pages
- **MongoDB Storage**: Using in-memory storage fallback for development without external database dependency
- **Cartographer Warnings**: Minor plugin warnings present but not affecting core functionality
- **Pricing Page Update**: Updated pricing structure to match frienchtech.com with 20% discount offers and simplified service categories
- **Migration Complete**: Project ready for continued development and deployment

### Latest Update (July 30, 2025 - Pricing Structure Enhancement)
- **Pricing Page Redesign**: Updated pricing plans to match the reference frienchtech.com structure
- **Service Categories**: Changed from generic plans (Starter/Professional/Enterprise) to specific services (IT Solutions/Website Development/App Development)
- **Discount Display**: Added proper 20% discount visualization with strikethrough original prices
- **Indian Pricing**: All prices displayed in Indian Rupees (₹) with proper formatting
- **Call-to-Action**: Updated button text from "Contact" to "Get Started" with navigation to contact page
- **Content Alignment**: Service features and descriptions now match the reference implementation

### Deployment Fix (July 30, 2025 - Build Process Resolved)
- **Build Issue Resolved**: Fixed deployment error "Could not resolve server/index.ts" by creating TypeScript version of server file
- **Dual File Support**: Maintained both server/index.js (development) and server/index.ts (build process) for compatibility
- **Build Verification**: Confirmed successful build process generating dist/index.js (10.9KB) and dist/public/ assets
- **Production Ready**: Application now builds correctly for deployment on Render and other platforms
- **File Structure**: Preserved JavaScript-based development workflow while satisfying TypeScript build requirements