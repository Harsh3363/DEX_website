
import { IoInformationCircleSharp } from 'react-icons/io5'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/SideNavbar";

const style = {
    outerWrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
    wrapper_body: `w-screen flex items-center justify-center mt-18 mb-15`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4 pl-10 mb-10`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-l  border border-[#20242A] hover:border-[#41444F] w-82 flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] placeholder:text-text-sm outline-none  w-80 text-l`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
    arrow: `m-7	`,
};

const main = () => {
    return (
        <div className={style.outerWrapper}>
            <Header />
            <div className={style.wrapper}>
                <Navbar />
                <div className={style.wrapper_body}>
                    <div className={style.content}>
                        <div className={style.formHeader}>
                            <div className="text-sky-500">
                                Create Presale

                            </div>
                            <div title="Fee's 200000 Brise">
                                <IoInformationCircleSharp />
                            </div>
                        </div>

                       

                        <div
                            onClick={(e) => handleSubmit(e)}
                            className={style.confirmButton}
                        >
                            Submit
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default main;
