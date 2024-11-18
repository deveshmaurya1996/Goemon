import { useEffect, useState } from "react";

interface Order {
  price: number;
  quantity: number;
}

const OrderBook = ({ socketUrl }: { socketUrl: string }) => {
  const [orderBook, setOrderBook] = useState<{ bids: Order[]; asks: Order[] }>({
    bids: [],
    asks: [],
  });

  useEffect(() => {
    const ws = new WebSocket(socketUrl);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOrderBook(data);
    };

    return () => ws.close();
  }, [socketUrl]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold">Order Book</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4>Bids</h4>
          {orderBook.bids.map((bid, idx) => (
            <div
              key={idx}
            >{`Price: ${bid.price}, Quantity: ${bid.quantity}`}</div>
          ))}
        </div>
        <div>
          <h4>Asks</h4>
          {orderBook.asks.map((ask, idx) => (
            <div
              key={idx}
            >{`Price: ${ask.price}, Quantity: ${ask.quantity}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
