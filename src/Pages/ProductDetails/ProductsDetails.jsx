import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsDetails = () => {
    const { user } = useContext(AuthContext);
    const selectedProduct = useLoaderData();
    const handleAddToCart = (name, brand, price, photo) => {
        const quantityField = document.getElementById('quantity');
        const quantity = quantityField.value;
        const newItem = { name, brand, price, photo, quantity }
        fetch(`http://localhost:3000/users/${user.uid}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Successfully added to cart!");
            })
    }
    return (
        <div className="max-w-lg mx-auto p-4 shadow-md flex flex-col justify-between gap-4 rounded-md">
            <div>
                <img src={selectedProduct.photo} alt="" className="max-w-sm mx-auto" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-center">{selectedProduct.name}</h1>
                <p><span className="font-bold">Brand :</span> {selectedProduct.brand}</p>
                <p><span className="font-bold">Price :</span> {selectedProduct.price} BDT/-</p>
                <p><span className="font-bold">Description :</span> {selectedProduct.description}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="form-control max-w-[100px] mx-auto">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="number" name="quantity" defaultValue={1} id="quantity" className="input input-bordered" />
                </div>
                <button onClick={() => handleAddToCart(selectedProduct.name, selectedProduct.brand, selectedProduct.price, selectedProduct.photo)} className="btn btn-outline btn-block">Add to Cart</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductsDetails;