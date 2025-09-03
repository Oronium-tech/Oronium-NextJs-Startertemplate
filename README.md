# Oronium Next.js Starter Template

A modern, well-structured Next.js starter template with App Router, TailwindCSS, and development best practices built-in.

## ✨ Features

- **Next.js 14+** with App Router
- **TailwindCSS** for styling
- **Organized folder structure** with feature-based components
- **ESLint & Prettier** configured
- **Husky** for Git hooks
- **Lint-staged** for pre-commit linting
- **Commitlint** for conventional commits
- **TypeScript support** (with JSDoc for JavaScript projects)
- **Route groups** for organized layouts
- **Environment variable management**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/oronium-nextjs-starter.git
cd oronium-nextjs-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Initialize Husky (if not already done):

```bash
npx husky install
npm pkg set scripts.prepare="husky install"
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
my-next-app/
├── public/                           # Static assets (images, icons, fonts)
│   └── favicon.ico
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                  # Authenticated routes
│   │   │   ├── layout.js
│   │   │   └── dashboard/
│   │   │       └── page.js
│   │   ├── (unauth)/                # Public routes
│   │   │   ├── layout.js
│   │   │   ├── page.js              # Home page
│   │   │   ├── products/
│   │   │   │   └── page.js
│   │   │   └── auth/
│   │   │       └── page.js
│   │   ├── layout.js                # Root layout
│   │   ├── robots.js
│   │   └── sitemap.js
│   ├── components/                  # All UI components
│   │   ├── shared/                  # Reusable global components
│   │   │   ├── ui/                  # Atomic components
│   │   │   │   ├── Button.js
│   │   │   │   ├── Input.js
│   │   │   │   └── Tag.js
│   │   │   └── layout/              # Layout components
│   │   │       ├── Header.js
│   │   │       └── Footer.js
│   │   ├── products/                # Feature-specific components
│   │   │   └── ProductCard.js
│   │   ├── dashboard/
│   │   │   └── ProfileCard.js
│   │   └── auth/
│   │       └── LoginForm.js
│   ├── styles/
│   │   └── global.css               # TailwindCSS + global styles
│   ├── api/                         # API routes (optional)
│   ├── types/                       # Type definitions
│   ├── utils/                       # Utility functions
│   └── libs/                        # External library configurations
├── .eslintrc.json
├── .prettierrc
├── tailwind.config.js
├── postcss.config.js
├── lint-staged.config.js
├── commitlint.config.js
└── package.json
```

## 🧩 Component Organization

### Shared Components

Located in `src/components/shared/`:

- **`ui/`** - Atomic components (Button, Input, Tag)
- **`layout/`** - Layout components (Header, Footer)

```javascript
// Import shared components
import Button from "@/components/shared/ui/Button"
import Header from "@/components/shared/layout/Header"
```

### Feature-Specific Components

Located in `src/components/<feature-name>/`:

```javascript
// Import feature-specific components
import ProductCard from "@/components/products/ProductCard"
import LoginForm from "@/components/auth/LoginForm"
```

### Sample Component

```javascript
// components/shared/ui/Button.js
export default function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition-colors ${
        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
      }`}
    >
      {children}
    </button>
  )
}
```

## 🎨 Styling with TailwindCSS

TailwindCSS is configured and ready to use. The configuration includes:

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add your custom theme extensions here
    },
  },
  plugins: [],
}
```

Global styles are located in `src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom global styles here */
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Authentication
AUTH_SECRET=your-auth-secret
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret

# Database
DATABASE_URL=your-database-url

# Other environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Access them in your code:

```javascript
const authSecret = process.env.AUTH_SECRET
const publicAppUrl = process.env.NEXT_PUBLIC_APP_URL
```

## 🛠️ Development Tools

### Code Quality

- **ESLint** - Code linting with Next.js recommended rules
- **Prettier** - Code formatting
- **Husky** - Git hooks for automated checks
- **Lint-staged** - Run linters on staged files only

### Git Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new login form component
fix: resolve navigation menu overflow issue
docs: update README with setup instructions
style: format code with prettier
refactor: simplify dashboard layout logic
test: add unit tests for Button component
chore: update dependencies
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier

# Git hooks (automatically run)
npm run prepare      # Install Husky hooks
```

## 🚦 Route Groups

This template uses Next.js route groups for organized layouts:

- **(auth)** - Protected routes requiring authentication
- **(unauth)** - Public routes accessible without authentication

Each route group can have its own layout component for specific styling and functionality.

## 📚 Best Practices

1. **Component Organization**: Place shared components in `shared/` and feature-specific ones in their respective feature folders
2. **Naming Convention**: Use PascalCase for component files and folders
3. **Flat Structure**: Avoid deep nesting for better maintainability
4. **Consistent Imports**: Use path aliases (`@/components/...`) for cleaner imports
5. **Type Safety**: Use JSDoc comments or TypeScript for better developer experience
6. **Commit Messages**: Follow conventional commit standards

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please:

1. Check the [documentation](https://nextjs.org/docs)
2. Open an [issue](https://github.com/your-username/oronium-nextjs-starter/issues)
3. Start a [discussion](https://github.com/your-username/oronium-nextjs-starter/discussions)

---

**Happy coding! 🚀**

Built with ❤️ using [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)
