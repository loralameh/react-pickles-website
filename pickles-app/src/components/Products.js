import React from 'react'
import { useGlobalContext } from '../context'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import products from '../data-products'
import { Link } from 'react-router-dom'

const Products = () => {
  const { useSlider, useFetch } = useGlobalContext()
  const { index, setIndex, listLength } = useSlider(products)

  return (
    <section className='section'>
      <div className='section-center'>
        {products.map((product, productIndex) => {
          const { image, name, id, price } = product
          let position = 'nextSlide'
          if (productIndex === index) {
            position = 'activeSlide'
          }
          if (
            productIndex === index - 1 ||
            (index === 0 && productIndex === listLength - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <div className='products'>
                <div className='img-container'>
                  <img src={image} alt={name} className='product-img' />
                </div>
                <div className='product-details'>
                  <h3>{name}</h3>
                  <h3>${price}</h3>

                  <Link
                    to={`/products/${id}`}
                    className='btn btn-primary btn-details'
                  >
                    details
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Products
