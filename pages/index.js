import React from 'react';
import Home_page from "./home"
import Bridge from  './Bridge'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home()  {

  return(
    <div className={style.wrapper}>
      <Bridge/>
      {/* <Home_page/> */}
    </div>
  )
}

