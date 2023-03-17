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
                <div className={style.wrapper_body}>
                    <div className={style.content}>
                        <div className={style.formHeader}>
                            <div className="text-sky-500">
                                Lock Your Token
                            </div>

                        </div>

                        <div className={style.transferPropContainer}>

                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Token or LP Token address"
                            />

                        </div>
                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Token Name"
                            />
                        </div>

                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Token Symbol"
                            />
                        </div>
                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Token Decimal"
                            />

                        </div>

                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">use LP token?</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">use another owner?</label>
                        </div>


                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Owner Address"
                            />

                        </div>

                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Lock Title"
                            />

                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">use vesting?</label>
                        </div>
                        <div className='bg-[#20242A] my-3 rounded-2xl p-3 text-l  border border-[#20242A] hover:border-[#41444F] w-82 flex justify-between'>
                            <div class="flex items-center justify-center">
                                <div
                                    class="relative mb-3 xl:w-96"
                                    data-te-datepicker-init
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Select a date" />
                                    <label
                                        for="floatingInput"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Select a date</label
                                    >
                                    <button
                                        data-te-datepicker-toggle-ref
                                        data-te-datepicker-toggle-button-ref
                                        class="justify-content-center absolute right-2.5 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center border-none bg-transparent outline-none hover:text-primary focus:text-primary dark:text-neutral-200 dark:hover:text-primary-400 dark:focus:text-primary-400 [&>svg]:h-5 [&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="Amount"
                            />

                        </div>

                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        <div
                            onClick={(e) => handleSubmit(e)}
                            className={style.confirmButton}
                        >
                            Approve
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default main;
