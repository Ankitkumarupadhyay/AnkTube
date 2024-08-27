import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-2 bg-gray-300 my-5 mx-3 rounded-xl'>{name} </button>
    </div>
  )
}

export default Button
