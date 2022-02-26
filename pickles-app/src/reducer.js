export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newReview = [...state.allReviews, action.payload]
    return {
      ...state,
      danger: false,
      allReviews: newReview,
      isModelOpen: true,
      modelContent: ' Thank you for your review!',
    }
  }
  if (action.type == 'NO_VALUE') {
    return {
      ...state,
      isModelOpen: true,
      modelContent: 'Missing Entry. Please fill both fields',
      danger: true,
    }
  }
  if (action.type == 'CLOSE_MODEL') {
    return { ...state, isModelOpen: false }
  }

  throw new Error('no matching')
}
