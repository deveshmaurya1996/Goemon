import { ethers } from "ethers";
import { useState } from "react";

const WalletConnector = ({
  onConnect,
}: {
  onConnect: (address: string) => void;
}) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const address = accounts[0];
      setWalletAddress(address);
      onConnect(address);
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <div className="p-4">
      {walletAddress ? (
        <div>Connected: {walletAddress}</div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnector;
