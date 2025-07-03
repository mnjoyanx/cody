# Codifyer Project Documentation

## Overview
Codifyer is a monorepo project that includes multiple applications and shared packages. The main application is a flow visualization tool that allows users to view and interact with database schemas and their relationships.

## Project Structure

```
codifyer/
├── apps/                 # Application packages
│   ├── flow/            # Main flow visualization app
│   ├── docs/            # Documentation site
│   └── web/            # Web application
└── packages/           # Shared packages
    ├── sidebar/        # Shared sidebar component
    ├── ui/             # Shared UI components
    ├── eslint-config/  # Shared ESLint configuration
    ├── typescript-config/ # Shared TypeScript configuration
    └── tailwind-config/ # Shared Tailwind CSS configuration
```

## Applications

### Flow App
The main application for visualizing database schemas and relationships.

#### Features
- Interactive visualization of database tables and relationships
- Real-time connection management
- Custom table nodes with field information
- Minimap for easy navigation
- Background grid and controls
- Project management via API

#### Technical Stack
- Next.js 15.3
- React 19.1
- @xyflow/react for flow visualization
- TanStack Query for data fetching
- TypeScript
- Tailwind CSS

#### Key Components
1. **Page Component** (`apps/flow/app/page.tsx`)
   - Main component that handles project fetching and visualization
   - Manages nodes and edges state
   - Handles project loading and error states

2. **Table Nodes** (`apps/flow/components/nodes/`)
   - Custom node components for displaying database tables
   - Field information display
   - Position logging functionality

3. **Edges** (`apps/flow/components/edges/`)
   - Custom edge components for relationships
   - Animated connections for foreign key relationships

4. **API Integration** (`apps/flow/api/`)
   - Project fetching
   - Type definitions
   - Authentication handling

### Docs App
Documentation site for the project.

### Web App
Main web application interface.

## Shared Packages

### Sidebar Package
A reusable sidebar component used across applications.

#### Features
- Navigation menu
- Custom styling
- React component library

### UI Package
Shared UI components used across all applications.

#### Components
- Button
- Card
- Gradient
- TurboRepo Logo

### Configuration Packages
1. **eslint-config**
   - Shared ESLint rules
   - Next.js specific configurations
   - React internal rules

2. **typescript-config**
   - Base TypeScript configuration
   - Next.js specific settings
   - React library configuration

3. **tailwind-config**
   - Shared Tailwind CSS styles
   - PostCSS configuration
   - Global styles

## Development

### Prerequisites
- Node.js >= 18
- PNPM package manager
- Git

### Installation
```bash
# Install dependencies
pnpm install
```

### Development Commands
```bash
# Start all applications
pnpm dev

# Build all applications
pnpm build

# Run linting
pnpm lint

# Type checking
pnpm check-types
```

### Port Configuration
- Docs: 3000
- Web: 3001
- Flow: 3003

## API Integration

### Base URL
```
https://api.codifyer.io/api
```

### Authentication
Uses JWT token authentication. Token should be provided in Authorization header.

### Endpoints
1. **Get Projects**
   ```
   GET /projects
   ```

2. **Get Project by ID**
   ```
   GET /projects/{id}
   ```

## Project Configuration

### Turbo Configuration
Managed via `turbo.json` in the root directory. Handles:
- Build dependencies
- Development mode
- Linting
- Type checking

### Workspace Configuration
Uses PNPM workspace features for package management and dependency sharing.

### TypeScript Configuration
Extends from base configuration with specific overrides for each application type.

## Best Practices

### Code Organization
1. Keep shared components in packages
2. Use appropriate type definitions
3. Follow consistent styling with Tailwind
4. Maintain proper documentation

### Performance
1. Use React.memo for expensive components
2. Implement proper loading states
3. Handle errors gracefully
4. Use appropriate caching strategies with TanStack Query

### Testing
Implement tests for:
1. Component rendering
2. API integration
3. User interactions
4. Edge cases

## Deployment

### Build Process
1. Type checking
2. Linting
3. Building packages
4. Building applications

### Environment Variables
Configure appropriate environment variables for:
1. API endpoints
2. Authentication
3. Feature flags
4. Environment-specific settings

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
MIT License
