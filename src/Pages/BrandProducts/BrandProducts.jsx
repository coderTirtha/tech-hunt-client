import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandProduct from '../../components/BrandProduct/BrandProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BrandProducts = () => {
    const filteredProducts = useLoaderData();
    return (
        <div>
            <Swiper>
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-4'>

                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='my-8'>
                <h1 className='text-5xl font-bold text-center my-4'><span className='text-blue'>Latest</span> Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8 container mx-auto'>
                    {
                        filteredProducts.length === 0 ? 
                        <p className='text-center col-span-2 text-gray-500'>No Products yet!</p> :
                        filteredProducts.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;