import Brand from './Brand/Brand';
const Brands = ({ brands }) => {
    return (
        <div className="my-8">
            <h1 className="text-5xl font-bold text-center">Our Featured <span className="text-blue">Brands</span></h1>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 container mx-auto my-8'>
                {
                    brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;