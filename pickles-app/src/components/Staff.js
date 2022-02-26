import React from 'react'
import { useGlobalContext } from '../context'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
const url = 'https://api.github.com/users'

const Staff = () => {
  const { useFetch, useSlider } = useGlobalContext()
  const { loading, data } = useFetch(url)
  const { index, setIndex, listLength } = useSlider(url)
  let position = 'nextSlide'
  if (loading) return <h3>loading...</h3>
  else
    return (
      <section className='section'>
        <div className='section-center'>
          {data.map((employee, employeeIndex) => {
            const { login, id, avatar_url } = employee
            let position = 'nextSlide'
            if (employeeIndex === index) {
              position = 'activeSlide'
            }
            if (
              employeeIndex === index - 1 ||
              (index === 0 && employeeIndex === listLength - 1)
            ) {
              position = 'lastSlide'
            }
            return (
              <article className={position} key={id}>
                <img src={avatar_url} alt={login} className='person-img' />
                <h4>{login}</h4>
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

export default Staff
