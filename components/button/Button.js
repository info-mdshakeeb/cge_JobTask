import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/Img/icons/Arrow1.svg";
const Button = ({ text }) => {
    return (

        <Link href="#">
            <button className=" bg-[#FFD33F] hover:bg-[#f45d02] hover:text-white rounded-[100px] w-[401px] h-[82px] text-[20px] text-[#110749] flex font-bold items-center justify-center transition duration-300 ">
                <span className="w-[212px]">  {text}</span>
                <Image className="" src={Arrow} alt="images"></Image>
            </button>
        </Link>

    );
};

export default Button;