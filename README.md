This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



# TON Wallet App with Next.js

This is a Next.js 13 TypeScript project that connects to the **TonKeeper** wallet on the **TON TestNet** network, allowing users to view their wallet balance and send TON tokens to other wallets.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [How the App Works](#how-the-app-works)
  - [Wallet Screen](#wallet-screen)
  - [Transaction Screen](#transaction-screen)
  - [Error Handling](#error-handling)
- [TON TestNet Wallet Setup](#ton-testnet-wallet-setup)
- [How to Top Up Your Wallet on TON TestNet](#how-to-top-up-your-wallet-on-ton-testnet)
- [Deployment](#deployment)

---

## Features

- **Wallet Connection**: Connects to your **TonKeeper** wallet via the **TON TestNet**.
- **Balance Display**: Displays the wallet balance once connected.
- **Transaction Creation**: Allows sending TON to a recipient’s wallet on TestNet (simulated without sending real tokens).
- **Error Handling**: Gracefully handles cases where wallet data is not available.

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- A TonKeeper wallet with access to the TON TestNet

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/ton-wallet-app.git
   cd ton-wallet-app

##  Environment Variables
    ```NEXT_PUBLIC_DOMAIN=http://localhost:3001
    
