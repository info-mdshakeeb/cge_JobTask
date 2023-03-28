import Image from "next/image";
import image1 from "../../public/Img/BrandImage/1.png";
import Ipollo from "../../public/Img/BrandImage/image31.png";
import rightArrow from "../../public/Img/heroImage/Icon/vector-1.svg";
import leftArrow from "../../public/Img/heroImage/Icon/vector.svg";
import image36 from "../../public/Img/heroImage/image36.png";
import image37 from "../../public/Img/heroImage/image37.png";
import image38 from "../../public/Img/heroImage/image38.png";
import image39 from "../../public/Img/heroImage/image39.png";
import Button from "../button/Button";
import Title from "../title/Title";

const productData = [
    {
        img: image1,
        imageDetails: { width: 173, height: 140 },
        title: "Bitmain",
        active: true,
    },
    {
        img: Ipollo,
        imageDetails: { width: 107, height: 137 },
        title: "Ipollo",
        active: false,
    },
    {
        img: Ipollo,
        imageDetails: { width: 107, height: 137 },
        title: "Goldshell",
        active: false,
    },
    {
        img: Ipollo,
        imageDetails: { width: 107, height: 137 },
        title: "Goldshell",
        active: false,
    },
    {
        img: Ipollo,
        imageDetails: { width: 107, height: 137 },
        title: "ibeLink",
        active: false,
    },
    {
        img: Ipollo,
        imageDetails: { width: 107, height: 137 },
        title: "Innosilicon",
        active: false,
    },

];
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
        img: image39,
        title: "Bitmain Antminer D9 1.77Th/s Dash Miner",
        price: "$ 4.0000.00",
        active: false
    }

]

function Brand() {
    return (
        <div className=" mx-60 mb-[76px]">
            <Title
                data={"SHOP BY BRAND"}
                mt={"mt-[70px]"}
                mb={"pb-[50px]"}
            />
            <div className="flex items-center gap-8">
                <div className="border border-black rounded-full h-16 w-16 flex items-center justify-center">
                    <Image src={rightArrow} className="h-[21px] w-[11px]" alt="image" />
                </div>
                <div className="grid grid-cols-6 gap-[15px]">
                    {productData.map((item, index) => (
                        <div key={index} className="bg-gradient-to-tr from-[#F45D02] to-[#FFD33F]  p-[2px] rounded-[21px]">
                            <div className={`w-[190px] h-[217px] ${item?.active ? "bg-[#FFD33F]" : "bg-white"} rounded-[21px] border mx-auto `}>
                                <Image src={item?.img} height={item?.imageDetails?.height} width={item?.imageDetails?.width} className={`${item.active ? "pt-[29px] pl-[11px]" : "mt-[29px] ml-[40px]"} `} alt={item?.title} />
                                <p className={`${item.active ? "text-white" : undefined} text-center mt-[7px]`}>{item?.title}</p>
                            </div>
                        </div>)
                    )}
                </div>
                <div className="border border-black rounded-full h-16 w-16 flex items-center justify-center">
                    <Image className="h-[21px] w-[11px]" src={leftArrow} alt="image" />
                </div>
            </div>
            <div className="grid grid-cols-4 mt-[50px] mb-[57px] gap-[17px]  mx-[95px]">
                {brandData.map((data, i) =>
                    <div className={`${data?.active ? "bg-gradient-to-tr from-[#F45D02] to-[#FFD33F]" : undefined}  h-[392px] w-[302px] p-[2px] rounded-[21px]`} key={i}>
                        <div className="bg-[#F4F8FB] rounded-[21px]  h-[387px] w-[297px] p-[2px]" >
                            <div className="mx-[19px]">
                                <Image src={data.img} className="mt-[24px]  " alt="image" />
                                <p className="mt-3">
                                    Bitmain Antminer D9 1.77Th/s Dash Miner
                                </p>
                                <button className={`w-[260px] border border-[#FFD33F] h-[44px] rounded-[100px] mt-[10px] ${data?.active ? "bg-[#FFD33F]" : undefined}`}>
                                    <span className=" lowercase w-[137px] ">{data?.price}</span>
                                </button>
                            </div>
                        </div>

                    </div>
                )
                }

            </div>
            <div className=" flex  justify-center">
                <Button
                    text={"View All Products"}
                />
            </div>
        </div>
    );
}
export default Brand;