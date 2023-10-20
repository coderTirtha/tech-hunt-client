import banner from '../../assets/banner.png';
const Banner = () => {
    return (
        <div className='flex items-center p-4'>
            <div className='flex-1 flex justify-center items-center'>
                <div className='space-y-3 max-w-lg'>
                    <h1 className="text-5xl font-bold">Get your Acer Aspire 3 in <br /> <span className="text-blue">20% Off!</span></h1>
                    <p className='text-gray-500'>Upgrade your tech game with the Acer Aspire 3 and enjoy a 20% discount for a limited time! Experience faster performance, sleek design, and unbeatable value in this exclusive offer.</p>
                    <button className='btn bg-blue text-white hover:text-black'>Grab Now</button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-1'>
                <img src={banner} alt="" className='w-[450px]' />
            </div>
        </div>
    );
};

export default Banner;