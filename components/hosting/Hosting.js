import Image from "next/image";
import image48 from "../../public/Img/expertsImg/image48.png";
import Title from "../title/Title";

const Hosting = () => {
    return (
        <section className="min-h-[895px] bg-[#F4F8FB]">
            <div className="2xl:mx-60 md:mx-10 mx-4">
                <Title
                    data="HOSTING PARTNER"
                    mt={"pt-[90px]"}
                    mb={"pb-[104px]"}
                />
                <div className="flex gap-[75px]">
                    <div className="w-1/2">
                        <Image className="h-[550px] w-[716px]" src={image48} alt="image" />
                    </div>
                    <div className="w-1/2">
                        <div className="w-[649px]">
                            <p className="text-[96px] leading-[114px] font-bold text-[#102542]pb-[42px]">
                                <span className="text-[#F45D02]">CRYPTO</span>  GURU DEALS</p>
                            <p className="w-[649px] text-[20px] leading-[30px] pt-[42px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hosting;