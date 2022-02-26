import React, { useEffect } from 'react'

const Modal = ({ modelContent, closeModel, danger }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel()
    }, 4000)
  })
  return (
    <div className={`${danger ? 'model danger' : 'model'}`}>
      <p>{modelContent}</p>
    </div>
  )
}

export default Modal
