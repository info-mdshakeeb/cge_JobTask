import Image from "next/image";
import Arrow from "../../public/Img/icons/Arrow1.svg";
const Button = ({ text }) => {
    return (
        <button className=" bg-[#FFD33F] rounded-[100px] w-[401px] h-[82px] text-[20px] text-[#110749] flex font-bold items-center justify-center ">
            <span className="w-[212px]">  {text}</span>
            <Image className="" src={Arrow}></Image>
        </button>
    );
};

export default Button;