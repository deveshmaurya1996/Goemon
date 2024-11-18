import { ethers } from "ethers";
import { useState } from "react";

export const useWallet = () => {
  const [wallet, setWallet] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await signer.getBalance();
      setWallet(address);
      setBalance(ethers.utils.formatEther(balance));
    }
  };

  return { wallet, balance, connectWallet };
};
