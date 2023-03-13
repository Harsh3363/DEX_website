import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { FaArrowDown } from 'react-icons/fa'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../assets/eth.png'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chart from  "../components/Chart"
import Carousel from "../components/Carousel"
import Header from '../components/SideNavbar'


const style = {
  outerWrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
  wrapper_body: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between `,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
  arrow: `m-7	`
}


const main = () => {
  return (
    <div className={style.outerWrapper}>
      <Header />
      <div className={style.wrapper}>
        <Navbar />
        <div className={style.wrapper_body}>
          <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
            <Carousel />
            <Chart/>

          </div>
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default main;
