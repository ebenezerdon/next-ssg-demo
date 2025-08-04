# Next.js 15 SSG Demo

A simple static site generation (SSG) demo built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Static Site Generation**: All pages pre-rendered at build time
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 📱 **App Router**: Modern Next.js App Router architecture
- 🚀 **TypeScript**: Type-safe development with full TypeScript support
- 🔧 **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build and export the static site:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

This will generate static files in the `out/` directory that can be deployed to any static hosting service.

## Project Structure

```
next-ssg/
├── app/
│   ├── components/
│   │   └── Navigation.tsx     # Navigation component
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Static Export Configuration

This project is configured for static export with the following settings in `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

## Deployment

The generated static files in the `out/` directory can be deployed to:

- **Vercel**: Automatic deployment with Git integration
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Push the `out/` folder to a gh-pages branch
- **AWS S3**: Upload the `out/` folder to an S3 bucket
- **Any static hosting service**

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - typed JavaScript at scale
- [Static Exports](https://nextjs.org/docs/app/guides/static-exports) - Next.js static export guide

## License

This project is open source and available under the [MIT License](LICENSE).
