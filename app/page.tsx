

import Link from "next/link"
import WalletScreen from "./components/walletscreen";

export default function Home() {
  return (
    <div>
      <div className="p-4 text-center">
        <Link href="/transaction">
          <span className="text-blue-500">Go to Transaction</span>
        </Link>
      </div>
      <WalletScreen />
    </div>
  );
}
