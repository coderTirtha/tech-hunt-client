import google from '../../assets/google.png';
import apple from '../../assets/apple.png';
import mi from '../../assets/mi.png';
import asus from '../../assets/asus.png';
import samsung from '../../assets/samsung.png';
import vivo from '../../assets/vivo.png';
import { Link } from 'react-router-dom';
const Brands = () => {
    return (
        <div className="my-8">
            <h1 className="text-5xl font-bold text-center">Our Featured <span className="text-blue">Brands</span></h1>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 container mx-auto my-8'>
                <Link to={'/products/google'}>
                    <div className='shadow-md rounded-md flex h-[150px] flex-col justify-between items-center p-4 cursor-pointer'>
                        <img src={google} alt="" className='w-[80px]' />
                        <h1 className='text-2xl text-gray-600'>Google</h1>
                    </div>
                </Link>
                <Link to={'/products/apple'}>
                    <div className='shadow-md rounded-md flex h-[150px] flex-col justify-between items-center p-4 cursor-pointer'>
                        <img src={apple} alt="" className='w-[80px]' />
                        <h1 className='text-2xl text-gray-600'>Apple</h1>
                    </div>
                </Link>
                <Link to={'/products/mi'}>
                    <div className='shadow-md rounded-md flex h-[150px] flex-col justify-between items-center p-4 cursor-pointer'>
                        <img src={mi} alt="" className='w-[80px]' />
                        <h1 className='text-2xl text-gray-600'>Xiaomi Mi</h1>
                    </div>
                </Link>
                <Link to={'/products/asus'}>
                    <div className='shadow-md rounded-md flex h-[150px] flex-col justify-between items-center p-4 cursor-pointer'>
                        <img src={asus} alt="" className='w-[80px]' />
                        <h1 className='text-2xl text-gray-600'>Asus</h1>
                    </div>
                </Link>
                <Link to={'/products/dell'}>
                    <div className='shadow-md rounded-md flex h-[150px] flex-col justify-between items-center p-4 cursor-pointer'>
                        <img src={samsung} alt="" className='w-[80px]' />
                        <h1 className='text-2xl text-gray-600'>Samsung</h1>
                    </div>
                </Link>
                <Link to={'/products/vivo'}>
                    <div className='shadow-md rounded-md flex h-[150px] flex-col justify-between items-center p-4 cursor-pointer'>
                        <img src={vivo} alt="" className='w-[80px]' />
                        <h1 className='text-2xl text-gray-600'>Vivo</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Brands;