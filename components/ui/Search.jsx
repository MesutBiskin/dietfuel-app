
import OutsideClickHandler from "react-outside-click-handler";
import Title from "components/ui/Title";
import { GiCancel } from "react-icons/gi";
import Image from 'next/image'





const Search = ({ setIsSearchModal }) => {
    return (
        <div className="fixed top-0 w-screen h-screen z-50
        after:content-[``] after:w-screen h-screen after:bg-white after:absolute top-0 after:left-0 after:opacity-60 grid place-content-center">
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className="w-full h-full grid place-content-center relative">
                    <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                        <Title addClass="text-[40px] text-center">Search</Title>
                        <input type="text"
                            placeholder="Search..."
                            className="border w-full my-10"
                        />
                        <div>
                            <ul className="mt-10" >
                                <li className="flex items-center justify-between p-1 hover:bg-primary">
                                    <div className="relative flex transition-all">
                                        <Image
                                            src="/Images/p1.png"
                                            width={100}
                                            height={100}
                                            alt="" />
                                    </div>
                                    <span className="font-bold">Less Calori Pizza </span>
                                    <span className="font-bold">$10</span>
                                </li>
                                <li className="flex items-center justify-between p-1 hover:bg-primary">
                                    <div className="relative flex transition-all">
                                        <Image
                                            src="/Images/p1.png"
                                            width={100}
                                            height={100}
                                            alt="" />
                                    </div>
                                    <span className="font-bold">1200 Calori Salad </span>
                                    <span className="font-bold">$12</span>
                                </li>
                                <li className="flex items-center justify-between p-1 hover:bg-primary">
                                    <div className="relative flex transition-all">
                                        <Image
                                            src="/Images/p1.png"
                                            width={100}
                                            height={100}
                                            alt="" />
                                    </div>
                                    <span className="font-bold">1500 Calori Chicken Salad </span>
                                    <span className="font-bold">$19</span>
                                </li>

                            </ul>
                        </div>
                        <button className="absolute top-4 right-4"
                            onClick={() => setIsSearchModal(false)}>
                            <GiCancel size={25} className=" transition-all" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default Search