import { useState } from "react";

const SwapForm = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setInputAmount(amount);
    setOutputAmount((parseFloat(amount) * 0.95).toFixed(2)); // Mock conversion rate
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold">Token Swap</h3>
      <div className="my-4">
        <input
          type="text"
          value={inputAmount}
          onChange={handleInputChange}
          placeholder="Enter amount"
          className="border p-2 w-full"
        />
      </div>
      <div>
        <span>Output Amount: {outputAmount}</span>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Swap
      </button>
    </div>
  );
};

export default SwapForm;
