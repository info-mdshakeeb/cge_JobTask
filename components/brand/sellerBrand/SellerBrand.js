import Title from "@/components/title/Title";
import Image from "next/image";
import LinK from "next/link";
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
                        <LinK href="#">

                            <Image className="lg:h-[133px] lg:w-[322px] w-full h-full" src={image44} alt="image" />
                        </LinK>
                        <LinK href="#">

                            <Image className="lg:h-[133px] lg:w-[322px]" src={image45} alt="image" />
                        </LinK>
                        <LinK href="#">

                            <Image className="lg:h-[133px] lg:w-[322px] w-full h-full" src={image46} alt="image" />
                        </LinK>
                        <LinK href="#">

                            <Image className="lg:h-[133px] lg:w-[322px] w-full h-full" src={image47} alt="image" />
                        </LinK>
                        <LinK href="#">

                            <Image className="lg:h-[133px] lg:w-[322px] w-full h-full" src={image44} alt="image" />
                        </LinK>
                        <LinK href="#">
                            <Image className="lg:h-[133px] lg:w-[322px] w-full h-full" src={image45} alt="image" />
                        </LinK>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellerBrand;