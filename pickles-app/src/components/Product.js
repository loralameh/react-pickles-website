import React, { useEffect, useState, useReducer } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data-products'
const Product = () => {
  const { id } = useParams()
  const [name, setName] = useState('product name')
  const [image, setimage] = useState('')
  const [price, setprice] = useState(0)
  const [text, settext] = useState('')

  useEffect(() => {
    const newProduct = products.find((x) => x.id === parseInt(id))
    setName(newProduct.name)
    setimage(newProduct.image)
    setprice(newProduct.price)
    settext(newProduct.text)
  }, [])
  return (
    <div className='products'>
      <div className='img-container'>
        <img src={image} alt={name} className='product-img' />
      </div>
      <div className='product-details'>
        <h3>{name}</h3>
        <h3>${price}</h3>
        <p>{text}</p>
        <Link to={`/`} className='btn btn-primary btn-details'>
          Go back Home
        </Link>
      </div>
    </div>
  )
}

export default Product
