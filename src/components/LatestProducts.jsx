import React, { use } from 'react';
import Product from './Product';

const LatestProducts = ({ latestProductsPromise }) => {
    const products = use(latestProductsPromise);
    // console.log(products)
    return (
        <div className='max-w-11/12 mx-auto space-y-4'>
            <h2 className='text-3xl font-bold text-center text-purple-500'>Recent Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    products.map(prod => <Product key={prod._id} prod={prod}></Product>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;