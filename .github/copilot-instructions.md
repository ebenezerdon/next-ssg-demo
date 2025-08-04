<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Next.js 15 SSG Demo - Copilot Instructions

This is a Next.js 15 static site generation (SSG) demo project with the following key characteristics:

## Project Structure

- Uses Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Configured for static export (`output: 'export'`)

## Key Configuration

- Static export is enabled in `next.config.js`
- Images are set to `unoptimized: true` for static hosting
- Uses file-based routing in the `app/` directory

## Development Guidelines

- All pages should be statically generated (no server-side features)
- Use Server Components by default, Client Components only when needed
- Maintain responsive design with Tailwind CSS
- Follow Next.js 15 best practices for SSG

## Static Export Limitations

- No dynamic routes with `dynamicParams: true`
- No server-side features (cookies, headers, middleware)
- No Image Optimization with default loader
- No Server Actions

When suggesting code changes, ensure compatibility with static export requirements.
