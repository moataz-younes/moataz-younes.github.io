# Full-Stack Web Application - Moataz Younes Portfolio

## Overview

This is a full-stack web application built as a portfolio website for Moataz Younes, a cybersecurity expert and cybercrime investigator. The project follows a modern full-stack architecture with a React frontend, Express backend, and PostgreSQL database using Drizzle ORM. The application is designed to showcase cybersecurity services, portfolio projects, and provide contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application uses a **monolithic full-stack architecture** with clear separation between client and server code:

- **Frontend**: React with TypeScript running on Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React + TypeScript**: Main frontend framework with strict typing
- **Vite**: Build tool and development server for fast development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built component library using Radix UI primitives
- **TanStack Query**: Server state management and data fetching
- **Wouter**: Lightweight client-side routing solution

### Backend Architecture
- **Express.js**: Web server framework handling API routes and static file serving
- **TypeScript**: Type-safe server-side development
- **Custom middleware**: Request logging and error handling
- **Development/Production modes**: Conditional Vite integration for development

### Database Layer
- **PostgreSQL**: Primary database (configured but not yet implemented)
- **Drizzle ORM**: Type-safe database toolkit with schema-first approach
- **Memory Storage**: Temporary in-memory storage implementation for development
- **Neon Database**: Cloud PostgreSQL provider integration

### UI Component System
- **shadcn/ui**: Component library providing consistent design patterns
- **Radix UI**: Accessible, unstyled component primitives
- **CSS Variables**: Theme system using HSL color values
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Currently using in-memory storage, designed for PostgreSQL migration
4. **Response Handling**: JSON responses with proper error handling and logging
5. **State Management**: TanStack Query manages caching, background updates, and error states

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **drizzle-orm**: Database ORM with TypeScript support
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing library
- **class-variance-authority**: Utility for managing component variants
- **zod**: Schema validation library

### UI Dependencies
- **@radix-ui/react-***: Complete set of accessible UI primitives
- **lucide-react**: Icon library for consistent iconography
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS processing tool

### Development Dependencies
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database migration and schema management tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files in `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migrations**: Drizzle Kit handles schema changes and migrations

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express API
- **Production**: Serves static files from Express with optimized builds
- **Database**: Configured for PostgreSQL with environment-based connection strings

### Hosting Considerations
- **Replit Integration**: Configured with Replit-specific plugins and error handling
- **Static File Serving**: Express serves built React app in production
- **Database**: Neon PostgreSQL for cloud deployment
- **Environment Variables**: DATABASE_URL required for database connection

The application is structured for easy deployment on Replit while maintaining flexibility for other hosting platforms. The development setup provides hot reloading and comprehensive error handling, while the production build optimizes for performance and reliability.