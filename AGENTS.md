# SwiftDelivery - Agent Guidelines

## Build Commands
- Frontend: `cd my-frontend && npm run dev` (dev, port 5173), `npm run build` (prod), `npm run lint` (lint)
- Backend: `cd swift-delivery-backend && npm run dev` (dev with nodemon), `npm start` (prod)
- Testing: No framework configured - add Vitest for frontend, Jest for backend

## Code Style Guidelines
- Language: JavaScript (ES Modules), React 19.2.0, Express.js, Vite build system
- Linting: ESLint with @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- Imports: ES6 import/export syntax, group imports (React, third-party, relative)
- Components: Functional components with hooks, default exports
- Naming: camelCase for variables/functions, PascalCase for components, kebab-case for files
- Error Handling: Try-catch for async operations, proper HTTP status codes, error logging
- Database: MongoDB with Mongoose ODM, async/await for queries
- Auth: JWT tokens with Firebase Admin SDK
- Real-time: Socket.io for live tracking and chat features
- File Structure: .jsx for React components, .js for utilities/services, .css for styles