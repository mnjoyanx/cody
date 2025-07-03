# Flow App Documentation

## Overview
The Flow application is a visualization tool for database schemas and their relationships. It provides an interactive interface for viewing and managing database table relationships using a flow-based visualization.

## Features

### Flow Visualization
- Interactive node-based visualization
- Custom table nodes showing database schema
- Animated edges for relationships
- Minimap navigation
- Background grid
- Zoom and pan controls

### Project Management
- Project listing and selection
- Project details view
- Real-time updates

### Data Integration
- REST API integration
- JWT authentication
- Automatic data synchronization

## Component Structure

### Main Components

1. **Page Component** (`app/page.tsx`)
```typescript
- Main container component
- Handles project fetching
- Manages node and edge state
- Renders ReactFlow instance
```

2. **Table Node** (`components/nodes/TableNodeComponent.tsx`)
```typescript
- Displays table information
- Shows field list
- Handles position updates
```

3. **Edge Components** (`components/edges/`)
```typescript
- Custom edge renderers
- Relationship visualizations
- Animated connections
```

4. **Sidebar** (`@codifyer/sidebar`)
```typescript
- Navigation menu
- Project selection
- Tool controls
```

## State Management

### Node State
- Managed via `useNodesState` hook
- Automatic position updates
- Custom node type handling

### Edge State
- Managed via `useEdgesState` hook
- Relationship mapping
- Foreign key connections

### Project State
- TanStack Query for data fetching
- Automatic cache management
- Loading states
- Error handling

## API Integration

### Endpoints

1. **Get Projects**
```typescript
GET /api/projects
Response: Project[]
```

2. **Get Project Details**
```typescript
GET /api/projects/:id
Response: Project
```

### Data Types

```typescript
interface Project {
  id: number;
  name: string;
  tables: Table[];
}

interface Table {
  id: number;
  name: string;
  fields: Field[];
  position?: Position;
  posX?: number;
  posY?: number;
  color?: string;
}

interface Field {
  id: number;
  name: string;
  foreignKey?: boolean;
  foreignKeyUid?: string;
}
```

## Event Handling

### Node Events
- Position changes
- Selection
- Dragging

### Edge Events
- Connection
- Disconnection
- Selection

## Styling

### CSS Modules
- Component-specific styles
- Tailwind integration
- Responsive design

### Theme Configuration
- Custom colors
- Typography
- Spacing

## Setup Instructions

1. **Installation**
```bash
cd apps/flow
pnpm install
```

2. **Development**
```bash
pnpm dev
```

3. **Build**
```bash
pnpm build
```

4. **Type Checking**
```bash
pnpm check-types
```

## Configuration

### Environment Variables
```env
BASE_URL=https://api.codifyer.io/api
```

### TypeScript Configuration
Extended from base configuration with specific overrides for Flow app.

## Best Practices

1. **State Management**
   - Use appropriate hooks for state
   - Implement proper error boundaries
   - Handle loading states

2. **Performance**
   - Memoize expensive components
   - Optimize re-renders
   - Use proper dependency arrays in hooks

3. **Type Safety**
   - Use strict TypeScript settings
   - Define proper interfaces
   - Avoid any types

4. **Error Handling**
   - Implement error boundaries
   - Show user-friendly error messages
   - Log errors appropriately

## Common Issues and Solutions

1. **Node Positioning**
   - Issue: Nodes not updating position
   - Solution: Ensure position updates trigger state changes

2. **Edge Connections**
   - Issue: Edges not connecting properly
   - Solution: Check node IDs and connection parameters

3. **Performance**
   - Issue: Slow rendering with many nodes
   - Solution: Implement virtualization and memoization

## Testing

### Unit Tests
- Component rendering
- State management
- Event handling

### Integration Tests
- API integration
- Data flow
- User interactions

## Deployment

1. **Build Process**
```bash
pnpm build
```

2. **Environment Setup**
- Configure API endpoints
- Set up authentication
- Configure error tracking

3. **Monitoring**
- Performance metrics
- Error tracking
- Usage analytics

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit pull request

## License
MIT License
