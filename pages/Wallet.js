
import { AiFillWallet } from 'react-icons/ai'
import  Navbar  from '../components/Navbar'
import Header from '../components/SideNavbar'
import Footer from '../components/Footer'

const style = {
    outerWrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
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


const main = () => {
    return (
        <div className={style.outerWrapper}>
            <Header/>
            <div className={style.wrapper}>
            <Navbar/>
        <div className={style.wrapper_body}>
            <div className={style.content}>
                <div className={style.formHeader}>

                    <div className='text-sky-500 m-3'>Wallet
                    </div>
                    <div><AiFillWallet /></div>
                </div>

                <div className={style.transferPropContainer}>
                    <div className={style.currencySelector}>
                        <div >
                            <div className={style.currencySelectorIcon}>
                                {/* <Image src={ethLogo} alt='eth logo' height={20} width={20} /> */}
                            </div>
                        </div>
                        <div className={style.currencySelectorTicker}>EVO</div>

                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <div className={style.currencySelector}>
                        <div >
                            <div className={style.currencySelectorIcon}>
                                {/* <Image src={ethLogo} alt='eth logo' height={20} width={20} /> */}
                            </div>
                        </div>
                        <div className={style.currencySelectorTicker}>WBRISE</div>

                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <div className={style.currencySelector}>
                        <div >
                            <div className={style.currencySelectorIcon}>
                                {/* <Image src={ethLogo} alt='eth logo' height={20} width={20} /> */}
                            </div>
                        </div>
                        <div className={style.currencySelectorTicker}>USDT</div>

                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <div className={style.currencySelector}>
                        <div >
                            <div className={style.currencySelectorIcon}>
                                {/* <Image src={ethLogo} alt='eth logo' height={20} width={20} /> */}
                            </div>
                        </div>
                        <div className={style.currencySelectorTicker}>SPHYNX</div>

                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <div className={style.currencySelector}>
                        <div >
                            <div className={style.currencySelectorIcon}>
                                {/* <Image src={ethLogo} alt='eth logo' height={20} width={20} /> */}
                            </div>
                        </div>
                        <div className={style.currencySelectorTicker}>YPC</div>

                    </div>
                </div>

            </div>
            </div>
            <Footer/>
        </div>
        </div>

       
    )
}

export default main;
