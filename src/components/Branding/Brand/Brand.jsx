import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { image, name } = brand;
    return (
        <Link to={`/products/${name.toLowerCase()}`}>
            <div className="flex flex-col justify-between items-center shadow-md rounded-md h-[150px] p-4">
                <div className="flex justify-center items-center flex-1">
                    <img src={image} alt="" className="w-[80px]" />
                </div>
                <h1 className="text-2xl font-semibold">{name}</h1>
            </div>
        </Link>
    );
};

export default Brand;