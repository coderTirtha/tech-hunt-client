import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Branding/Brands";
import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Stats from "../../components/Stats/Stats";

const Home = () => {
    const brands = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Products products={products}></Products>
            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;