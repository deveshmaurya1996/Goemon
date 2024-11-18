import { useEffect, useState } from "react";

export const useOrderBook = (webSocketUrl: string) => {
  const [orderBook, setOrderBook] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(webSocketUrl);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOrderBook(data);
    };

    return () => ws.close();
  }, [webSocketUrl]);

  return { orderBook };
};
