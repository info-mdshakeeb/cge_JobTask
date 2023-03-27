import Image from 'next/image';
import arrow from '../../public/Img/icons/Arrow-1.svg';
function Title({ data, mt }) {
    return (
        <div className={`${mt}`}>
            <p className="font-bold leading-[47px] text-center text-[40px]">{data}</p>
            <Image className='mx-auto mt-2 ' src={arrow}></Image>
        </div>
    );
}

export default Title;