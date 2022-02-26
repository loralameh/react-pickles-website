import React from 'react'

const AllReviews = ({ state }) => {
  return (
    <div>
      {state.allReviews.map((review) => {
        return (
          <div key={review.id} className='item'>
            <h4>{review.name}</h4>
            <p>{review.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AllReviews
