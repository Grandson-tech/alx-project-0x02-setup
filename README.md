# Next.js Project Setup and Basics

This repository contains a comprehensive Next.js project that demonstrates modern web development practices using TypeScript, Tailwind CSS, and the Pages Router. The project serves as an introduction to building scalable web applications with reusable components, API integration, and proper project structure.

## Purpose

This project guides you through:
- Setting up a Next.js application with TypeScript and Tailwind CSS
- Implementing basic routing using the Pages Router
- Creating reusable components with TypeScript interfaces
- Building interactive UI elements like modals and buttons
- Fetching and displaying data from external APIs
- Structuring a Next.js project following best practices

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **JSONPlaceholder API** - For fetching sample data

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

1. Clone the repository
2. Navigate to the project directory: `cd alx-project-2`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

### Pages
- **Home** (`/`) - Welcome page with navigation links
- **Home** (`/home`) - Interactive page with Card components and PostModal
- **About** (`/about`) - Demonstrates Button component with different sizes and shapes
- **Posts** (`/posts`) - Displays posts fetched from JSONPlaceholder API using PostCard components
- **Users** (`/users`) - Shows user information using UserCard components

### Components

#### Layout Components
- **Header** - Navigation component with active state highlighting

#### Common Components
- **Card** - Reusable card component for displaying content
- **Button** - Configurable button with size and shape variants
- **PostCard** - Specialized card for displaying post information
- **PostModal** - Modal component for adding new posts
- **UserCard** - Card component for displaying user details

### API Integration
- Fetches posts from `https://jsonplaceholder.typicode.com/posts`
- Fetches users from `https://jsonplaceholder.typicode.com/users`
- Implements loading states and error handling

## Component Usage Examples

### Card Component
```tsx
<Card 
  title="Sample Title" 
  content="This is sample content for the card." 
/>
```

### Button Component
```tsx
<Button 
  size="medium" 
  shape="rounded-md"
  onClick={() => console.log('Clicked!')}
>
  Click Me
</Button>
```

### PostModal Component
```tsx
<PostModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSubmit={(title, content) => handleAddPost(title, content)}
/>
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### TypeScript Interfaces
All component props are defined in `interfaces/index.ts`:
- `CardProps` - For Card component
- `ButtonProps` - For Button component
- `PostProps` - For PostCard component
- `UserProps` - For UserCard component
- `PostModalProps` - For PostModal component

## Best Practices Implemented

- **Type Safety** - Full TypeScript implementation with proper interfaces
- **Component Reusability** - Modular, reusable components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Error Handling** - Proper error states for API calls
- **Loading States** - User feedback during data fetching
- **Clean Architecture** - Organized folder structure
- **Code Quality** - ESLint configuration for consistent code style

## API Endpoints Used

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Users**: `https://jsonplaceholder.typicode.com/users`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is part of the ALX curriculum and is for educational purposes.