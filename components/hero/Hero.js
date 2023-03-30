import Image from "next/image";
import HeroImg4 from "../../public/Img/heroImage/Ellipse4.png";
import HeroImg5 from "../../public/Img/heroImage/Ellipse5.png";
import HeroImg6 from "../../public/Img/heroImage/Ellipse6.png";
import frame from "../../public/Img/heroImage/Frame.png";
import Button from "../button/Button";

function Hero() {
    return (
        <>
            <section className="min-h-[845px] bg-[#F4F8FB]  shadow-sm border-b">
                <div className="2xl:mx-60 md:mx-10 mx-4 md:flex">
                    <div className="md:w-1/2">
                        <div className="xl:h-[326px] pt-3 xl:pt-[135px] text-[#102542]">
                            <p className=" font-bold text-6xl xl:text-[100px] leading-[118px]">Start<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD33F] to-[#F45D02]">Mining</span> Today!</p>
                        </div>
                        <div className="md:h-[109px] w-[571px] font-[20px] leading-[29px] text-[#102542] lg:mt-20">
                            <p className="">  Operated by a team of professionals with an experience <br /> into Blockchain Management, E-Commerce and <br /> Cryptocurrency Mining.</p>
                        </div>
                        <div className="mt-12">
                            <Button text={"Buy Miners"} />
                        </div>
                    </div>
                    <div className="md:w-1/2 relative bg-opacity-10  mt-[31px]">
                        <div className="pb-10 md:pb-0">
                            <Image className="xl:h-[686px]  xl:w-[686px] " src={HeroImg6} alt="HeroImage"
                            ></Image>
                            <Image className="absolute top-5 md:top-2 xl:top-10  2xl:top-12 md:left-12 xl:h-[586px] xl:w-[586px]" src={HeroImg5} alt="Hero Image2"
                            ></Image>
                            <Image className="absolute top-5 md:top:12 xl:top-24 md:left-24  xl:h-[486px] xl:w-[486px]" src={HeroImg4} alt="Hero Image3"
                            ></Image>
                            <Image className="absolute -top-20 md:top-[10px] left-[-25px] " src={frame} height={334} width={589} alt="Hero Image4"
                            ></Image>
                        </div>
                    </div>
                </div>

            </section>
            <hr className="bg-slate-200" />
        </>

    );
}

export default Hero;