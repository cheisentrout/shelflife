# ShelfLife

A community toy-swapping platform that connects kids with developmentally supportive activities, encourages parents to share resources rather than spend cash, and builds connections. Currently under development.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** Clerk
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/shelflife.git
cd shelflife
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create `.env` file:

```
DATABASE_URL="your-supabase-connection-string"
DIRECT_URL="your-supabase-direct-connection-string"
```

Create `.env.local` file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-key
CLERK_SECRET_KEY=your-clerk-secret
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. Run database migrations

```bash
npx prisma migrate dev
```

5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Status

Currently in MVP development (Sprint 0 - Setup phase).

### Completed

- ✅ Project setup with Next.js, TypeScript, Tailwind
- ✅ Database configuration (PostgreSQL + Prisma)
- ✅ Authentication (Clerk)
- ✅ Basic layout and navigation
- ✅ Development tooling

### Upcoming

- Core data models (Toy, User relationships)
- Toy listing and browsing features
- Messaging system
- Community meetups

## License

Clare Eisentrout
