import React from 'react'

const ColoredBook = ({children, color}) => {
  return (
    <div style={{color: color}}>
      {children}
    </div>
  )
}

export default ColoredBook
