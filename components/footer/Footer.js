import Image from "next/image";
import Link from "next/link";
import facebookIcon from "../../public/Img/footer_Icons/facebook.svg";
import linkedinIcon from "../../public/Img/footer_Icons/linkedin.svg";
import twitterIcon from "../../public/Img/footer_Icons/twitter.svg";
import youtubeIcon from "../../public/Img/footer_Icons/youtube.svg";
import Arrow from "../../public/Img/icons/Arrow1.svg";


const Footer = () => {
    return (
        <section className=" ">
            <div className="bg-[#F45D02] ">
                <div className="2xl:mx-60 md:mx-10 mx-4 py-10 md:h-[175px] flex 
                flex-col md:flex-row items-center  ">
                    <div className="md:w-1/2 font-bold text-2xl pt-8 md:pt-0 text-white">Sign up for our exclusive email newsletter</div>
                    <div className="md:w-1/2 pt-5 md:pt-0 w-full  ">
                        <div className="flex gap-3 md:justify-end ">
                            <input className="w-full md:w-[410px] h-12 rounded-[48px] pl-8 outline-none " type="email" placeholder="Email Address" />
                            <button className=" bg-[#FFD33F]    rounded-[100px] w-[197px] h-[48px] text-[20px] text-[#110749] flex font-bold items-center justify-center ">
                                <span className="w-[104px]"> Submit</span>
                                <div className="hidden md:block">
                                    <Image className="" src={Arrow} alt="images"></Image>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#102542] md:h-[299px] pt-12">
                <div className="2xl:mx-60 md:mx-10 mx-4 ">
                    <footer className="footer py-10  text-white ">
                        <div className="">
                            <Link href="/">
                                <p className="text-[20px] lg:text-[40px] font-bold mb-[14px]"> <span className="text-[#F45D02]">CRYPTO</span>  GURU DEALS</p>

                            </Link>
                            <div className="">
                                <p className="text-[16px] ">© 2023 Crypto Guru Deals. All rights reserved</p>
                            </div>
                            <div className="flex w-8 h-8 gap-7 md:gap-2 lg:gap-7 mt-[38px] cursor-pointer">
                                <Image src={facebookIcon} alt="img" />
                                <Image src={twitterIcon} alt="img" />
                                <Image src={linkedinIcon} alt="img" />
                                <Image src={youtubeIcon} alt="img" />
                            </div>
                        </div>
                        <div className="text-[20px]">
                            <span className="footer-title text-white">Information</span>
                            <a className="link link-hover"> My Account</a>
                            <a className="link link-hover">Affiliates Home</a>
                            <a className="link link-hover">Affiliate Login</a>
                            <a className="link link-hover">Affiliate Register</a>
                            <a className="link link-hover">Contact Us</a>
                        </div>
                        <div className="text-[20px]">
                            <span className="footer-title">Company Policy</span>
                            <a className="link link-hover"> Privacy Policy</a>
                            <a className="link link-hover">Shipping And Returns </a>
                            <a className="link link-hover">Frequently Asked </a>
                            <a className="link link-hover"> Questions</a>
                            <a className="link link-hover">Terms and Conditions</a>
                        </div>
                        <div className="text-[20px]">
                            <span className="footer-title">Navigation</span>
                            <a className="link link-hover">     About Us</a>
                            <a className="link link-hover">Blog</a>
                            <a className="link link-hover">Clients </a>
                            <a className="link link-hover">Brands</a>
                            <a className="link link-hover">Careers</a>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Footer;