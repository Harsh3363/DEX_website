import { RiSettings3Fill } from "react-icons/ri";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoInformationCircleSharp } from 'react-icons/io5'
import { FaArrowDown } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
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
                <div class="flex justify-left ml-10">
                    <div
                        class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Card title
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button
                            type="button"
                            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            View Pool
                        </button>
                    </div>
                </div>
                <div class="flex justify-left m-10">
                    <div
                        class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Card title
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <button
                            type="button"
                            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            View Pool
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default main;
