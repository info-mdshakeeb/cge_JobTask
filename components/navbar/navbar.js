import Image from "next/image";
import cart from "../../public/Img/icons/cart.png";
import flag from "../../public/Img/icons/image57.png";
import stoke from "../../public/Img/icons/mail.png";
import search from "../../public/Img/icons/search.png";
import vector from "../../public/Img/icons/vector.svg";


function navbar() {
    return (
        <nav >
            <section className="w-full bg-[#102542] h-[66px] flex flex-col justify-center">
                <div className="mx-60">
                    <div className="  text-white flex gap-[30px] text-[15px]">
                        <div className="flex gap-2">
                            <Image className=" w-[21px] " src={vector} alt="" />
                            +86-13530796464
                        </div>
                        <div className="flex gap-2">
                            <Image className=" w-[21px]" src={vector} alt="" />
                            +1-806-305-3242
                        </div>
                        <div className="flex gap-2">
                            <Image className=" w-[21px]" src={stoke} alt="" />
                            deficoincapital@gmail.com
                        </div>
                    </div>
                </div>
            </section>
            <section className=" h-24 shadow-md flex flex-col justify-center">
                <div className="mx-60">
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-sm bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            Parent
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div>
                            <p className="text-[38px] font-bold text-[#102542] "><span className="text-[#F45D02]">CRYPTO</span> GURU DEALS</p>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal gap-7 text-[15px]">
                                <li ><a> Home</a></li>
                                <li><a>Shop</a></li>
                                <li><a>Who we are</a></li>
                                <li><a>FAQS</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contact Us</a></li>
                                <div className="flex justify-center items-center gap-[15px]">
                                    <div className="flex gap-1">
                                        <Image src={flag} height={13} width={18}></Image>
                                        <p>US</p>
                                    </div>
                                    <Image src={search}></Image>
                                    <Image src={cart}></Image>
                                    <p className="btn btn-sm border-2 lowercase">login</p>
                                    <p className="btn btn-sm btn-warning lowercase">SignUp</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="bg-slate-200" />
        </nav>


    );
}

export default navbar;