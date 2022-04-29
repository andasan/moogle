import React from 'react'
import './Button.css'

const Button = ({ children, outline, size }) => {
    let classes = ''
    if(outline) classes += 'outline'
    classes += size
  return (
    <button className={classes}>{children}</button>
  )
}

export default Button