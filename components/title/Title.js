import Image from 'next/image';
import arrow from '../../public/Img/icons/Arrow-1.svg';
function Title({ data, mt, mb }) {
    return (
        <div className={`${mt} ${mb}`}>
            <p className="font-bold leading-[47px] text-center text-[40px]">{data}</p>
            <Image className='mx-auto mt-2 ' src={arrow} alt="image"></Image>
        </div>
    );
}

export default Title;