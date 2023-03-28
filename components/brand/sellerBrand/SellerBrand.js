import Title from "@/components/title/Title";
import Image from "next/image";
import image44 from '../../../public/Img/expertsImg/image44.png';
import image45 from '../../../public/Img/expertsImg/image45.png';
import image46 from '../../../public/Img/expertsImg/image46.png';
import image47 from '../../../public/Img/expertsImg/image47.png';
const SellerBrand = () => {
    return (
        <section>
            <div className="">
                <Title
                    data="SELLER BRAND"
                    mt={"pt-[104px]"}
                    mb={"pb-[81px]"}
                />
                <div className="mb-[133px]">
                    <div className="flex gap-[42px] overflow-hidden -ml-20">
                        <Image className="h-[133px] w-[322px]" src={image44} alt="image" />
                        <Image className="h-[133px] w-[322px]" src={image45} alt="image" />
                        <Image className="h-[133px] w-[322px]" src={image46} alt="image" />
                        <Image className="h-[133px] w-[322px]" src={image47} alt="image" />
                        <Image className="h-[133px] w-[322px]" src={image44} alt="image" />
                        <Image className="h-[133px] w-[322px]" src={image45} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellerBrand;