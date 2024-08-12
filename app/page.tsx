'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Header from "./Components/Header";

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'demo' with your actual API key
    const url = 'https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=5min&apikey=demo';

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0' }, // Optional: headers
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setData(JSON.stringify(result, null, 2)); // Stringify the data here
      } catch (error) {
        setError((error as any).message);
      }
    };

    fetchData();
  }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  console.log(data);
  return (
    <main className="w-full h-full">
      <Header></Header>
      
    </main>
  );
}
