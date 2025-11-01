# goOrganic

A comprehensive Next.js website for organic living guides, reviews, and resources.

## Tech Stack

- **Framework**: Next.js 15
- **React**: React 19
- **CMS**: TinaCMS 2.2.0
- **Styling**: TailwindCSS 4.0
- **Internationalization**: next-intl 3.20.0
- **SEO**: next-seo 6.6.0
- **Analytics**: Vercel Analytics
- **TypeScript**: 5.6.0

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start both TinaCMS and Next.js development servers.

### Building for Production

```bash
npm run build
```

### Starting Production Server

```bash
npm start
```

## Project Structure

```
goOrganic/
├── app/                 # Next.js App Router pages
│   ├── blog/           # Blog posts
│   ├── resources/      # Resources section
│   ├── start-here/     # Beginner's guide
│   └── [category]/     # Category pages
├── components/         # React components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   ├── content/        # Content components
│   └── sections/       # Page sections
├── content/            # TinaCMS content
│   ├── blog/           # Blog post markdown files
│   ├── categories/     # Category page content
│   └── resources/       # Resource page content
├── lib/                # Utility functions
├── public/             # Static assets
└── tina/               # TinaCMS configuration
```

## Content Management

TinaCMS admin panel is available at `/admin` when running in development mode.

## Deployment

### Vercel

This project is configured for Vercel deployment:

1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` (from TinaCMS)
   - `TINA_TOKEN` (from TinaCMS)
   - `SITE_URL` (your domain)

4. Deploy!

The build process will automatically:
- Build TinaCMS
- Build Next.js
- Generate sitemap

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
SITE_URL=https://yourdomain.com
```

## Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ TinaCMS integration
- ✅ Blog system
- ✅ Category pages
- ✅ Resources section
- ✅ Start Here guide
- ✅ Social sharing
- ✅ Reading time calculation
- ✅ Related posts
- ✅ Search functionality ready

## License

Private project

