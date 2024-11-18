import WalletConnector from "@/components/WalletConnector";
import OrderBook from "@/components/OrderBook";
import SwapForm from "@/components/SwapForm";
import { useState } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-600 text-white">
        <h1>DEX Interface</h1>
      </header>
      <main className="p-4">
        <WalletConnector onConnect={setWalletAddress} />
        {walletAddress && (
          <>
            <OrderBook socketUrl="wss://example.com/order-book" />
            <SwapForm />
          </>
        )}
      </main>
    </div>
  );
}
