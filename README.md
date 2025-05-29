# Build Tools Showcase

A modern web application showcasing various build tools and development practices, including Webpack, TypeScript, Sass, ESLint, and Prettier.

## Project Overview

This project demonstrates the integration of modern build tools and development practices in a web application. It includes:

- TypeScript for type-safe JavaScript
- Webpack for module bundling and development server
- Sass for advanced CSS preprocessing
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks

## Setup and Run Instructions

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd build-tools-showcase
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will open automatically in your default browser at `http://localhost:9000`.

## Build Process

### Webpack Configuration

The project uses Webpack for:

- Bundling TypeScript files
- Processing Sass/SCSS files
- Serving the development environment
- Production builds
- Source maps in development
- Hot Module Replacement (HMR)

### TypeScript

- Configuration in `tsconfig.json`
- Strict type checking enabled
- Modern JavaScript features support
- Source maps for debugging

### Sass/SCSS

- Modular SCSS architecture
- Processed through `sass-loader`
- Integrated with Webpack's module system

## Code Quality Tools

### Linting (ESLint)

The project uses ESLint with TypeScript support and the following key rules:

- Strict TypeScript checks
- No unused variables
- Warning for `any` type usage
- Console warnings are restricted
- Modern JavaScript practices enforced

### Formatting (Prettier)

- Consistent code style across the project
- Integration with ESLint
- Automatic formatting on save (if configured in your editor)

## Available NPM Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Create production build
- `npm run lint` - Run ESLint to check code quality
- `npm run check` - Run both linting and formatting checks
- `npm run format` - Check code formatting with Prettier

## Git Hooks

The project uses Husky to enforce code quality before commits:

- Pre-commit hook runs linting and formatting checks
- Commits are blocked if code quality checks fail

## Testing

The project uses Jest for unit testing with the following features:

- TypeScript support through ts-jest
- DOM testing with jsdom
- Code coverage reporting
- Mock support for static assets and CSS modules

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Structure

Tests are located in the `src/__tests__` directory and follow the naming pattern `*.test.ts`. The test suite includes:

- Component rendering tests
- DOM manipulation tests
- Theme switching functionality
- Local storage integration
- Event handling

<!-- ### Coverage Requirements

The project maintains a minimum code coverage threshold of 80% for:

- Branches
- Functions
- Lines
- Statements -->

## Project Structure

```
build-tools-showcase/
├── src/              # Source files
├── dist/             # Build output
├── data/             # Data files
├── .husky/           # Git hooks
├── webpack.config.cjs # Webpack configuration
├── tsconfig.json     # TypeScript configuration
├── eslint.config.mjs # ESLint configuration
└── .prettierrc       # Prettier configuration
```

## License

ISC
