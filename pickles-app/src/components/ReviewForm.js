import React, { useState, useReducer } from 'react'
import { reducer } from '../reducer'
import reviews from '../data-reviews'
import Model from './Model'
import AllReviews from '../components/AllReviews'

const defaultState = {
  allReviews: reviews,
  isModelOpen: false,
  modelContent: '',
  danger: false,
}
const Contact = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && text) {
      const newItem = { id: new Date().setTime().toString(), name, text }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
      setText('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModel = () => {
    dispatch({ type: 'CLOSE_MODEL' })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor='name' className='form-control'>
            Name :
          </label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='rev' className='form-control'>
            Your Review :
          </label>

          <input
            className='rev'
            id='rev'
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {state.isModelOpen && (
          <Model
            danger={state.danger}
            closeModel={closeModel}
            modelContent={state.modelContent}
          />
        )}
        <button type='submit'> add</button>
      </form>
      <h2>See what others say</h2>
      <AllReviews state={state} />
    </>
  )
}

export default Contact
