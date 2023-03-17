import { useState } from "react";
import { IoInformationCircleSharp } from 'react-icons/io5'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/SideNavbar";

const style = {
    outerWrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-black select-none flex flex-col justify-between`,
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
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };
    return (
        <div className={style.outerWrapper}>
            <div className="text-white">
            <Header />
                </ div>
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

                        <div className={style.wrapper}>
                            <div className="bg-grey p-2 rounded-lg shadow-md w-full lg:max-w-xl">
                                {/* <h2 className="text-lg font-medium mb-4">Step {step} of 5</h2> */}
                                <div className="flex mb-4 ">
                                    <div
                                        className={`w-1/2 border-r border-gray-400 ${step === 1 ? "bg-blue-500 text-black" : "bg-gray-200"
                                            } p-2 text-center cursor-pointer`}
                                        onClick={() => setStep(1)}
                                    >
                                        Token Address

                                    </div>
                                    <div
                                        className={`w-1/2 ${step === 2 ? "bg-blue-500 text-black" : "bg-gray-200"
                                            } p-2 text-center cursor-pointer`}
                                        onClick={() => setStep(2)}
                                    >
                                        Launchpad Info
                                    </div>
                                    <div
                                        className={`w-1/2 ${step === 3 ? "bg-blue-500 text-black" : "bg-gray-200"
                                            } p-2 text-center cursor-pointer`}
                                        onClick={() => setStep(3)}
                                    >
                                        BitgertSwap Info
                                    </div>
                                    <div
                                        className={`w-1/2 ${step === 4 ? "bg-blue-500 text-black" : "bg-gray-200"
                                            } p-2 text-center cursor-pointer`}
                                        onClick={() => setStep(4)}
                                    >
                                        Additional Information
                                    </div>
                                    <div
                                        className={`w-1/2 ${step === 5 ? "bg-blue-500 text-black" : "bg-gray-200"
                                            } p-2 text-center cursor-pointer`}
                                        onClick={() => setStep(5)}
                                    >
                                        Timing
                                    </div>
                                </div>
                                
                                {step === 1 ? <Step1 /> :
                                step === 2 ? <Step2 />:
                                step === 3 ? <Step3 />:
                                step === 4 ? <Step4 />:
                                 <Step5 />}
                                <div className="flex justify-between mt-6">
                                    {step > 1 && (
                                        <button
                                            className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                                            onClick={handleBack}
                                        >
                                            Back
                                        </button>
                                    )}
                                    {step < 5 && (
                                        <button
                                            className="bg-blue-500 px-6 py-1.5 rounded-lg text-black hover:bg-blue-600"
                                            onClick={handleNext}
                                        >
                                            Next
                                        </button>
                                    )}
                                    
                                    {step == 5 && (
                                        <button
                                            className="bg-blue-500 px-6 py-1.5 rounded-lg text-black hover:bg-blue-600"
                                            onClick={handleNext}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* <div
                            onClick={(e) => handleSubmit(e)}
                            className={style.confirmButton}
                        >
                            Submit
                        </div> */}

                    </div>
                </div>
                <div className="text-white">

                <Footer />
                </div>
            </div>
        </div>
    );
};

const Step1 = () => (
    <div>
        {/* <h3 className="text-lg font-medium mb-4">Step 1</h3> */}
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="Token Address">
                Token Address
            </label>
            <input
                type="text"
                id="Token Address"
                name="Token Address"
                className="w-full border border-gray-400 p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="Token Name">
                Token Name
            </label>
            <input
                type="text"
                id="Token Name"
                name="Token Name"
                className="w-full border border-gray-400 p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="Token Email">
                Token Email
            </label>
            <input
                type="email"
                id="Token Email"
                name="Token Email"
                className="w-full border border-gray-400 p-2"
            />
        </div>
        <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700" htmlFor="Token Decimal">
                Token Decimal
            </label>
            <input
                type="email"
                id="Token Decimal"
                name="Token Decimal"
                className="w-full border border-gray-400 p-2"
            />
        </div>
    </div>
);

const Step2 = () => (
    <div>
        {/* <h3 className="text-lg font-medium mb-4">Step 2</h3> */}
        <div className="mb-4">
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Soft Cap*(BRISE)
            </label>
            <input
                type="text"
                id="password"
                name="password"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Hard Cap*(BRISE)
            </label>
            <input
                type="text"
                id="password"
                name="password"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Soft Cap*(BRISE)
            </label>
            <input
                type="text"
                id="password"
                name="password"
                className="w-full border border-gray-400 p-2"
            />
        </div>
    </div>
);
const Step3 = () => (
    <div>
        {/* <h3 className="text-lg font-medium mb-4">Step 2</h3> */}
        <div className="mb-4">
            <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="password"
            >
                Enter the percentage of raised funds that should be allocated to Liquidity on BitgertSwap (Min 0%, Max 100%, We recommend less  70%)

            </label>
            <input
                type="text"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="password"
            >
                Enter the BitgertSwap listing price: (If I buy 1 BRISE worth on Swap how many tokens do I get? Usually this amount is lower than presale rate to allow for a higher listing price on Swap)


            </label>
            <input
                type="text"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            %
        </div>
    </div>
);
const Step4 = () => (
    <div>
        {/* <h3 className="text-lg font-medium mb-4">Step 2</h3> */}
        <div className="mb-4">
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Logo Link
            </label>
            <input
                type="text"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Web Link
            </label>
            <input
                type="text"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Github Link
            </label>
            <input
                type="text"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Twitter Link
            </label>
            <input
                type="text"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            
        </div>
    </div>
);
const Step5 = () => (
    <div>
        {/* <h3 className="text-lg font-medium mb-4">Step 2</h3> */}
        <div className="mb-4">
        <label
                className="block font-medium mb-2 text-gray-700"
               
            >
               Tier 1 Start Time

            </label>
            <input
                type="date"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Tier 2 Start Time
            </label>
            <input
                type="date"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
               Public Start Time
            </label>
            <input
                type="date"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            <label
                className="block font-medium mb-2 text-gray-700"
               
            >
                Presale End Time
            </label>
            <input
                type="date"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            />
            {/* <label
                className="block font-medium mb-2 text-gray-700"
               
            >
               Liquidity Lock Time
            </label>
            <input
                type="date"
                id="text"
                name="text"
                className="w-full border border-gray-400 p-2"
            /> */}
            
        </div>
    </div>
);

export default main;
