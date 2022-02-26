import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({ image, name, id, info, price }) => {
  return (
    <article className='product'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='product-footer'>
        <h3>{name}</h3>
        <h4>${price}</h4>
        <p>{info}</p>
        <Link to={`/products/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

export default SingleProduct
