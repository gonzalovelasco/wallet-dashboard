# Wallet Dashboard

## Description

Wallet Dashboard is a generic platform that provides analytics and information on Ethereum wallets. It allows users to perform various wallet-related operations, including adding wallets, organizing them by favorites, checking if a wallet is old, and integrating with Etherscan to fetch wallet information.

## Actual functionality

- Add wallet addresses.
- Organize wallets by marking them as favorites.
- Determine if a wallet is considered old based on specific criteria.
- Integration with Etherscan to retrieve wallet information.

## Technologies Used

- TypeScript
- TurboRepo
- NestJS
- PostgreSQL
- Prisma
- React
- Next.js
- Tailwind CSS
- React-Redux
- RESTful API for endpoints
- Docker

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm`.
3. Configure your environment variables, including database settings and API keys.
4. Start PostgreSQL Container `npm run db:up`
5. Initialize Prisma Database in apps/api
   1. `npx prisma migrate dev`
   2. `npx prisma db:seed`
6. Run the application locally using `npm run dev`.

## Future Improvements

- Select a wallet and view its balance in Euro/US Dollar.
- Change the rate Euro/US Dollar/ETH
- Secure endpoints with JWT authentication.
- Generate comprehensive API documentation.
- Implement tests for both the backend and frontend.
- Set up GitHub workflows for automated CI/CD.
