import Image from "next/image";
import image1 from "../../public/Img/BrandImage/1.png";
import Ipollo from "../../public/Img/BrandImage/image31.png";
import rightArrow from "../../public/Img/heroImage/Icon/vector-1.svg";
import leftArrow from "../../public/Img/heroImage/Icon/vector.svg";
import Button from "../button/Button";
import Title from "../title/Title";

const cardData = [
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
                    {cardData.map((item, index) => (
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
            <div className="grid grid-cols-4 mt-[50px] mb-[57px] ">
                <div className="h-[387px] w-[297px] bg-[#F4F8FB]">

                </div>
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