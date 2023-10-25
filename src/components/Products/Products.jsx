import { Link } from "react-router-dom";
import Product from "./Product/Product";
import {BsArrowRight} from 'react-icons/bs';

const Products = ({ products }) => {
    return (
        <div className="my-8">
            <h1 className="text-5xl font-bold text-center"><span className="text-blue">Top</span> Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto my-8">
                {
                    products.length > 3 ?
                    products.slice(0, 3).map(product => <Product key={product._id} product={product}></Product>) :
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={'/products'}><button className="btn btn-outline">See all <BsArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default Products;