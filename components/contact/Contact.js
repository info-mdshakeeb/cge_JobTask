import Image from "next/image";
import imageBG from "../../public/Img/BrandImage/contact_BG.png";
import ChatImg from "../../public/Img/contact_us/chat-bubble-empty.png";
import ChatImgAr from "../../public/Img/contact_us/headset-help.png";
import EmailImg from "../../public/Img/contact_us/mail-opened.png";
import CallImg from "../../public/Img/contact_us/phone.png";
import Title from "../title/Title";

const Contact = () => {
    return (
        <section className="bg-[#F4F8FB] 2xl:h-[919px] border-bs">
            <div className=" 2xl:mx-60 md:mx-10 mx-4">
                <div className="">
                    <Title
                        data={"GET IN TOUCH WITH US"}
                        mt={"pt-[90px]"}
                        mb={"pb-[90px]"}
                    />
                </div>
                <div className="lg:flex">
                    <div className="lg:w-1/2  ">
                        <div className="relative w-full flex justify-center lg:justify-start">
                            <Image className="absolute -top-28 -left-28" src={imageBG} alt="oma" />
                            <div className="xl:w-[630px] h-[559px] bg-white absolute top-0 rounded-[20px] shadow-sm px-10 lg:px-[50px] py-[44px]">
                                <p className=" mb-[20px] text-2xl xl:w-[530px] leading-[28px] font-[500]">
                                    Tell us about your inquiry and we’ll get back to you shortly.
                                </p>
                                <div className="pb-[30px]">
                                    <p>Complete Name <span className="text-red-500 ">*</span></p>
                                    <input type="text" placeholder="Complete Name " className="w-full rounded-md px-4 h-[40px] border border-[#CFD0E2] focus:outline-[#F45D02]" />
                                </div>
                                <div className="pb-[30px]">
                                    <p>Email Address<span className="text-red-500 ">*</span></p>
                                    <input placeholder="Email Address" type="text" className="w-full px-4 h-[40px] border border-[#CFD0E2] rounded-md focus:outline-[#F45D02]" />
                                </div>
                                <div className="pb-[44px]">
                                    <p>Message <span className="text-red-500 ">*</span></p>
                                    <textarea placeholder="Brief info about your inquiry." className="textarea textarea-bordered textarea-lg w-full h-[94px] px-4  focus:outline-[#F45D02]" ></textarea>

                                </div>
                                <div className="w-full">
                                    <button className="btn btn-warning w-full rounded-[100px]">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-1/2 pl-10 2xl:pl-0 mt-[600px] lg:mt-0 ">
                        <div className="">
                            <div className="flex cursor-pointer">
                                <Image className="w-[36px] h-[36px] mr-[28px]" src={EmailImg} alt="img" />
                                <div className="pb-[34px]">
                                    <p className="text-[40px] leading-[47px]">Email us</p>
                                    <p className="text-[20px] text-[400] text-[#102542] pt-1">deficoincapital@gmail.com</p>
                                </div>
                            </div>
                            <div className="border xl:w-[620px] bg-[#D9D9D9] mb-[33px]"></div>
                        </div>
                        <div className="">
                            <div className="flex cursor-pointer">
                                <Image className="w-[36px] h-[36px] mr-[28px]" src={ChatImgAr} alt="img" />
                                <div className="pb-[34px]">
                                    <p className="text-[40px] leading-[47px]">Chat with an agent</p>
                                    <p className="text-[20px] text-[400] text-[#102542] pt-1">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="border xl:w-[620px] bg-[#D9D9D9] mb-[33px]"></div>
                        </div>
                        <div className="">
                            <div className="flex cursor-pointer">
                                <Image className="w-[36px] h-[36px] mr-[28px]" src={ChatImg} alt="img" />
                                <div className="pb-[34px]">
                                    <p className="text-[40px] leading-[47px]">WhatsApp</p>
                                    <p className="text-[20px] text-[400] text-[#102542] pt-1">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="border xl:w-[620px] bg-[#D9D9D9] mb-[33px]"></div>
                        </div>
                        <div className="">
                            <div className="flex cursor-pointer">
                                <Image className="w-[36px] h-[36px] mr-[28px]" src={CallImg} alt="img" />
                                <div className="pb-[34px]">
                                    <p className="text-[40px] leading-[47px]">Call us</p>
                                    <p className="text-[20px] text-[400] text-[#102542] pt-1">+86-13530796464 </p>
                                </div>
                            </div>
                            <div className="border xl:w-[620px] bg-[#D9D9D9] mb-[33px]"></div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;