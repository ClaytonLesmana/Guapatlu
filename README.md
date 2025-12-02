# Guapatlu - Restaurant Loyalty Rewards System

A Next.js-based restaurant website with an integrated customer loyalty rewards program. Customers earn points for every purchase and can redeem rewards at various tiers.

## Features

- **Customer Registration**: New customers can sign up and receive 10 welcome points
- **Points System**: Customers earn 1 point for every 10,000 IDR spent
- **Reward Tiers**: Multiple reward levels from Free Es Teh to Free Bakmi for 2 People
- **Leaderboard**: View top customers and compete for rankings
- **Online Ordering**: Integration with Gojek and Grab delivery services
- **Admin Panel**: Hidden admin interface for managing customer points and redemptions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Admin Panel

The admin panel is **hidden from navigation** and can only be accessed directly via URL:

```
http://localhost:3000/admin
```

### Admin Features

- **Search Customer**: Look up customer information by phone number
- **Add Points**: Add points based on customer spending (1 point per 10,000 IDR)
- **Redeem Rewards**: Process reward redemptions and deduct points
- **View Points**: Check customer's current point balance

For detailed admin instructions, see [ADMIN_GUIDE.md](./ADMIN_GUIDE.md).

### Optional Password Protection

To add basic password protection to the admin panel:

1. Set environment variable: `ADMIN_PASSWORD=your-secure-password`
2. Access admin via: `http://localhost:3000/admin-login`

Note: This is basic protection. For production, implement proper authentication.

## Reward Tiers

- **15 Points**: Free Es Teh
- **30 Points**: Free Pangsit (Rebus or Goreng)
- **60 Points**: Free Bakmi Jambi + Es Teh
- **100 Points**: Free Bakmi Jambi for 2 People (Bring a Friend)

## Environment Variables

Required environment variables (see ENV_SETUP.md):

```env
GOOGLE_SHEET_ID=your-sheet-id
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email
GOOGLE_SHEETS_PRIVATE_KEY=your-private-key
ADMIN_PASSWORD=your-admin-password (optional)
```

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/
│   ├── index.tsx       # Home page
│   ├── register.tsx    # Customer registration
│   ├── points.tsx      # Check points balance
│   ├── menu.tsx        # Menu page
│   ├── leaderboard.tsx # Points leaderboard
│   ├── admin.tsx       # Admin panel (hidden)
│   ├── admin-login.tsx # Optional admin login
│   └── api/            # API routes
│       ├── register.ts # Customer registration API
│       ├── points.ts   # Get customer points API
│       └── admin/      # Admin API endpoints
│           ├── add-points.ts      # Add points by spending
│           ├── redeem-reward.ts   # Process reward redemption
│           └── verify-password.ts # Admin authentication
└── styles/             # Global styles
```

## Google Sheets Integration

The app uses Google Sheets as a database with the following structure:

| Column | Field | Description |
|--------|-------|-------------|
| A | Name | Customer's full name |
| B | Phone | Phone number (with prefix `'`) |
| C | DOB | Date of birth |
| D | Total | Total spending in IDR |
| E | Points | Current points balance |

## Technologies Used

- **Next.js**: React framework for production
- **Material-UI**: Component library for UI
- **Google Sheets API**: Database backend
- **TypeScript**: Type-safe JavaScript
- **React Hot Toast**: Toast notifications

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
