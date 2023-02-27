import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import {BsArrowCounterclockwise} from 'react-icons/bs'
import {FaArrowDown} from 'react-icons/fa'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../assets/eth.png'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const style = {
    wrapper_body: `w-screen flex items-center justify-center mt-18 mb-10 `,
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


const main  = () => {
return (
    
    <div className={style.wrapper}>
        <Navbar/>
    <div className={style.wrapper_body}>
        
    <div className={style.content}>
    <div className={style.formHeader}>
        
        <div className='text-sky-500'>Bridge
        <p className='text-white text-sm'>Bridge tokens in an instant</p>
        </div>
        <div><BsArrowCounterclockwise/></div>
    </div>
    
    <div className={style.transferPropContainer}>
        {/* <p className='text-sm'>From</p> */}
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e => handleChange(e, 'amount')}
          />
    <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={ethLogo} alt='eth logo' height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div className={style.arrow}><FaArrowDown/></div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e => handleChange(e, 'amount')}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
          Enter
        </div>
        <div className='text-white'>Note
        <p className='text-white text-xs'>Fee: 0.05%</p>
        <p className='text-white text-xs'>Minimum amount: 10000000 BRISE </p>
        <p className='text-white text-xs'>Maximum amount: 500000000 BRISE</p>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
)
}

export default  main;

// ,
//     {
//       "title": "Super item number six",
//       "link": "https://twitter.com/kendalmintcode",
//       "imageUrl": "https://placeimg.com/300/300/tech"
//     },
//     {
//       "title": "Super item number seven",
//       "link": "https://twitter.com/kendalmintcode",
//       "imageUrl": "https://placeimg.com/300/300/animals"
//     },
//     {
//       "title": "Super item number eight",
//       "link": "https://twitter.com/kendalmintcode",
//       "imageUrl": "https://placeimg.com/300/300/people"
//     },
//     {
//       "title": "Super item number the last",
//       "link": "https://twitter.com/kendalmintcode",
//       "imageUrl": "https://placeimg.com/300/300/tech"
//     }