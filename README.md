# Patty's Delights - Event Catering Website

A modern, responsive website for Patty's Delights, a GTA-based event catering business specializing in fruit platters, dessert tables, and beverage stations.

## Project Overview

Patty's Delights offers premium event catering services across the Greater Toronto Area, featuring:
- Fresh fruit platters and artistic fruit carvings
- Beautiful dessert tables with homemade treats
- Interactive beverage stations (bubble tea, ice cream, tea, juice)
- Custom event styling and on-site setup

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd pattysdelights

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ServiceCard.tsx # Service display component
│   └── MobileNav.tsx   # Mobile navigation
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Gallery.tsx     # Gallery page
│   ├── Contact.tsx     # Contact form
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Technologies Used

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React** - UI framework
- **React Router** - Client-side routing
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Deployment

The project can be deployed to any static hosting service:

1. Run `npm run build` to create a production build
2. Deploy the `dist` folder to your hosting service
3. Configure your domain and SSL certificate

## Features

- **Responsive Design** - Works on all device sizes
- **Modern UI** - Clean, professional design with smooth animations
- **Contact Form** - Quote request form with validation
- **Image Gallery** - Filterable gallery with hover effects
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessibility** - ARIA labels and keyboard navigation

## License

All rights reserved. © 2024 Patty's Delights
