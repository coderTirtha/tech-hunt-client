import React from 'react';

const CartItem = ({ item }) => {
    const { name, brand, photo, price, quantity } = item;
    return (
        <div className='flex items-center shadow-md rounded-md gap-4 p-4'>
            <div>
                <img src={photo} alt="" className='w-[150px] object-cover' />
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold'>{name}</h1>
                <p><span className='font-bold'>Brand :</span> {brand}</p>
                <p><span className='font-bold'>Price :</span> {price}</p>
                <p><span className='font-bold'>Quantity :</span> {quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;