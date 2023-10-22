import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
    const brands = useLoaderData();
    const handleProductAddition = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const brand = form.get('brand');
        const photo = form.get('photo');
        const price = form.get('price');
        const rating = form.get('rating');
        const type = form.get('type');
        const description = form.get('description');
        const newProduct = { name, brand, photo, price, type, rating, description }
        console.log(newProduct)
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                const formRes = e.target;
                formRes.reset();
            }
        })
    }
    return (
        <div className="max-w-xl mx-auto shadow-md rounded-md p-4">
            <h1 className="text-4xl font-bold text-center my-4">Add your Product</h1>
            <form onSubmit={handleProductAddition}>
                <div className="flex gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select name="brand" id="" className="input input-bordered text-gray-500" required>
                            <option value="">Select</option>
                            {
                                brands.map(brand => <option value={brand.name} key={brand._id}>{brand.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <select name="type" id="" className="input input-bordered text-gray-500" required>
                        <option value="" >Select</option>
                        <option value="Phone">Phone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Headphone">Headphone</option>
                    </select>
                </div>
                <div className="flex gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="btn btn-outline">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;