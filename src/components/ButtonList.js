import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex w-[79vw]  overflow-x-scroll ' >
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Coding" />
      <Button name="ReactJS" />
      <Button name="HTML" />
      <Button name="CSS" />
      <Button name="javaScript" />
      <Button name="Gaming" />
      <Button name="Cooking" />
      <Button name="Java" />
    
    </div>
  )
}

export default ButtonList
