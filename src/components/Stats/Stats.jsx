import { useEffect, useState } from "react";

const Stats = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(()=> {
        fetch('https://tech-hunt-server-qhyj7wbyw-tirthadas.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        fetch('https://tech-hunt-server-qhyj7wbyw-tirthadas.vercel.app/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, []);
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-5xl text-blue font-bold text-center my-8">Statistics</h1>
            <div className="stats shadow w-full">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Product Stocks</div>
                    <div className="stat-value text-primary">{products.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Brands</div>
                    <div className="stat-value text-secondary">{brands.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Deliveries done</div>
                    <div className="stat-desc text-secondary">31 deliveries remaining</div>
                </div>

            </div>
        </div>
    );
};

export default Stats;