import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const BrandProduct = ({ product }) => {
    const { _id, brand, name, photo, rating, description } = product;
    return (
        <div className="shadow-md rounded-md flex flex-col justify-between gap-2 p-4">
            <div className="flex justify-center relative">
                <p className="absolute bg-gray-600 bg-opacity-60 top-1 right-1 px-3 py-1 rounded text-gray-100">{brand}</p>
                <img src={photo} alt="" className="w-[200px] h-[200px] object-cover" />
            </div>
            <div className='space-y-2'>
                <h1 className="text-2xl font-semibold text-center">{name}</h1>
                <div className='flex justify-center'>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        className='text-xs text-yellow-400'
                        initialRating={rating}
                        readonly
                    />
                </div>
                <p>{description}</p>
                <div>
                    <Link to={`/product/${_id}`}>
                        <button className='btn btn-block'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;