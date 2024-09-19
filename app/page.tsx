'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Header from "./Components/Header";
import { FlagIcon } from '@heroicons/react/24/outline';
import Sidebar from "./Components/SideBar";

export default function Home() {
  // const [data, setData] = useState<string | null>(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Replace 'demo' with your actual API key
  //   const url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=demo';

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, {
  //         headers: { 'User-Agent': 'Mozilla/5.0' }, // Optional: headers
  //       });

  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       setData(JSON.stringify(result, null, 2)); // Stringify the data here
  //     } catch (error) {
  //       setError((error as any).message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // console.log(data);
  return (
    <main className="w-full h-full border-t-2 flex flex-row">
      <div className='w-[46vh]'>
        <Sidebar></Sidebar>
      </div>
      <div>
        {/* <div className='w-full h-20 border-b-2'>
          <h1 className='mx-4 text-6xl'>Dashboard</h1>
        </div> */}
      </div>
    </main>
  );
}
