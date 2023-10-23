import React from 'react';
import Rating from 'react-rating';
const Product = ({ product }) => {
    const { name, brand, photo, type, price, description, rating } = product;
    return (
        <div className="flex flex-col justify-between gap-2 shadow-md rounded-md p-4">
            <div className="relative">
                <p className="bg-gray-600 bg-opacity-60 text-white absolute px-2 py-1 top-1 right-1 rounded">{brand}</p>
                <div className='flex justify-center'>
                    <img src={photo} className='w-[200px] h-[200px] object-cover' />
                </div>
            </div>
            <div className="px-4 space-y-2">
                <h1 className="text-2xl font-semibold text-center">{name}</h1>
                <p className="text-center">{price} BDT/-</p>
                <div className='flex justify-center'>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        className='text-xs text-yellow-400'
                        initialRating={rating}
                        readonly
                    />
                </div>
                <p className="text-gray-500 text-justify">{description}</p>
            </div>
            <div>
                <button className='btn btn-block'>See details</button>
            </div>
        </div>
    );
};

export default Product;