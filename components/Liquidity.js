import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../assets/eth.png'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import {AiFillQuestionCircle} from 'react-icons/ai'
import { RxMixerHorizontal } from 'react-icons/rx'
import Trade from '../pages/Trade'
import Footer from '../components/Footer'

const style = {
    wrapper_body: `w-screen flex items-center justify-center mt-14 mb-10 `,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#2172E5] hover:bg-[#3b82f6] w-2/5 my-2 rounded-2xl py-4 px-8 text-xl font-semibold flex items-center justify-left cursor-pointer border border-[#2172E5] hover:border-[#3b82f6]`,
}


const Liquidity = () => {
    return (
        <div className={style.wrapper}>
            <Trade />
            <div className={style.wrapper_body}>
                <div className={style.content}>

                    <div className={style.formHeader}>
                        <div className='text-sky-500'>Liquidity
                            <p className='text-white text-sm'>Add liquidity to receive LP tokens</p>
                        </div>
                        <div>
                            {/* <a><BsArrowCounterclockwise /></a> */}
                            <a><RxMixerHorizontal /></a>
                        </div>

                    </div>

                    <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
                       Add Liquidity
                    </div>
                    <div className='border-b mt-8'>
                    </div>
                        <p className='text-white m-5'>Your Liquidity</p>
                        <div className='m-20 text-[#475569] '>Connect to a wallet to view your liquidity.</div>
                        <p className='text-white m-5'>Don't see a pool you joined? 
                        <a className='text-sky-500'> Import it.</a>
                        </p>
                        <p className='text-white m-5'>Or, if you staked your LP tokens in a farm, unstake them to see them here.</p>
                       
                        
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Liquidity;
