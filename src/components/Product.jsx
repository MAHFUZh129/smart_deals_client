import React from 'react';
import { Link } from 'react-router';

const Product = ({prod}) => {
    const {title,price_min,price_max,image,_id}=prod
    return (
   <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='font-semibold'>Price:${price_min}-{price_max}</p>
    <div className="card-actions justify-end">
      <Link to={`proddetails/${_id}`} className="btn btn-primary w-full">Veiw Details</Link>
    </div>
  </div>
</div>
    );
};

export default Product;