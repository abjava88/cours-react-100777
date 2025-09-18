import React from 'react'

const Book2 = ({children, color}) => {
  return (
    <div style={{color: color}}>
      {children}
    </div>
  )
}

export default Book2
