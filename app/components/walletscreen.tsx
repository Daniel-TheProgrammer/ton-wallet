"use client"

import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

export default function WalletScreen() {
  const wallet = useTonWallet();
  const [balance, setBalance] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (wallet) {
      setBalance("10.5 TON"); //Mock Balance

      if (wallet.account && typeof wallet.account.address === "string") {
        setWalletAddress(wallet.account.address);
      }
    }
  }, [wallet]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-2xl font-bold text-black">TON Wallet</h1>
      </header>
      <div className="mt-8">
        <TonConnectButton />
      </div>
      {wallet && (
        <div className="mt-4 text-center">
          <p className="text-lg">Balance: {balance}</p>
          <p className="text-sm text-gray-500">
            Wallet Address: {walletAddress || "No address available"}
          </p>
        </div>
      )}
    </div>
  );
}
