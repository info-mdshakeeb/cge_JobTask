import Image from "next/image";
import CartImg1 from "../../public/Img/blog/image58.png";
import CartImg2 from "../../public/Img/blog/image59.png";
import CartImg3 from "../../public/Img/blog/image60.png";
import Button from "../button/Button";
import Title from "../title/Title";

const Blog = () => {
    return (
        <section className="2xl:mx-60 md:mx-10 mx-4 ">
            <div className="">
                <Title
                    data={"FROM OUR BLOG"}
                    mt={"pt-[90px]"}
                    mb={"pb-[78px]"}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px] 2xl:gap-[20px]">
                <div className=" border-2 hover:border-[#FFD33F] shadow-sm cursor-pointer  rounded-[21px]">
                    <div className="mt-[36px] px-[29px] ">
                        <Image src={CartImg1} alt="img" className="w-full " />
                        <div className="mt-[25px] mb-[15px]">
                            <p className="text-[15px] font-[400] text-[#808682]">February 9, 2021</p>
                        </div>
                        <div className="max-w-[400px]  text-[20px] text-[#180D5B] mb-[15px]">
                            <p>Top Cryptocurrency Mining Hardware In 2021</p>
                        </div>
                        <div className="mb-[19px] text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        </div>
                        <div className="w-full pb-[27px]">
                            <button className="btn bg-white border-2 border-[#FFD33F] hover:bg-[#FFD33F] hover:border-none  rounded-[100px] w-full text-black "> Read More</button>
                        </div>
                    </div>
                </div>
                <div className=" border-2 hover:border-[#FFD33F] shadow-sm cursor-pointer rounded-[21px]">
                    <div className="mt-[36px] px-[29px] ">
                        <Image src={CartImg2} alt="img" className="w-full " />
                        <div className="mt-[25px] mb-[15px]">
                            <p className="text-[15px] font-[400] text-[#808682]">February 9, 2021</p>
                        </div>
                        <div className="max-w-[400px]  text-[20px] text-[#180D5B] mb-[15px]">
                            <p>Top Cryptocurrency Mining Hardware In 2021</p>
                        </div>
                        <div className="mb-[19px] text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        </div>
                        <div className="w-full pb-[27px]">
                            <button className="btn bg-white border-2 border-[#FFD33F] hover:bg-[#FFD33F] hover:border-none  rounded-[100px] w-full text-black "> Read More</button>
                        </div>
                    </div>
                </div>
                <div className="2xl:h-[550px]  border-2 hover:border-[#FFD33F] shadow-sm  rounded-[21px]">
                    <div className="mt-[36px] px-[29px] ">
                        <Image src={CartImg3} alt="img" className="w-full " />
                        <div className="mt-[25px] mb-[15px]">
                            <p className="text-[15px] font-[400] text-[#808682]">February 9, 2021</p>
                        </div>
                        <div className="max-w-[400px] text-[20px] text-[#180D5B] mb-[15px]">
                            <p>Top Cryptocurrency Mining Hardware In 2021</p>
                        </div>
                        <div className="mb-[19px] text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        </div>
                        <div className="w-full pb-[27px]">
                            <button className="btn bg-white border-2 border-[#FFD33F] hover:bg-[#FFD33F] hover:border-none  rounded-[100px] w-full text-black after:hover: "> Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-[111px] mt-[78px]">
                <Button
                    text={"View All Products"}
                />
            </div>
        </section>
    );
};

export default Blog;