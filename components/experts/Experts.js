import Image from 'next/image';
import LinK from 'next/link';
import image44 from '../../public/Img/expertsImg/image44.png';
import image45 from '../../public/Img/expertsImg/image45.png';
import image46 from '../../public/Img/expertsImg/image46.png';
import image47 from '../../public/Img/expertsImg/image47.png';

const Experts = () => {
    return (
        <section className="2xl:mx-60 md:mx-10 mx-4 mt-[130px] mb-[92px] ">
            <div className=" lg:flex ">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <div className="md:w-[543px] w-auto">
                        <p className="font-bold md:p-0 text-[64px]  leading-[78px]">Built by <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD33F] to-[#F45D02]">experts</span> and backed by investors</p>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="grid  grid-cols-2  gap-[50px]">
                        <LinK href="#">
                            <Image className="" src={image44} alt="image" />
                        </LinK>
                        <LinK href="#"> <Image className="" src={image45} alt="image" />
                        </LinK>

                        <LinK href="#"> <Image className="" src={image46} alt="image" /></LinK>
                        <LinK href="#"> <Image className="" src={image47} alt="image" /></LinK>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experts;