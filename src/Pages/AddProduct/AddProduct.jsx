import { useLoaderData } from "react-router-dom";

const AddProduct = () => {
    const brands = useLoaderData();
    return (
        <div className="max-w-xl mx-auto shadow-md rounded-md p-4">
            <h1 className="text-4xl font-bold text-center my-4">Add your Product</h1>
            <form>
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
                        <select name="type" id="" className="input input-bordered text-gray-500" required>
                            <option value="" selected>Select</option>
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
                        <option value="" selected>Select</option>
                        <option value="Phone">Phone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Headphone">Headphone</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" required />
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