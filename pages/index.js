import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Swap from "../components/Swap"
import Bridge from "../components/Bridge"
import Wallet from "../components/Wallet"
import { Routes, Route } from "react-router-dom";
import Liquidity from '../components/Liquidity'
import Reward from '../components/Reward'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home()  {
  // return (
  //   <div className={style.wrapper}>
  //     <Routes>
  //       <Route exact path="/" element={<Main />} />
  //       <Route exact path="/Bridge" element={<Bridge />} />
  //     </Routes>
  //   </div>
  // );

  return (
    <div className={style.wrapper}>
   
      {/* <Wallet/> */}
      {/* <Bridge/> */}
      <Swap/>
      {/* <Reward/> */}
      {/* <Liquidity/> */}
    </div>
  )
}

