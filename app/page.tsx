'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Header from "./Components/Header";
import { FlagIcon } from '@heroicons/react/24/outline';
import Sidebar from "./Components/SideBar";
import pic from '@/public/images/bitcoin.png'

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
      <div className='w-[56vh] mr-16'>
        <Sidebar></Sidebar>
      </div>
      <div className='border-2 w-4/5 m-3 p-4'>
        <h1 className='text-2xl font-bold mb-2'>Stock Market Value</h1>
        <div className='flex flex-row justify-between text-lg'>
          {/* <Image src={pic} alt='logo' width={1400} height={1400} className='w-10 h-10 my-1 mr-2'></Image> */}
          <div className='flex flex-row'>
            <h1 className='font-bold mr-2'>BTC</h1>
            <h1>Bitcoin</h1>
          </div>
          <div className='justify-end'>
            <h1 className='text-4xl font-bold'><span className='opacity-70 font-normal'>$</span>62,000</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
