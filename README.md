# ShelfLife

A community toy-swapping platform that connects kids with developmentally supportive activities, encourages parents to share resources rather than spend cash, and builds connections. Currently under development.

## Goals

This project serves multiple purposes:

### Technical Learning
- **Master React fundamentals** - Build a production-ready application using modern React patterns, hooks, and component architecture
- **Full-stack development** - Gain hands-on experience with the complete application lifecycle, from database design to deployment
- **Modern tooling** - Work with industry-standard technologies including Next.js App Router, TypeScript, Prisma ORM, and Tailwind CSS
- **Real-world implementation** - Solve authentic challenges like authentication, file uploads, geolocation, and real-time features

### Product Development
- **User-centered design** - Build features based on real parent needs and pain points around toy clutter and sustainability
- **Iterative approach** - Ship a focused MVP, gather feedback, and iterate based on actual usage
- **Feature prioritization** - Practice making pragmatic scope decisions to balance ambition with deliverability
- **Community building** - Design systems that encourage trust, safety, and local connections

### Impact
- **Environmental sustainability** - Reduce toy waste and overconsumption through community sharing
- **Family support** - Help parents access developmentally appropriate toys without the financial burden
- **Local connection** - Strengthen neighborhood bonds through shared resources and in-person meetups

This project aims to demonstrate both technical capability and thoughtful product thinking while potentially creating something useful for real families.

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

## Future Features

### AI-Powered Toy Rotation Assistant
Based on feedback from my parent friends, many struggle with the mental load of planning toy rotations at home. We plan to integrate AI recommendations that:
- Suggest which toys to display each week based on child's developmental stage and what you already have
- Create custom rotation schedules aligned with learning goals
- Recommend swaps from the community marketplace that fit rotation needs
- Reduce decision fatigue while maximizing child engagement

This feature bridges personal toy management with community sharing, making ShelfLife valuable even for toys you own.

## License

Clare Eisentrout
