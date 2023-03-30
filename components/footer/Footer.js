import Image from "next/image";
import facebookIcon from "../../public/Img/footer_Icons/facebook.svg";
import instagramIcon from "../../public/Img/footer_Icons/instagram.svg";
import linkedinIcon from "../../public/Img/footer_Icons/linkedin.svg";
import twitterIcon from "../../public/Img/footer_Icons/twitter.svg";
import youtubeIcon from "../../public/Img/footer_Icons/youtube.svg";
import Arrow from "../../public/Img/icons/Arrow1.svg";

const Footer = () => {
    return (
        <section className=" ">

            <div className="bg-[#F45D02] ">
                <div className="2xl:mx-60 md:mx-10 mx-4 h-[175px] md:flex items-center  ">
                    <div className="md:w-1/2 font-bold text-2xl pt-8 md:pt-0 text-white">Sign up for our exclusive email newsletter</div>
                    <div className="md:w-1/2 pt-5 md:pt-0  ">
                        <div className="flex gap-3">
                            <input className="w-[410px] h-12 rounded-[48px] " type="text" />
                            <button className=" bg-[#FFD33F] hover:bg-[#f45d02] hover:text-white rounded-[100px] w-[197px] h-[48px] text-[20px] text-[#110749] flex font-bold items-center justify-center ">
                                <span className="w-[104px]"> Submit</span>
                                <Image className="" src={Arrow} alt="images"></Image>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#102542] md:h-[299px] pt-12">

                <div className="2xl:mx-60 md:mx-10 mx-4 ">
                    <footer className="footer py-10  text-white ">
                        <div className="">
                            <p className="text-[40px] md:text-[20px] lg:text-[40px] font-bold mb-[14px]"> <span className="text-[#F45D02]">CRYPTO</span>  GURU DEALS</p>
                            <div className="">
                                <p className="text-[16px] ">© 2023 Crypto Guru Deals. All rights reserved</p>
                            </div>
                            <div className="flex w-8 h-8 gap-7 md:gap-2 lg:gap-7 mt-[38px]">
                                <Image src={facebookIcon} alt="img" />
                                <Image src={twitterIcon} alt="img" />
                                <Image src={linkedinIcon} alt="img" />
                                <Image ser={instagramIcon} alt="img" />
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