# 🔗 Link Saver

A modern, full-stack link management application built with Next.js 15, featuring real-time search, link previews, and a clean, responsive interface. Save, organize, and discover your favorite links with automatic metadata extraction.

## 🎯 What is Link Saver?

Link Saver is a personal bookmark manager that helps you:

- **Save links** with automatic title, description, and favicon extraction
- **Search instantly** through your saved links with real-time filtering
- **Preview links** before saving to ensure you're bookmarking the right content
- **Organize efficiently** with a clean, distraction-free interface

Perfect for developers, researchers, and anyone who wants to maintain a personal knowledge base of useful resources.

## ✨ Features

### ✅ **Currently Implemented**

- **🔍 Real-time Search**: Instant filtering of saved links with parallel routing
- **📋 Link Previews**: Automatic metadata extraction with favicon support
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **⚡ Server-Side Rendering**: Fast initial page loads with Next.js 15
- **🛡️ Type Safety**: Full TypeScript coverage with strict typing
- **🎨 Modern UI**: Clean interface with loading states and error boundaries
- **🗄️ SQLite Database**: Lightweight, file-based storage with Drizzle ORM
- **🔒 Input Validation**: Server-side validation with Zod schemas

### 🚧 **In Development**

- **📊 Link Analytics**: Track your most visited bookmarks
- **🏷️ Tagging System**: Organize links with custom tags
- **📁 Collections**: Group related links together
- **🔄 Import/Export**: Backup and restore your bookmarks

## 🏗️ Architecture Overview

### **Frontend Stack**

- **Next.js 15** - App Router with Server Components and Parallel Routes
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety with strict configuration
- **Tailwind CSS** - Utility-first styling with custom design system
- **React Query** - Server state management with caching

### **Backend Stack**

- **Next.js API Routes** - Serverless API endpoints
- **Drizzle ORM** - Type-safe database operations
- **SQLite** - Lightweight, file-based database
- **Zod** - Runtime type validation and schema definition

### **Key Architectural Patterns**

#### **Parallel Routing (`@search`)**

```typescript
// src/app/@search/page.tsx - Search results
// src/app/@search/loading.tsx - Loading state
// src/app/@search/error.tsx - Error boundary
```

This pattern allows the search functionality to be completely isolated while sharing the same layout.

#### **Atomic Design System**

```
src/components/
├── atoms/          # Basic building blocks (Button, Input)
├── molecules/      # Simple combinations (LinkCard, InputWithButtonForm)
└── organisms/      # Complex components (AddLinkForm, SearchBar)
```

#### **Type-Safe Database Layer**

```typescript
// src/db/schema.ts
export const links = sqliteTable("links", {
  id: int("id").primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  favicon: text("favicon"),
});
```

## 📊 Current State Review

### ✅ **Strengths**

- **Modern Tech Stack**: Using latest Next.js 15 with App Router
- **Clean Architecture**: Well-organized component structure with atomic design
- **Type Safety**: Comprehensive TypeScript coverage
- **Error Handling**: Proper error boundaries and loading states
- **Database Design**: Clean schema with proper relationships
- **Performance**: Server-side rendering for fast initial loads

### ⚠️ **Areas for Improvement**

#### **Critical Issues (Must Fix)**

1. **Security Vulnerability**: Using JSDOM for HTML parsing (potential XSS risk)
2. **Performance Bottleneck**: 10-second artificial delay in data fetching
3. **Database Configuration**: Incorrect SQLite configuration in Drizzle config

#### **High Impact Issues**

4. **Navigation Patterns**: Using `window.location` instead of Next.js router
5. **Form Validation**: Missing client-side validation and proper form handling
6. **Loading States**: Inconsistent loading patterns across components

#### **Code Quality Issues**

7. **Type Safety**: Some type mismatches and unsafe DOM access
8. **Accessibility**: Missing ARIA labels and keyboard navigation
9. **Error Handling**: Inconsistent error message styling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/peterchu999/link-saver.git
cd link-saver

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npm run db:generate
npm run db:migrate

# Start development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL=file:./sqlite.db
NODE_ENV=development
```

## 📁 Project Structure

```
link-saver/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── @search/           # Parallel route for search functionality
│   │   │   ├── page.tsx       # Search results page
│   │   │   ├── loading.tsx    # Search loading state
│   │   │   └── error.tsx      # Search error boundary
│   │   ├── api/               # API routes
│   │   │   └── links/         # Link management endpoints
│   │   ├── new/               # Add new link page
│   │   ├── error.tsx          # Global error boundary
│   │   ├── loading.tsx        # Global loading state
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Atomic design components
│   │   ├── atoms/             # Basic UI components
│   │   ├── molecules/         # Compound components
│   │   └── organisms/         # Complex feature components
│   ├── db/                    # Database configuration
│   │   ├── index.ts           # Database connection
│   │   ├── schema.ts          # Database schema
│   │   └── migrations/        # Database migrations
│   ├── lib/                   # Utilities and helpers
│   │   ├── api/               # API client functions
│   │   ├── utils.ts           # General utilities
│   │   └── validate/          # Validation schemas
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── drizzle.config.ts          # Database configuration
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
```

### Code Quality Tools

- **ESLint** - Code linting with Next.js rules
- **TypeScript** - Strict type checking
- **Prettier** - Code formatting (recommended)

## 🔮 Next Phase Improvements

### **Phase 1: Critical Fixes (Week 1)**

- [ ] Replace JSDOM with secure HTML parser
- [ ] Remove artificial delay in data fetching
- [ ] Fix database configuration
- [ ] Implement proper form validation
- [ ] Fix navigation patterns

### **Phase 2: Enhanced UX (Week 2)**

- [ ] Add comprehensive accessibility features
- [ ] Implement consistent loading states
- [ ] Add keyboard navigation support
- [ ] Create design system with CSS variables
- [ ] Add input sanitization

### **Phase 3: Advanced Features (Week 3-4)**

- [ ] Add link tagging system
- [ ] Implement collections/folders
- [ ] Add link analytics and usage tracking
- [ ] Create import/export functionality
- [ ] Add link sharing capabilities

### **Phase 4: Performance & Testing (Week 5-6)**

- [ ] Add comprehensive test suite
- [ ] Implement caching strategies
- [ ] Add performance monitoring
- [ ] Optimize database queries
- [ ] Add PWA capabilities

## 🧪 Testing Strategy

### **Current State**

- No automated tests implemented
- Manual testing only

### **Planned Testing Stack**

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **MSW** - API mocking

## 🚀 Deployment

### **Current Deployment**

- Ready for Vercel deployment
- SQLite database (file-based)

### **Production Considerations**

- **Database**: Consider migrating to PostgreSQL for production
- **Caching**: Implement Redis for session management
- **CDN**: Add image optimization and static asset caching
- **Monitoring**: Add error tracking and performance monitoring

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper tests
4. Ensure all tests pass (`npm test`)
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Drizzle](https://orm.drizzle.team/) - TypeScript ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Query](https://tanstack.com/query) - Server state management
- [Zod](https://zod.dev/) - TypeScript-first schema validation

---

**Built with ❤️ using Next.js 15 and modern web technologies**
