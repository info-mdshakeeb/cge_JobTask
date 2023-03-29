'use client';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import rightArrow from "../../public/Img/heroImage/Icon/vector-1.svg";
import leftArrow from "../../public/Img/heroImage/Icon/vector.svg";
import image36 from "../../public/Img/heroImage/image36.png";
import image37 from "../../public/Img/heroImage/image37.png";
import image38 from "../../public/Img/heroImage/image38.png";
import image39 from "../../public/Img/heroImage/image39.png";
import "../brand/style.css";
import Button from "../button/Button";
import Title from "../title/Title";

const brandData = [
    {
        img: image36,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "View Product",
        active: true,
    },
    {
        img: image37,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "$ 4.0000.00",
        active: false
    },
    {
        img: image38,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "$ 4.0000.00",
        active: false
    },
    {
        img: image38,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "$ 4.0000.00",
        active: false
    },
    {
        img: image38,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "$ 4.0000.00",
        active: false
    },
    {
        img: image39,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "$ 4.0000.00",
        active: false
    }
]

function Miners() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <Image src={leftArrow} className=" " alt="image" />,
        prevArrow: <Image src={rightArrow} className="" alt="image" />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="min-h-[820px] bg-[#F4F8FB]">
            <div className="2xl:mx-60 md:mx-10 mx-4">
                <div className="">
                    <Title
                        data="MORE PROFITABLE MINERS"
                        mt="pt-[91px]"
                        mb="pb-[70px]"
                    />
                </div>
                <div className="">
                    <div className="">
                        <div className="w-full">
                            <Slider {...settings}>
                                {brandData.map((data, i) =>
                                    <div className={`${data?.active ? "bg-gradient-to-tr from-[#F45D02] to-[#FFD33F]" : "border"}  max-h-[392px] max-w-[302px] p-[2px] rounded-[21px]`} key={i}>
                                        <div className="bg-white rounded-[21px]  h-[387px] w-[297px] p-[2px]" >
                                            <div className="mx-[19px]">
                                                <Image src={data.img} className="mt-[24px]" alt="image" />
                                                <p className="mt-3">
                                                    Bitmain Antminer D9 1.77Th/s Dash Miner
                                                </p>
                                                <button className={`w-[260px]  border-[#FFD33F] border-2 h-[44px] rounded-[100px] mt-[10px] ${data?.active ? "bg-[#FFD33F]" : undefined}`}>
                                                    <span className=" lowercase w-[137px] ">{data?.price}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-[85px] pt-[56px]">
                    <Button
                        text="VIEW ALL PRODUCT"
                    />
                </div>
            </div>
        </section>
    );
}

export default Miners;