import Image from "next/image";
import HeroImg4 from "../../public/Img/heroImage/Ellipse4.png";
import HeroImg5 from "../../public/Img/heroImage/Ellipse5.png";
import HeroImg6 from "../../public/Img/heroImage/Ellipse6.png";
import frame from "../../public/Img/heroImage/Frame.png";
import Button from "../button/Button";

function Hero() {
    return (
        <>
            <section className="min-h-[845px] bg-[#F4F8FB]  shadow-sm">
                <div className="mx-60 flex">
                    <div className="w-1/2 max-w-[676px] ">
                        <div className="h-[326px] pt-[135px] text-[#102542]">
                            <p className="font-bold text-[100px] leading-[118px]">Start <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD33F] to-[#F45D02]">Mining</span> Today!</p>
                        </div>
                        <div className="min-h-[109px] w-[571px] font-[20px] leading-[29px] text-[#102542] mt-20">
                            <p className="">  Operated by a team of professionals with an experience <br /> into Blockchain Management, E-Commerce and <br /> Cryptocurrency Mining.</p>
                        </div>
                        <div className="mt-12">
                            <Button text={"Buy Miners"} />
                        </div>
                    </div>
                    <div className="w-1/2 relative bg-opacity-10  mt-[31px]">
                        <div className="">
                            <Image className="w-auto h-auto" src={HeroImg6} height={686} width={686} alt="HeroImage"
                            ></Image>
                            <Image className="absolute top-12 left-12 " src={HeroImg5} height={586} width={586} alt="Hero Image2"
                            ></Image>
                            <Image className="absolute top-24 left-24 " src={HeroImg4} height={486} width={486} alt="Hero Image3"
                            ></Image>
                            <Image className="absolute top-[10px] left-[-25px] " src={frame} height={334} width={589} alt="Hero Image4"
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