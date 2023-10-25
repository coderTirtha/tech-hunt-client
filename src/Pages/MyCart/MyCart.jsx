import { useLoaderData } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

const MyCart = () => {
    const filteredUser = useLoaderData();
    const cartItems = filteredUser?.items;
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">You have added <span className="text-blue">{cartItems.length}</span> products to your cart!</h1>
            <div className="max-w-lg mx-auto space-y-4 my-8">
                {
                    cartItems.length === 0 ?
                    <p>No items in cart yet.</p> :
                    cartItems.map(item => <CartItem key={item.name} item={item}></CartItem>) 
                }
            </div>
        </div>
    );
};

export default MyCart;